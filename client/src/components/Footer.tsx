export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-white/5 bg-background flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-sans text-[10px] tracking-widest uppercase text-white/40">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
      
      <div className="flex gap-8 font-sans text-[10px] tracking-widest uppercase text-white/40">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
      </div>
    </footer>
  );
}
