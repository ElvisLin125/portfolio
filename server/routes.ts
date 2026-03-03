import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.projects.list.path, async (req, res) => {
    const projectsList = await storage.getProjects();
    res.json(projectsList);
  });

  app.get(api.experiences.list.path, async (req, res) => {
    const experiencesList = await storage.getExperiences();
    res.json(experiencesList);
  });

  app.get(api.skills.list.path, async (req, res) => {
    const skillsList = await storage.getSkills();
    res.json(skillsList);
  });

  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}

export async function seedDatabase() {
  // We'll call this after db:push
  const projectsList = await storage.getProjects();
  if (projectsList.length === 0) {
    const { db } = await import('./db');
    const { projects, experiences, skills } = await import('@shared/schema');
    
    await db.insert(projects).values([
      {
        title: "A24 Inspired Portfolio",
        description: "A cinematic, minimalist portfolio website showcasing fullstack engineering skills.",
        imageUrl: "https://images.unsplash.com/photo-1481481600673-6140111ea51a",
        link: "https://github.com",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        featured: true,
      },
      {
        title: "E-Commerce Platform",
        description: "High-performance headless e-commerce solution with real-time inventory management.",
        imageUrl: "https://images.unsplash.com/photo-1555529733-0e67056058e1",
        link: "https://github.com",
        techStack: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
        featured: false,
      },
      {
        title: "AI Writing Assistant",
        description: "An AI-powered application that helps writers overcome block using LLMs.",
        imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead2708",
        link: "https://github.com",
        techStack: ["React", "Express", "OpenAI", "WebSockets"],
        featured: true,
      }
    ]);

    await db.insert(experiences).values([
      {
        company: "TechNova Solutions",
        role: "Senior Fullstack Engineer",
        startDate: "2021",
        endDate: "Present",
        description: "Lead architect for core microservices. Improved system latency by 40% and mentored junior developers.",
      },
      {
        company: "Creative Digital",
        role: "Frontend Developer",
        startDate: "2018",
        endDate: "2021",
        description: "Built award-winning interactive web experiences using React and advanced CSS animations.",
      }
    ]);

    await db.insert(skills).values([
      { category: "Frontend", name: "React / Next.js" },
      { category: "Frontend", name: "TypeScript" },
      { category: "Frontend", name: "Framer Motion" },
      { category: "Frontend", name: "Tailwind CSS" },
      { category: "Backend", name: "Node.js / Express" },
      { category: "Backend", name: "PostgreSQL / Drizzle" },
      { category: "Backend", name: "Redis" },
      { category: "DevOps", name: "Docker / CI/CD" },
    ]);
  }
}
