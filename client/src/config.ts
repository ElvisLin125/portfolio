export const portfolioConfig = {
  name: "Elvis Lin",
  bio: "I’m a fullstack engineer who cares just as much about how things feel as how they function. With a strong eye for design, I build products that are thoughtful end to end, balancing clean architecture with intuitive, consistent user experiences.",
  resumeUrl: "/Elvis_Lin_Fullstack_Resume.pdf",
  projects: [
    {
      id: 1,
      title: "Photography and Film Portfolio",
      description: "A cinematic, minimalist portfolio website showcasing my photography and film skills.",
      // imageUrl: "https://images.unsplash.com/photo-1481481600673-6140111ea51a",
      imageUrl: "/portfolio.png",
      link: "https://bessy-website.vercel.app/",
      techStack: ["React", "TypeScript", "Next.js", "TypeAnimation"],
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "High-performance headless e-commerce solution with real-time inventory management.",
      imageUrl: "/bessy.png",
      link: "https://github.com",
      techStack: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
      featured: false,
    },
    {
      id: 3,
      title: "AI Writing Assistant",
      description: "An AI-powered application that helps writers overcome block using LLMs.",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead2708",
      link: "https://github.com",
      techStack: ["React", "Express", "OpenAI", "WebSockets"],
      featured: true,
    }
  ],
  experiences: [
    {
      id: 1,
      company: "TechNova Solutions",
      role: "Senior Fullstack Engineer",
      startDate: "2021",
      endDate: "Present",
      description: "Lead architect for core microservices. Improved system latency by 40% and mentored junior developers.",
    },
    {
      id: 2,
      company: "Creative Digital",
      role: "Frontend Developer",
      startDate: "2018",
      endDate: "2021",
      description: "Built award-winning interactive web experiences using React and advanced CSS animations.",
    }
  ],
  skills: [
    { id: 1, category: "Frontend", name: "React / Next.js" },
    { id: 2, category: "Frontend", name: "TypeScript" },
    { id: 3, category: "Frontend", name: "Framer Motion" },
    { id: 4, category: "Frontend", name: "Tailwind CSS" },
    { id: 5, category: "Backend", name: "Node.js / Express" },
    { id: 6, category: "Backend", name: "PostgreSQL / Drizzle" },
    { id: 7, category: "Backend", name: "Redis" },
    { id: 8, category: "DevOps", name: "Docker / CI/CD" },
  ],
  contact: {
    email: "alex@example.com",
    location: "Digital Realm",
    status: "Available for freelance opportunities"
  }
};
