import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0b0d17] text-[#f4f5fb] overflow-hidden">
      {/* Background ambient glow spheres */}
      <div className="page-glow glow-one" aria-hidden="true" />
      <div className="page-glow glow-two" aria-hidden="true" />
      <div className="page-glow glow-three" aria-hidden="true" />

      {/* Main Layout */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
