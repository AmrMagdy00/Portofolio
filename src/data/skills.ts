import {
  Code,
  Database,
  Layout,
  Terminal,
  Cpu,
  Palette,
  MessageSquare,
} from "lucide-react";
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
      "Angular.js",
      "Tailwind CSS",
      "shadcn/ui",
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
      "Multi-Tenant Systems",
      "Frontend–Backend Integration",
    ],
  },
  {
    name: "Realtime & Messaging",
    icon: MessageSquare,
    skills: ["WebSockets", "RabbitMQ"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      "SQL Server",
      "MongoDB",
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
      "VS Code",
      "CI/CD (GitHub Actions basics)",
      "Unit Testing",
      "Postman API Testing",
      "Logging Tools ",
    ],
  },
  {
    name: "Design & UI/UX",
    icon: Palette,
    skills: [
      "Figma",
      "Adobe Illustrator",
      "UI/UX Design",
      "User Experience Enhancement",
    ],
  },
];
