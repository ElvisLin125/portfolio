import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <motion.p 
          variants={itemVariants}
          className="font-sans text-white/40 tracking-[0.3em] uppercase text-xs md:text-sm mb-6 ml-2"
        >
          Scene 01 &mdash; Introduction
        </motion.p>
        
        <motion.h1 
          variants={itemVariants}
          className="text-[12vw] md:text-[8vw] leading-[0.85] font-serif uppercase tracking-tighter"
        >
          Alex
          <br />
          <span className="text-white/40 italic">Rivera.</span>
        </motion.h1>

        <div className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <p className="font-sans text-base md:text-xl leading-relaxed text-white/70 max-w-xl">
              I am a Fullstack Engineer dedicated to crafting high-performance web applications 
              with a cinematic touch. From architecting scalable backends to designing 
              pixel-perfect interfaces, I bring digital visions to life.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="col-span-1 flex md:justify-end">
            <div className="font-sans text-xs uppercase tracking-widest text-white/40 text-right flex flex-col items-end gap-2">
              <span>Scroll to view</span>
              <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
                <motion.div 
                  className="w-full h-full bg-white origin-top"
                  animate={{ scaleY: [0, 1, 0], translateY: ["0%", "0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
