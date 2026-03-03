import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out flex justify-between items-center px-6 md:px-12 py-6 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="text-sm font-sans tracking-widest uppercase font-medium">
        Portfolio <span className="text-white/40 ml-2">Director's Cut</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-xs font-sans tracking-[0.2em] uppercase">
        {["Work", "Experience", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className="text-white/60 hover:text-white transition-colors duration-300 relative group overflow-hidden"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </button>
        ))}
      </div>
      
      {/* Mobile Menu Button - Minimalist */}
      <button 
        className="md:hidden text-xs uppercase tracking-widest text-white/60 hover:text-white"
        onClick={() => scrollTo("contact")}
      >
        Connect
      </button>
    </motion.nav>
  );
}
