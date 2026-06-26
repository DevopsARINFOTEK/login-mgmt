import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [activeTab, setActiveTab] = useState("login");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    role: ""
  });


  const handleContinueLearning = (role) => {
    switch (role) {
      case "ADMIN":
        navigate("/admin-dashboard");
        break;
      case "EMPLOYEE":
        navigate("/employee-dashboard");
        break;
      case "STUDENT":
        navigate("/student-dashboard");
        break;
      case "INTERN":
        navigate("/intern-dashboard");
        break;
      case "HR":
        navigate("/hr-dashboard");
        break;
      default:
        navigate("/");
    }
  };

  async function loginUser(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          username: loginData.username,
          password: loginData.password,
          role: loginData.role,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;

      if (data && data.message === "Login Success") {
        // expiry (30 minutes)
        const expiryTime = Date.now() + 30 * 60 * 1000;

        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("loginExpiry", expiryTime.toString());
        sessionStorage.setItem("userRole", data.role || loginData.role);

        setIsLoggedIn(true);
        setMessage(`✅ Login Successful! Logged in as ${data.role || loginData.role}`);

        // navigate based on role returned from server (fallback to loginData.role)
        const userRole = data.role || loginData.role;
        switch (userRole) {
          case "ADMIN":
            navigate("/admin-dashboard");
            break;
          case "EMPLOYEE":
            navigate("/employee-dashboard");
            break;
          case "STUDENT":
            navigate("/student-dashboard");
            break;
          case "INTERN":
            navigate("/intern-dashboard");
            break;
          case "HR":
            navigate("/hr-dashboard");
            break;
          case "TRAINER":
            navigate("/trainer-dashboard");
            break;
          default:
            navigate("/");
        }
        return;
      }

      setMessage("❌ Invalid Username or Password");
    } catch (error) {
      console.error(error);
      setMessage("❌ Login Failed");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-900 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* Left Side */}
        <div className="flex-1 bg-gradient-to-br from-blue-700 to-blue-950 text-white p-10 md:p-16 flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold mb-4">
            AR INFOTEK
          </h1>

          <p className="text-lg leading-8 opacity-90">
            Online IT Training, Internship Programs,
            Project Development, Placement Assistance,
            and Career Support for Students and Graduates.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 md:p-12">

          <div className="text-center mb-8">
            <img
              src="https://www.arinfotek.co.in/arinfotek_logo.png"
              alt="AR INFOTEK"
              className="w-20 mx-auto mb-3"
            />

            <h2 className="text-3xl font-bold text-blue-700">
              AR INFOTEK
            </h2>

            <p className="text-gray-500">
              Training & Internship Portal
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border rounded-xl overflow-hidden mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-3 font-bold ${
                activeTab === "login"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-3 font-bold ${
                activeTab === "signup"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100"
                }`}
            >
              Sign Up
            </button>
          </div>

          {activeTab === "login" ? (
            <form onSubmit={loginUser} className="space-y-4">
              
     
              <input
                type="text"
                placeholder="Registration ID / Email"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    username: e.target.value,
                  })
                }
                className="w-full border rounded-xl p-3"
              />

              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
                className="w-full border rounded-xl p-3"
              />

              <div className="text-right">
                <a
                  href="#"
                  className="text-blue-700 text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {message && (
                <div className="text-center font-semibold">
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl"
              >
                Login
              </button>
            </form>
          ) : (
            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="password"
                placeholder="Create Password"
                className="w-full border rounded-xl p-3"
              />

              <button
                type="button"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl"
              >
                Create Account
              </button>

            </div>
          )}
        </div>
      </div>
    </main>
  );
}