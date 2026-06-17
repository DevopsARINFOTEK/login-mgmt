// src/components/Hero.jsx

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#0f172a]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e5aa8] via-[#103466] to-[#0f172a]" />

      {/* Blur Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[100px]" />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center w-full">
        {/* Left Content */}
        <div className="lg:col-span-8 text-center lg:text-left">
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
            <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold backdrop-blur-md border border-white/20">
              LIVE • ONLINE
            </span>

            <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold backdrop-blur-md border border-white/20">
              SMALL COHORTS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Level-Up Your
            <br />
            Tech Career with
          </h1>

          <div className="inline-block mt-5 bg-white text-orange-500 px-6 py-2 rounded-xl text-3xl md:text-5xl font-black shadow-2xl">
            AR INFOTEK
          </div>

          <p className="mt-8 text-lg text-blue-100 max-w-2xl">
            Live instructor-led training in{" "}
            <strong>AI / ML</strong>,{" "}
            <strong>Data Science</strong>,{" "}
            <strong>Cloud Computing</strong>,{" "}
            <strong>DevOps</strong>,{" "}
            <strong>Python</strong>, and{" "}
            <strong>Power BI</strong>.
            <br />
            Learn by building real-world projects.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#courses"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:scale-105 transition"
            >
              Browse Courses
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-white text-white font-bold hover:bg-white hover:text-[#1e5aa8] transition"
            >
              Get Counselling
            </a>
          </div>

          <div className="flex gap-10 mt-12 justify-center lg:justify-start">
            <div>
              <h2 className="text-3xl font-black text-white">3000+</h2>
              <p className="text-blue-200 text-sm uppercase">
                Learners
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white">4.8/5</h2>
              <p className="text-blue-200 text-sm uppercase">
                Rating
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white">100%</h2>
              <p className="text-blue-200 text-sm uppercase">
                Practical
              </p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-3xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-800 mb-5">
              Upcoming Batches
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: "AWS Architect",
                  date: "25 Nov • Weekdays",
                },
                {
                  title: "Data Science",
                  date: "02 Dec • Weekends",
                },
                {
                  title: "DevOps Master",
                  date: "09 Dec • Weekdays",
                },
              ].map((course) => (
                <div
                  key={course.title}
                  className="border rounded-2xl p-4 hover:border-orange-400 transition"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-800">
                        {course.title}
                      </h4>

                      <p className="text-sm text-slate-500">
                        {course.date}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="bg-orange-500 text-white text-xs font-bold px-3 py-2 rounded-lg"
                    >
                      Enroll
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-6 block w-full text-center py-3 rounded-xl border-2 border-[#1e5aa8] text-[#1e5aa8] font-bold hover:bg-[#1e5aa8] hover:text-white transition"
            >
              Request Syllabus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}