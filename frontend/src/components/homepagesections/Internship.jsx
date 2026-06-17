// src/components/Internship.jsx

const domains = [
  "AI / Machine Learning",
  "Cloud Computing (AWS & Azure)",
  "Data Science",
  "Full Stack Web Development",
  "Python Programming",
  "Mobile App Development",
  "DevOps",
  "Vibe Coding",
];

const benefits = [
  "Real-World Projects",
  "Industry Exposure",
  "Resume Building",
  "Interview Preparation",
  "Internship Certificate",
  "Expert Mentorship",
];

const eligible = [
  "BE / B.Tech – 2nd, 3rd & Final Year",
  "BCA / B.Sc Students",
  "MCA Students",
  "Diploma Students",
];

export default function Internship() {
  return (
    <section id="internship" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Kickstart Your IT Career
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
            Internship Program 2026
          </h2>

          <p className="mt-5 text-slate-600 text-lg">
            Gain hands-on experience with real-world projects, expert mentorship,
            and industry-ready skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left */}
          <div className="lg:col-span-2">
            {/* Domains */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Internship Domains
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {domains.map((item) => (
                <div
                  key={item}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:border-blue-600 hover:shadow-md transition"
                >
                  <h4 className="font-bold text-blue-700">{item}</h4>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Why Join Our Internship?
            </h3>

            <div className="grid md:grid-cols-2 gap-5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    ✓
                  </div>

                  <span className="font-medium text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Eligibility */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-5">
                Who Can Join?
              </h3>

              <ul className="space-y-3">
                {eligible.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                      ✓
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-[#0f172a] to-[#1e5aa8] text-white rounded-3xl p-8 shadow-2xl">
              <span className="inline-block bg-orange-500 px-3 py-1 rounded-full text-xs font-bold uppercase">
                Special Offer
              </span>

              <h2 className="mt-5 text-5xl font-black">₹1999</h2>

              <p className="mt-2 text-blue-100">
                Internship Program Fee
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li>✅ Flexible Timings</li>
                <li>✅ Live Online Sessions</li>
                <li>✅ Mentor Support</li>
                <li>✅ Project Certificate</li>
                <li>✅ Real-Time Projects</li>
              </ul>

              <a
                href="#contact"
                className="block mt-8 text-center py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 font-bold hover:scale-105 transition"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}