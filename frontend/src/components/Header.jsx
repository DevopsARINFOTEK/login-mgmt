import { useState } from "react";

export default function Header({
  isLoggedIn,
  setShowLogin,
  onLogout,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get role from localStorage
  const userRole = sessionStorage.getItem("userRole");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://www.arinfotek.co.in/arinfotek_logo.png"
            alt="AR INFOTEK"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-semibold hover:text-blue-700">
            Home
          </a>

          <a
            href="#courses"
            className="text-sm font-semibold hover:text-blue-700"
          >
            Courses
          </a>

          <a
            href="#why"
            className="text-sm font-semibold hover:text-blue-700"
          >
            Why Us
          </a>

          <a
            href="#projects"
            className="text-sm font-semibold hover:text-blue-700"
          >
            Innovation Labs
          </a>

          <a
            href="#internship"
            className="text-sm font-semibold hover:text-blue-700"
          >
            Internship
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold hover:text-blue-700"
          >
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn && (
            <span className="px-3 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold text-sm">
              {userRole}
            </span>
          )}

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => setShowLogin(true)}
                className="px-4 py-2 rounded-lg border-2 border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 transition"
              >
                Sign In
              </button>

              <a
                href="#courses"
                className="px-4 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              >
                View Courses
              </a>
            </>
          ) : (
            <button
              onClick={onLogout}
              className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-slate-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 p-4 space-y-3">
          <a href="/" className="block">
            Home
          </a>

          <a href="#courses" className="block">
            Courses
          </a>

          <a href="#why" className="block">
            Why Us
          </a>

          <a href="#projects" className="block">
            Innovation Labs
          </a>

          <a href="#internship" className="block">
            Internship
          </a>

          <a href="#contact" className="block">
            Contact
          </a>

          {isLoggedIn && (
            <div className="text-center bg-blue-100 text-blue-700 py-2 rounded-lg font-semibold">
              Role: {userRole}
            </div>
          )}

          {!isLoggedIn ? (
            <button
              onClick={() => {
                setShowLogin(true);
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 rounded-lg border-2 border-blue-700 text-blue-700 font-semibold"
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={() => {
                onLogout();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 rounded-lg bg-red-500 text-white font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}