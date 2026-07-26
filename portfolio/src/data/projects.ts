export interface Project {
  name: string;
  dateRange: string;
  course: string;
  description: string[];
  stack: string[];
  demoVideo?: string;
  demoComingSoon?: boolean;
}

export const projects: Project[] = [
  {
    name: "E-Commerce Website",
    dateRange: "March 2026 – Present",
    course: "Full-Stack Web Development",
    description: [
      "Full-stack online store built with the **MERN stack** (**MongoDB**, **Express**, **React**, **Node.js**).",
      "**Clerk**-based authentication with **role-based access** separating customer and admin areas.",
      "Admin product management with **CRUD**, categories, image uploads via **Cloudinary**, and product variants (sizes, colors, stock).",
      "Backend data models for products, categories, cart, wishlist, promos, and customer addresses.",
      "Customer storefront shell with routing for home, profile, sign-in, and sign-up.",
      "Admin dashboard scaffold with routes for products, coupons, orders, and settings — several sections still in progress.",
    ],
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "TypeScript",
      "Vite",
      "Clerk",
      "Cloudinary",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "React Router",
      "Axios",
      "Zod",
      "Multer",
    ],
    demoVideo: "/videos/e-commerce-website.mp4",
  },
  {
    name: "Intelligent Distribution Panel",
    dateRange: "Jan 2022 – Apr 2022",
    course: "Real-Time Operating System",
    description: [
      "Design and implementation of General-Purpose Input Output (**GPIO**).",
      "Testing of **GPIO**.",
      "Design and implementation of the **Data Acquisition** module.",
      "Testing of the **Data Acquisition** module.",
    ],
    stack: [
      "C Programming Language",
      "FreeRTOS",
      "Git",
      "Bitbucket",
      "Jira",
      "Confluence",
    ],
  },
  {
    name: "Food Delivery Robot",
    dateRange: "Sep 2021 – Apr 2022",
    course: "Engineering Design Project",
    description: [
      "Researched technologies to implement **natural language processing**.",
      "Implemented **natural language processing** to allow the robot to communicate with people.",
      "Implemented the **Rasa** chatbot.",
      "Tested the **Rasa** chatbot with **Rasa X**.",
    ],
    stack: ["Python", "Rasa", "Git", "GitHub"],
    demoVideo: "/videos/food-delivery-robot.mp4",
  },
  {
    name: "6 Nimmt Game",
    dateRange: "Sep 2020 – Dec 2020",
    course:
      "Advanced Programming Concepts with C++ / Difference between C++ and Java",
    description: [
      "Implemented the **Joueur** module, which manages the player's hand and point total.",
      "Implemented the **Plateau6nimmt** module, which manages cards on the table and game logic.",
      "Implemented the **Paquet** (deck) module, which manages the deck of cards, including shuffling and dealing.",
    ],
    stack: ["C++", "Java", "Git", "GitHub"],
  },
];
