// src/components/CTA.jsx

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1e5aa8] via-[#2563eb] to-[#103466] p-10 md:p-14 shadow-2xl">
          {/* Background Glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold uppercase tracking-wider">
                🚀 Start Your Career Journey
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Ready to Become an
                <span className="block text-orange-300">
                  Industry-Ready IT Professional?
                </span>
              </h2>

              <p className="mt-5 text-blue-100 text-lg leading-relaxed">
                Join AR INFOTEK and gain practical experience in Cloud
                Computing, AI/ML, Data Science, DevOps, Full Stack Development,
                Cybersecurity, and more through live mentor-led training.
              </p>

              {/* Highlights */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  ✅ Live Online Classes
                </span>

                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  ✅ Real-Time Projects
                </span>

                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  ✅ Placement Support
                </span>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-lg hover:scale-105 transition text-center"
              >
                Book Free Counselling
              </a>

              <a
                href="#courses"
                className="px-8 py-4 rounded-xl bg-white text-[#1e5aa8] font-bold hover:bg-slate-100 transition text-center"
              >
                Explore Courses
              </a>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="relative z-10 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-8">
            <div className="text-center">
              <h3 className="text-3xl font-black text-white">3000+</h3>
              <p className="text-blue-100 text-sm">Students Trained</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-black text-white">50+</h3>
              <p className="text-blue-100 text-sm">Industry Projects</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-black text-white">4.8★</h3>
              <p className="text-blue-100 text-sm">Student Rating</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-black text-white">100%</h3>
              <p className="text-blue-100 text-sm">Practical Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}