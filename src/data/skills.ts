import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["JavaScript", "TypeScript", "C#"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Context API",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "RESTful APIs",
      "JWT Authentication",
      "Clean Code Principles",
      "Desing Patterns",
      "SOLID Principles",
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      "SQL Server",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Database Design & Normalization",
      "Stored Procedures / Triggers / Views",
      "Migrations & Seeding",
      "Query Optimization / Indexing Basics",
    ],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: [
      "Git & GitHub",
      "Postman",
      "Swagger / API Documentation",
      "Docker (Basic)",
      "Agile/Scrum",
      "VS Code",
      "CI/CD (GitHub Actions basics)",
      "xUnit / NUnit / Jest",
      "Integration Testing",
      "Postman API Testing",
      "Logging Tools (Serilog / NLog)",
      "Cloud Basics (Azure / AWS)",
    ],
  },
  {
    name: "Design & UI/UX",
    icon: Palette,
    skills: [
      "Figma",
      "Adobe Illustrator",
      "UI/UX Design",
      "Wireframing",
      "User Experience Enhancement",
    ],
  },
];
