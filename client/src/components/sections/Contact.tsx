import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import type { InsertMessage } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";

export function Contact() {
  const { mutate, isPending } = useCreateMessage();
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: InsertMessage) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 bg-white text-black relative">
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
            Let's Make<br />
            <span className="italic text-black/40">Contact.</span>
          </h2>
          
          <div className="space-y-4 font-sans text-sm tracking-wider uppercase text-black/60">
            <p>Based in the Digital Realm</p>
            <p>Available for freelance opportunities</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center"
        >
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-12">
            
            <div className="relative group">
              <input
                {...form.register("name")}
                placeholder="YOUR NAME"
                className="w-full bg-transparent border-b border-black/20 py-4 font-sans text-sm md:text-base tracking-widest uppercase outline-none focus:border-black transition-colors duration-300 placeholder:text-black/30"
              />
              {form.formState.errors.name && (
                <span className="absolute -bottom-6 left-0 text-xs text-red-500 font-sans">
                  {form.formState.errors.name.message}
                </span>
              )}
            </div>

            <div className="relative group">
              <input
                {...form.register("email")}
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-black/20 py-4 font-sans text-sm md:text-base tracking-widest uppercase outline-none focus:border-black transition-colors duration-300 placeholder:text-black/30"
              />
              {form.formState.errors.email && (
                <span className="absolute -bottom-6 left-0 text-xs text-red-500 font-sans">
                  {form.formState.errors.email.message}
                </span>
              )}
            </div>

            <div className="relative group">
              <textarea
                {...form.register("message")}
                placeholder="YOUR MESSAGE"
                rows={4}
                className="w-full bg-transparent border-b border-black/20 py-4 font-sans text-sm md:text-base tracking-widest uppercase outline-none focus:border-black transition-colors duration-300 resize-none placeholder:text-black/30"
              />
              {form.formState.errors.message && (
                <span className="absolute -bottom-6 left-0 text-xs text-red-500 font-sans">
                  {form.formState.errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="self-start mt-4 border border-black px-12 py-5 font-sans text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Transmitting..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
