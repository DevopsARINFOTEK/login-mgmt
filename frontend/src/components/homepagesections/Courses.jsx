// src/components/Courses.jsx

const courses = [
  {
    badge: "Industry Focused",
    badgeColor: "bg-green-100 text-green-700",
    title: "AWS Cloud Architect",
    description:
      "Design scalable architectures, VPC, IAM, EC2, Load Balancing & Security.",
    duration: "16 Weeks Duration",
    level: "Beginner to Advanced",
  },
  {
    badge: "Most Popular",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Data Science & ML",
    description:
      "Python, Pandas, Machine Learning, Deep Learning, and MLOps overview.",
    duration: "14 Weeks Duration",
    level: "Intermediate",
  },
  {
    badge: "Career Switch",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, Docker, Kubernetes, Jenkins, CI/CD and Terraform.",
    duration: "12 Weeks Duration",
    level: "Intermediate",
  },
  {
    badge: "New",
    badgeColor: "bg-yellow-100 text-yellow-800",
    title: "Cybersecurity",
    description:
      "Network Security, SIEM, Threat Hunting, Blue Team Labs and SOC.",
    duration: "10 Weeks Duration",
    level: "Beginner",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12">
          <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
            Our Programs
          </span>

          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">
            In-Demand Tech Skills
          </h2>

          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-700 to-orange-500 rounded-full mt-4" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
            >
              <div className="mb-4">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-bold ${course.badgeColor}`}
                >
                  {course.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {course.title}
              </h3>

              <p className="text-sm text-slate-600 mb-5 flex-grow">
                {course.description}
              </p>

              <div className="text-xs text-slate-500 space-y-1 mb-6">
                <p>• {course.duration}</p>
                <p>• {course.level}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-auto">
                <a
                  href="#contact"
                  className="text-center py-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm hover:shadow-lg transition"
                >
                  Enroll
                </a>

                <a
                  href="#"
                  className="text-center py-2 rounded-xl border border-blue-700 text-blue-700 font-bold text-sm hover:bg-blue-700 hover:text-white transition"
                >
                  Syllabus
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition shadow-lg"
          >
            Talk to a Course Advisor
          </a>
        </div>
      </div>
    </section>
  );
}