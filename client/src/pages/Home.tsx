import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-white selection:text-black">
      {/* Global Film Grain Effect */}
      <div className="film-grain" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
