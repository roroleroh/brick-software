import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Infrastructure from "@/components/Infrastructure";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatBar />
        <Services />
        <HowWeWork />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
