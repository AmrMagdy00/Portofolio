import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Introduction to MongoDB",
    type: "certification",
    year: "2025",
    description:
      "Completed MongoDB University course focused on schema design, CRUD operations, and performance optimization.",
    icon: Award,
  },
  {
    id: 2,
    title: "The Principles of Writing Clean Code",
    type: "certification",
    year: "2025",
    description:
      "Earned certification for mastering clean code practices, readability, and maintainability in software development.",
    icon: Award,
  },
  {
    id: 3,
    title: "Secure Software Development Lifecycle (SSDLC)",
    type: "certification",
    year: "2025",
    description:
      "Completed MaharaTech program covering secure coding standards and risk mitigation throughout the SDLC.",
    icon: Award,
  },
  {
    id: 4,
    title: "Professional & Soft Skills Development Program – McKinsey Forward",
    type: "certification",
    year: "2024",
    description:
      "Developed leadership, problem-solving, and communication skills through McKinsey’s global Forward program.",
    icon: Award,
  },
  {
    id: 5,
    title: "Software Development Fundamentals",
    type: "certification",
    year: "2024",
    description:
      "Gained foundational knowledge in algorithms, OOP, and software engineering principles from Programming Advices.",
    icon: Award,
  },
  {
    id: 6,
    title: "JavaScript Certification",
    type: "certification",
    year: "2025",
    description:
      "Completed a comprehensive Udemy course covering advanced JavaScript concepts, ES6+, and asynchronous programming.",
    icon: Award,
  },
];
