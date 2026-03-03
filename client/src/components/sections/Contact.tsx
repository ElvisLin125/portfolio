import { motion } from "framer-motion";
import { portfolioConfig } from "@/config";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 md:py-48 px-6 md:px-12 bg-white text-black relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-black/40 mb-8">
            Scene 04 &mdash; Finale
          </p>
          <h2 className="text-6xl md:text-[8vw] leading-[0.85] font-serif tracking-tighter mb-12">
            Let's Make
            <br />
            <span className="italic text-accent">Contact.</span>
          </h2>

          <div className="space-y-4 font-sans text-sm tracking-wider uppercase text-black/60">
            <p>Based in {portfolioConfig.contact.location}</p>
            <p>{portfolioConfig.contact.status}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center items-start space-y-6"
        >
          <div className="flex items-center gap-6">
            <a
              href={portfolioConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-base uppercase tracking-wider text-black/80 hover:text-black transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764c.965 0 1.75.79 1.75 1.764s-.785 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-3.368-4-3.115-4 0v5.604h-3v-10h3v1.357c1.396-2.586 7-2.777 7 2.476v6.167z" />
              </svg>
              LinkedIn
            </a>

            <a
              href={portfolioConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-base uppercase tracking-wider text-black/80 hover:text-black transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.084-.729.084-.729 1.205.084 1.838 1.233 1.838 1.233 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.958-.266 1.983-.399 3.003-.404 1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>

          <button
            onClick={() =>
              window.open(`mailto:${portfolioConfig.contact.email}`)
            }
            className="border border-black px-6 py-3 font-sans text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors duration-300"
          >
            Email Me
          </button>
        </motion.div>{" "}
      </div>
    </section>
  );
}
