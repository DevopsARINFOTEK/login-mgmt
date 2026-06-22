import { useState, useEffect } from "react";

import Header from "./components/Header";
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
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
          <Dashboard />
        ) : showLogin ? (
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setShowLogin={setShowLogin}
          />
        ) : (
          <HomePage />
        )}
      </main>

      {/* Footer only for logged-out users */}
      {!isLoggedIn && <Footer />}
    </div>
  );
}

export default App;