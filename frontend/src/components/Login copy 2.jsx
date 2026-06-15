import { useState } from "react";
import axios from "axios";
export default function Login() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        loginData
      );

      const data = response.data;

      setMessage("✅ Login Successful");

      setTimeout(() => {
        if (data.role === "ADMIN") {
          window.location.href = "/admin-dashboard";
        } else if (data.role === "EMPLOYEE") {
          window.location.href = "/employee-dashboard";
        } else if (data.role === "STUDENT") {
          window.location.href = "/student-dashboard";
        } else if (data.role === "INTERN") {
          window.location.href = "/intern-dashboard";
        }
      }, 1000);
    } catch (error) {
      setMessage("❌ Invalid Username or Password");
    }
  };

  return (
     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <a href="#" className="flex items-center hover:opacity-90 transition">
          <img
            src="https://www.arinfotek.co.in/arinfotek_logo.png"
            alt="AR INFOTEK"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1 rounded-full border border-slate-100">
          <a
            href="#"
            className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-primary hover:shadow-md transition-all duration-300"
          >
            Home
          </a>

          <a
            href="#courses"
            className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-primary hover:shadow-md transition-all duration-300"
          >
            Courses
          </a>

          <a
            href="#why"
            className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-primary hover:shadow-md transition-all duration-300"
          >
            Why Us
          </a>

          <a
            href="#projects"
            className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-primary hover:shadow-md transition-all duration-300"
          >
            Innovation Labs
          </a>

          <a
            href="#internship"
            className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-primary hover:shadow-md transition-all duration-300"
          >
            Internship
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg border border-slate-200"
        >
          ☰
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t p-4">
          <a href="#" className="block py-2">
            Home
          </a>
          <a href="#courses" className="block py-2">
            Courses
          </a>
          <a href="#why" className="block py-2">
            Why Us
          </a>
          <a href="#projects" className="block py-2">
            Innovation Labs
          </a>
          <a href="#internship" className="block py-2">
            Internship
          </a>
        </div>
      )}
    </header>
  );
}


    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-900 to-slate-900 flex items-center justify-center p-5">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* Left Panel */}
        <div className="flex-1 bg-gradient-to-br from-blue-700 to-blue-950 text-white p-10 md:p-16 flex flex-col justify-center">

          <h1 className="text-5xl font-extrabold mb-4">
            AR INFOTEK
          </h1>

          <p className="text-lg leading-8 opacity-90">
            Online IT Training, Internship Programs,
            Project Development, Placement Assistance
            and Career Support for Students and Graduates.
          </p>

        </div>

        {/* Right Panel */}
        <div className="flex-1 p-8 md:p-12">

          <div className="text-center mb-8">

            <img
              src="https://www.arinfotek.co.in/arinfotek_logo.png"
              alt="logo"
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

          {/* LOGIN */}
          {activeTab === "login" && (
            <form onSubmit={loginUser}>

                const [role,setRole] = useState("");

<select
    value={role}
    onChange={(e)=>setRole(e.target.value)}
    className="w-full p-4 border rounded-xl mb-4"
>
    <option value="">Select Role</option>
    <option value="ADMIN">Admin</option>
    <option value="EMPLOYEE">Employee</option>
    <option value="STUDENT">Student</option>
    <option value="INTERN">Intern</option>
</select>

              <input
                type="text"
                placeholder="Registration ID / Email"
                className="w-full p-4 border rounded-xl mb-4"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    username: e.target.value,
                  })
                }
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 border rounded-xl mb-4"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
              />

              <div className="text-right mb-4">
                <a href="#" className="text-blue-700 text-sm">
                  Forgot Password?
                </a>
              </div>

              {message && (
                <div className="mb-4 text-center font-semibold">
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold"
              >
                Login
              </button>

            </form>
          )}

          {/* SIGNUP */}
          {activeTab === "signup" && (
            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border rounded-xl"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border rounded-xl"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-4 border rounded-xl"
              />

              <input
                type="text"
                placeholder="Registration ID"
                className="w-full p-4 border rounded-xl"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 border rounded-xl"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-4 border rounded-xl"
              />

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold">
                Create Account
              </button>

            </div>
          )}

              {/* Company */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-black text-white">
          AR INFOTEK
        </span>
      </div>

      <p className="text-sm text-slate-300">
        Practical, mentor-led online IT training to accelerate your career.
      </p>
    </div>

    {/* Programs */}
    <div>
      <h5 className="font-bold text-accent mb-4">
        Programs
      </h5>

      <ul className="space-y-2 text-sm">
        <li>
          <a href="#courses" className="hover:text-white">
            AWS Architect
          </a>
        </li>

        <li>
          <a href="#courses" className="hover:text-white">
            Data Science
          </a>
        </li>

        <li>
          <a href="#courses" className="hover:text-white">
            DevOps
          </a>
        </li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h5 className="font-bold text-accent mb-4">
        Company
      </h5>

      <ul className="space-y-2 text-sm">
        <li>
          <a href="#why" className="hover:text-white">
            Why Us
          </a>
        </li>

        <li>
          <a href="#instructors" className="hover:text-white">
            Instructors
          </a>
        </li>

        <li>
          <a href="#testimonials" className="hover:text-white">
            Testimonials
          </a>
        </li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h5 className="font-bold text-accent mb-4">
        Legal
      </h5>

      <ul className="space-y-2 text-sm">
        <li>
          <a href="#" className="hover:text-white">
            Terms
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
        </li>
      </ul>
    </div>

  </div>
          <div className="text-center text-sm text-gray-500 mt-6">
            © 2026 AR INFOTEK | Internship • Training • Placement Assistance
          </div>

        </div>
      </div>
}