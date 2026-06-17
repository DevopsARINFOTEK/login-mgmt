//import Header from "../components/Header";
import Hero from "./homepagesections/Hero";
import Courses from "./homepagesections/Courses";
import WhyUs from "./homepagesections/WhyUs";
import InnovationLabs from "./homepagesections/InnovationLabs";
import Internship from "./homepagesections/Internship";
import Pricing from "./homepagesections/Pricing";
import Testimonials from "./homepagesections/Testimonials";
import ContactUs from "./homepagesections/ContactUs";
//import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-800 font-sans">
      {/* <Header /> */}

      <section id="home">
        <Hero />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="why">
        <WhyUs />
      </section>

      <section id="projects">
        <InnovationLabs />
      </section>

      <section id="internship">
        <Internship />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <ContactUs />
      </section>

      {/* <Footer /> */}
    </main>
  );
}