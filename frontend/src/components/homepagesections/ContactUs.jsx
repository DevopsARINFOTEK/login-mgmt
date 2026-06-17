// src/components/ContactUs.jsx

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Talk to an AR INFOTEK Advisor
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Have questions about our courses or internship programs? Fill out
            the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Course Interested In
                </label>

                <select className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none">
                  <option>AWS Cloud Architect</option>
                  <option>Data Science & ML</option>
                  <option>Cloud & DevOps</option>
                  <option>Cybersecurity</option>
                  <option>Python Programming</option>
                  <option>AI / Machine Learning</option>
                  <option>Internship Program</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your learning goals..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#1e5aa8] to-[#103466] py-4 text-white font-bold hover:shadow-xl transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                Contact Information
              </h3>

              <div className="space-y-5 text-slate-700">
                <div>
                  <p className="font-semibold text-blue-700">📧 Email</p>
                  <p>admissions@arinfotek.co.in</p>
                </div>

                <div>
                  <p className="font-semibold text-blue-700">📞 Phone</p>
                  <p>+91 9487107253</p>
                </div>

                <div>
                  <p className="font-semibold text-blue-700">💬 WhatsApp</p>
                  <p>+91 9487107253</p>
                </div>

                <div>
                  <p className="font-semibold text-blue-700">
                    🕒 Office Hours
                  </p>
                  <p>Monday – Saturday</p>
                  <p>9:00 AM – 7:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-[#1e5aa8] to-[#103466] p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold">
                Need Career Guidance?
              </h3>

              <p className="mt-3 text-blue-100">
                Speak with our mentors to choose the right learning path in
                Cloud, AI, DevOps, Data Science, or Full Stack Development.
              </p>

              <a
                href="tel:+919487107253"
                className="inline-block mt-6 rounded-xl bg-orange-500 px-6 py-3 font-bold hover:bg-orange-600 transition"
              >
                Call Now
              </a>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 text-center shadow">
              <h4 className="text-lg font-bold text-slate-900">
                Live Online Training
              </h4>

              <p className="mt-2 text-slate-600">
                ✔ Weekday & Weekend Batches
              </p>

              <p className="text-slate-600">
                ✔ Real-Time Projects
              </p>

              <p className="text-slate-600">
                ✔ Placement Assistance
              </p>

              <p className="text-slate-600">
                ✔ Internship Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}