// src/components/WhyUs.jsx

const features = [
  {
    title: "Live & Interactive Classes",
    description:
      "Attend live instructor-led sessions, ask questions in real time, and learn through hands-on demonstrations.",
    icon: "💻",
  },
  {
    title: "Project-Based Learning",
    description:
      "Build real-world projects in AI, Cloud, DevOps, Data Science, and Full Stack to strengthen your portfolio.",
    icon: "🚀",
  },
  {
    title: "Industry Expert Mentors",
    description:
      "Learn directly from experienced professionals working in leading IT companies and startups.",
    icon: "👨‍🏫",
  },
  {
    title: "Small Batch Size",
    description:
      "Get personalized attention, one-on-one guidance, and better interaction with mentors.",
    icon: "👥",
  },
  {
    title: "Flexible Timings",
    description:
      "Choose weekday or weekend batches designed for students and working professionals.",
    icon: "🕒",
  },
  {
    title: "Certification & Career Support",
    description:
      "Receive course completion certificates, resume guidance, interview preparation, and placement assistance.",
    icon: "🏆",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Why AR INFOTEK?
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            We combine expert mentorship, practical learning, and real-world
            projects to help students and professionals build successful IT
            careers.
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-orange-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-100 text-3xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-black">3000+</h3>
              <p className="mt-2 text-blue-100">Students Trained</p>
            </div>

            <div>
              <h3 className="text-4xl font-black">50+</h3>
              <p className="mt-2 text-blue-100">Live Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-black">4.8★</h3>
              <p className="mt-2 text-blue-100">Student Rating</p>
            </div>

            <div>
              <h3 className="text-4xl font-black">100%</h3>
              <p className="mt-2 text-blue-100">Practical Training</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}