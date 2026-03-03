import { motion } from "framer-motion";
import { useExperiences } from "@/hooks/use-portfolio";

export function Experience() {
  const { data: experiences, isLoading } = useExperiences();

  if (isLoading) return null;
  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="py-32 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-7xl font-serif tracking-tighter">Experience</h2>
            <motion.a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 font-sans text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors border-b border-white/20 pb-1"
              whileHover={{ x: 5 }}
            >
              View Full Resume &rarr;
            </motion.a>
          </div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 hidden md:block">
            Scene 03
          </p>
        </motion.div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group border-b border-white/10 py-10 md:py-16 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8"
            >
              <div className="w-full md:w-1/4 font-sans text-xs tracking-[0.1em] text-white/50 uppercase">
                {exp.startDate} &mdash; {exp.endDate}
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-2xl md:text-4xl font-serif mb-2 group-hover:translate-x-2 transition-transform duration-500">
                  {exp.company}
                </h3>
                <p className="font-sans text-white/60 tracking-wider text-sm uppercase">
                  {exp.role}
                </p>
              </div>
              <div className="w-full md:w-5/12">
                <p className="font-sans text-white/50 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
