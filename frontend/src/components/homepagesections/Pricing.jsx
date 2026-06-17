// src/components/Pricing.jsx

const plans = [
  {
    name: "Basic (Group)",
    price: "₹2,999",
    period: "/ course",
    highlighted: false,
    features: [
      "Live Group Sessions",
      "Assignments & Quizzes",
      "Course Completion Certificate",
      "Mentor Support",
    ],
    button: "Join Group Batch",
  },
  {
    name: "Standard (1:1)",
    price: "₹14,999",
    period: "/ course",
    highlighted: true,
    badge: "RECOMMENDED",
    features: [
      "Everything in Basic",
      "1:1 Mentor Support",
      "Personalized Project",
      "Resume Review",
      "Interview Preparation",
    ],
    button: "Start 1:1 Training",
  },
  {
    name: "Advanced",
    price: "₹24,999",
    period: "/ course",
    highlighted: false,
    features: [
      "Everything in Standard",
      "Long-Term Mentorship",
      "Dedicated Q&A Sessions",
      "Career Guidance",
      "Placement Assistance",
    ],
    button: "Join Advanced",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Pricing Plans
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Simple & Transparent Pricing
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Choose the learning plan that best fits your goals and accelerate
            your career with AR INFOTEK.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "border-2 border-orange-500 shadow-2xl scale-105 bg-white"
                  : "border border-slate-200 shadow-md bg-white hover:shadow-xl"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-3xl">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-900">
                {plan.name}
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-black text-blue-700">
                  {plan.price}
                </span>
                <span className="text-slate-500">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 block w-full text-center py-3 rounded-xl font-bold transition ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg"
                    : "border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                }`}
              >
                {plan.button}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-5">
            Need help selecting the right course or learning path?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#1e5aa8] to-[#103466] text-white font-bold shadow-lg hover:scale-105 transition"
          >
            Talk to a Career Advisor
          </a>
        </div>
      </div>
    </section>
  );
}