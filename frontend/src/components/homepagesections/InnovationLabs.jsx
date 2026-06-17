// src/components/InnovationLabs.jsx

import gaiImg from "../../assets/GAI.png";
import serverlessImg from "../../assets/serverless.png";
import gitopsImg from "../../assets/gitops.png";
import cyberImg from "../../assets/Cybersecurity.png";

const labs = [
  {
    title: "Generative AI Bot",
    category: "AI & Machine Learning",
    image: gaiImg,
    description:
      "Build a custom RAG chatbot that reads company PDFs and answers queries using OpenAI GPT and Vector Databases.",
    technologies: ["Python", "LangChain"],
  },
  {
    title: "Serverless Neo-Bank",
    category: "Cloud Computing",
    image: serverlessImg,
    description:
      "Create an event-driven banking backend using AWS Lambda, API Gateway, and DynamoDB.",
    technologies: ["AWS Lambda", "DynamoDB"],
  },
  {
    title: "GitOps Kubernetes Cluster",
    category: "DevOps & CI/CD",
    image: gitopsImg,
    description:
      "Deploy applications automatically with GitHub, Jenkins, Docker, Kubernetes, and GitOps workflows.",
    technologies: ["Jenkins", "Kubernetes"],
  },
  {
    title: "SOC Threat Hunter",
    category: "Cybersecurity",
    image: cyberImg,
    description:
      "Build a live SOC dashboard to detect threats using SIEM tools, logs, and network monitoring.",
    technologies: ["Splunk", "Wireshark"],
  },
];

export default function InnovationLabs() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-[120px] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Innovation Labs
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
            Build the Future. Live.
          </h2>

          <p className="mt-5 text-slate-600 text-lg">
            Learn by building real-world industrial projects that strengthen
            your portfolio and prepare you for top IT careers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labs.map((lab) => (
            <div
              key={lab.title}
              className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center p-2 shadow-inner mb-5">
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {lab.title}
              </h3>

              <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mt-2">
                {lab.category}
              </p>

              <p className="mt-4 text-sm text-slate-600 flex-grow leading-relaxed">
                {lab.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {lab.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#1e5aa8] to-[#103466] text-white font-bold shadow-lg hover:scale-105 transition"
          >
            Download Project Syllabus
          </a>
        </div>
      </div>
    </section>
  );
}