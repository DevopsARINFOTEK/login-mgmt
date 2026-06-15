import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <a
            href="/"
            className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
          >
            Home
          </a>

          <a
            href="#courses"
            className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
          >
            Courses
          </a>

          <a
            href="#why"
            className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
          >
            Why Us
          </a>

          <a
            href="#projects"
            className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
          >
            Innovation Labs
          </a>

          <a
            href="#internship"
            className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
          >
            Internship
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg border-2 border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 transition"
          >
            Talk to Us
          </a>

          <a
            href="#courses"
            className="px-4 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            View Courses
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-slate-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="flex flex-col p-4 space-y-3">
            <a href="/" className="font-medium">
              Home
            </a>

            <a href="#courses" className="font-medium">
              Courses
            </a>

            <a href="#why" className="font-medium">
              Why Us
            </a>

            <a href="#projects" className="font-medium">
              Innovation Labs
            </a>

            <a href="#internship" className="font-medium">
              Internship
            </a>

            <a href="#contact" className="font-medium">
              Contact
            </a>

            <a
              href="#courses"
              className="mt-2 rounded-lg bg-orange-500 text-white text-center py-2 font-semibold"
            >
              View Courses
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
