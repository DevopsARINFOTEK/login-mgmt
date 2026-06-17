// src/components/Testimonials.jsx

const testimonials = [
  {
    name: "Harish Kumar",
    role: "Cloud Engineer",
    company: "StartupX",
    rating: 5,
    feedback:
      "The AWS Cloud Architect course gave me hands-on experience with VPC, IAM, EC2, and real-world deployments. I landed a Cloud Engineer role within a few months.",
  },
  {
    name: "Vikram Rao",
    role: "Data Analyst",
    company: "RetailCorp",
    rating: 5,
    feedback:
      "The Data Science & Machine Learning program was highly practical. Working on live datasets and projects helped me confidently transition into analytics.",
  },
  {
    name: "Neha Sharma",
    role: "DevOps Engineer",
    company: "FinTech Solutions",
    rating: 5,
    feedback:
      "Docker, Kubernetes, Jenkins, and CI/CD pipelines were explained with real industry use cases. The mentorship and support were outstanding.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Student Success Stories
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
            What Our Learners Say
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Thousands of students and professionals have advanced their careers
            with AR INFOTEK through practical, mentor-led training.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Stars */}
              <div className="flex mb-5">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <span key={index} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Feedback */}
              <p className="text-slate-600 italic leading-relaxed">
                “{item.feedback}”
              </p>

              {/* Divider */}
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full my-6" />

              {/* User Info */}
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-blue-700 font-medium">
                  {item.role}
                </p>

                <p className="text-xs text-slate-500">{item.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow">
            <h3 className="text-4xl font-black text-blue-700">3000+</h3>
            <p className="mt-2 text-slate-600">Students Trained</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow">
            <h3 className="text-4xl font-black text-blue-700">4.8★</h3>
            <p className="mt-2 text-slate-600">Average Rating</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow">
            <h3 className="text-4xl font-black text-blue-700">50+</h3>
            <p className="mt-2 text-slate-600">Industry Projects</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow">
            <h3 className="text-4xl font-black text-blue-700">100%</h3>
            <p className="mt-2 text-slate-600">Practical Learning</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#1e5aa8] to-[#103466] text-white font-bold shadow-lg hover:scale-105 transition"
          >
            Start Your Learning Journey
          </a>
        </div>
      </div>
    </section>
  );
}