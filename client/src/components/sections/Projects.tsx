import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useProjects } from "@/hooks/use-portfolio";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const { data: projects, isLoading } = useProjects();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  if (isLoading) {
    return (
      <section
        id="projects"
        className="py-32 px-6 md:px-12 border-t border-white/10 flex justify-center"
      >
        <div className="animate-pulse w-32 h-1 bg-white/20" />
      </section>
    );
  }

  if (!projects || projects.length === 0) return null;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-32 px-6 md:px-12 bg-background relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex items-baseline justify-between border-b border-white/10 pb-8"
        >
          <h2 className="text-4xl md:text-7xl font-serif tracking-tighter">
            Projects
          </h2>
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 hidden md:block">
            Scene 02
          </span>
        </motion.div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col md:flex-row gap-8 md:gap-16 items-center"
            >
              {/* Image/Video Container */}
              <div
                className={`w-full md:w-[65%] overflow-hidden relative aspect-[4/3] md:aspect-auto md:h-[80vh] ${index % 2 !== 0 ? "md:order-2" : ""}`}
              >
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {project.videoUrl ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={project.imageUrl}
                      className="w-full h-full object-cover rounded-md"
                    >
                      <source src={project.videoUrl} />
                      {project.videoUrl.endsWith(".mov") && (
                        <source
                          src={project.videoUrl.replace(/\.mov$/i, ".mp4")}
                          type="video/mp4"
                        />
                      )}
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={
                        project.imageUrl ||
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 rounded-md"
                    />
                  )}
                </motion.div>
              </div>

              {/* Text Content */}
              <div
                className={`w-full md:w-[35%] flex flex-col justify-center ${index % 2 !== 0 ? "md:order-1 md:items-end md:text-right" : ""}`}
              >
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
                  0{index + 1} // {project.techStack?.[0] || "Web"}
                </p>
                <h3 className="text-3xl md:text-5xl font-serif tracking-tighter mb-6 group-hover:italic transition-all duration-500">
                  {project.title}
                </h3>
                <p className="font-sans text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase border border-white/20 px-6 py-4 hover:bg-white hover:text-black transition-colors duration-300 w-max"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <div
                  className={`flex flex-wrap gap-2 mt-8 max-w-md ${index % 2 !== 0 ? "justify-end" : ""}`}
                >
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="font-sans text-[10px] tracking-wider uppercase bg-white/5 px-3 py-1 text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
