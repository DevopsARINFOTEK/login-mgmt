export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold mb-4">AR INFOTEK</h2>
          <p className="text-sm text-gray-300 leading-6">
            Practical, mentor-led online IT training, internships, project
            development, placement assistance, and career support for students
            and professionals.
          </p>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Programs
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#courses" className="hover:text-orange-300">
                AWS Architect
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-orange-300">
                Data Science
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-orange-300">
                DevOps
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-orange-300">
                Full Stack Development
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#why" className="hover:text-orange-300">
                Why AR INFOTEK
              </a>
            </li>
            <li>
              <a href="#internship" className="hover:text-orange-300">
                Internship
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-300">
                Innovation Labs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: info@arinfotek.co.in</li>
            <li>Website: www.arinfotek.co.in</li>
            <li>Online IT Training & Internship Portal</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-300">
          © 2026 AR INFOTEK. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}