export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Exclusive API",
    description:
      "A scalable RESTful API built with Node.js and Express, following Clean Architecture, SOLID principles, and best practices for clean, maintainable, and high-performance code.",
    image: "/imgs/code.png",
    tags: [
      "Node.js",
      "Express.js",
      "RESTful API",
      "Clean Architecture",
      "SOLID Principles",
      "Best Practices",
      "JavaScript",
      "Backend Development",
      "API Design",
      "Scalable Architecture",
      "Async/Await",
      "Error Handling",
      "Repository Pattern",
    ],
    links: {
      github: "https://github.com/AmrMagdy00/Exclusive-Products-API",
      live: "",
    },
  },
  {
    id: 2,
    title: "Exclusive Store",
    description:
      "A modern, high-performance online store built with clean code and best practices in mind. It delivers a fully responsive and smooth user experience with secure data handling, fast performance, and elegant design — crafted for scalability, maintainability, and real-world production quality.",
    image: "/imgs/p4.png",
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Context API",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Full Stack",
      "E-Commerce",
      "Clean Code",
      "Best Practices",
      "Performance Optimization",
    ],
    links: {
      github: "https://github.com/Ahmedatia99/Full-E-Commerce",
      live: "https://full-e-commerce-chi.vercel.app/",
    },
  },

  {
    id: 3,
    title: "Angular E-Commerce Application",
    description:
      "A modern, full-featured e-commerce application built with Angular 20, featuring product listings, shopping cart, favorites, and user authentication..",
    image: "/imgs/p6.png",
    tags: ["Angular.js", "Type script", "Bootstrap"],
    links: {
      github: "https://github.com/AmrMagdy00/Angular_E_Project",
      live: "",
    },
  },

  {
    id: 4,
    title: "School Education Web Application",
    description:
      "A full-stack application with React and Node.js for order placement and checkout functionality for a tailor store.",
    image: "/imgs/p2.png",
    tags: ["React.js", "Type script", "Tailwind CSS"],
    links: {
      github: "https://github.com/Ahmedatia99/School-Education",
      live: "https://school-education-xi.vercel.app/",
    },
  },

  {
    id: 5,
    title: "Digital-Masters-Company-Website",
    description:
      "A modern, responsive portfolio website for Digital Masters built with React.",
    image: "/imgs/p7.png",
    tags: ["React.js", "Bootstrap"],
    links: {
      github: "https://github.com/AmrMagdy00/Digital-Masters-Portofolio",
      live: "https://digital-masters.vercel.app/",
    },
  },
  {
    id: 6,
    title: "Puma Store",
    description:
      "Puma is a simple e-commerce web application built with HTML, CSS, and JavaScript.It features a product listing page, a dynamic product details page, and a shopping cart with data persistence using LocalStorage.",
    image: "/imgs/p3.png",
    tags: ["HTML5", "CSS3", "Java script"],
    links: {
      github: "https://github.com/AmrMagdy00/Puma",
      live: "https://puma-vkue.vercel.app/",
    },
  },
  {
    id: 7,
    title: "Bonita Store",
    description:
      "A real freelance clothing e-commerce project built with Next.js, TypeScript, MongoDB, and Tailwind CSS. Deployed on Vercel, integrated with Google Analytics and Google Sheets API to save orders after checkout. Features include dynamic product media (videos & photos by size/color), cart context, and a custom database design tailored to client needs.",
    image: "/imgs/p5.png",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Google Sheets API",
      "Google Analytics",
      "Vercel",
    ],
    links: {
      github: "https://github.com/AmrMagdy00/AliNew",
      live: "https://bonita.fit/",
    },
  },
  {
    id: 8,
    title: "Fin-Shark API",
    description:
      "FinShark is a secure .NET Core API for financial management, featuring robust authentication, efficient data handling, and a clean architecture for scalability and maintainability.",
    image: "/imgs/code.png",
    tags: [
      "C#",
      ".Net API",
      "SQL Server",
      "Authentication & Authorization",
      "Clean Architicture",
      "Repository Pattern",
      "Dependency Injection",
      "Clean Code",
    ],
    links: {
      github: "https://github.com/AmrMagdy00/Fin-Shark-API",
      live: "",
    },
  },
];
