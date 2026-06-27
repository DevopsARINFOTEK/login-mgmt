import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLayout from "./components/AdminLayout";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployeeManagement from "./pages/EmployeeManagement";
import EmployeeLayout from "./components/EmployeeLayout";
import InternDashboard from "./pages/InternDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import InternLayout from "./components/InternLayout";
import StudentLayout from "./components/StudentLayout";
import InvoiceManagement from "./pages/InvoiceManagement";
import PaymentManagement from "./pages/PaymentManagement";
import CourseManagement from "./pages/CourseManagement";
import StudentManagement from "./pages/StudentManagement";
import InternManagement from "./pages/InternManagement";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Check existing session when app starts
  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLoggedIn");
    const expiryTime = sessionStorage.getItem("loginExpiry");

    if (
      loggedIn === "true" &&
      expiryTime &&
      Date.now() < Number(expiryTime)
    ) {
      setIsLoggedIn(true);
    } else {
      sessionStorage.removeItem("isLoggedIn");
      sessionStorage.removeItem("loginExpiry");
      sessionStorage.removeItem("userRole");
      setIsLoggedIn(false);
    }
  }, []);

  // Automatically logout when session expires
  useEffect(() => {
    if (!isLoggedIn) return;

    const interval = setInterval(() => {
      const expiryTime = sessionStorage.getItem("loginExpiry");

      if (
        !expiryTime ||
        Date.now() >= Number(expiryTime)
      ) {
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("loginExpiry");
        sessionStorage.removeItem("userRole");

        setIsLoggedIn(false);
        setShowLogin(false);

        alert("Session expired. Please log in again.");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoggedIn]);

  // Logout function
  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("loginExpiry");
    sessionStorage.removeItem("userRole");

    setIsLoggedIn(false);
    setShowLogin(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header
          isLoggedIn={isLoggedIn}
          setShowLogin={setShowLogin}
          onLogout={handleLogout}
        />

        {/* Main Content */}
        <main className="flex-1">
          {isLoggedIn ? (
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin/employees" element={<EmployeeManagement />} />
              <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
              <Route path="/intern-dashboard" element={<InternDashboard />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
            </Routes>
          ) : showLogin ? (
            <Login
              setIsLoggedIn={setIsLoggedIn}
              setShowLogin={setShowLogin}
            />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin/*" element={<AdminLayout />} />
              <Route path="/admin/employees" element={<EmployeeManagement />} />
              <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
              <Route path="/employee/*" element={<EmployeeLayout />} />
              <Route path="/intern-dashboard" element={<InternDashboard />} />
              <Route path="/intern/*" element={<InternLayout />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/student/*" element={<StudentLayout />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          )}
        </main>

        {/* Footer only for logged-out users */}
        {!isLoggedIn && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;