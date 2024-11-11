import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
