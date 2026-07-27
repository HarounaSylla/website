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
    dateRange: "April 2026 – July 2026",
    course: "Full-Stack Web Development",
    description: [
      "Built a full-stack **e-commerce platform** using **React**, **TypeScript**, and **Vite** on the frontend and **Express**, **TypeScript**, and **MongoDB**/**Mongoose** on the backend.",
      "Integrated **Clerk** authentication with **role-based access control (RBAC)**, gating admin features separately from the customer-facing storefront.",
      "Implemented end-to-end checkout using **Stripe Embedded Checkout**, plus a custom loyalty-points redemption system as an alternative payment method.",
      "Built a dynamic product catalog with **server-side filtering** (category, brand, color, size) and sorting, along with **cart** and **wishlist** features supporting both guest and logged-in users.",
      "Developed an **admin dashboard** for managing products (with multi-image upload via **Multer** and **Cloudinary**), categories, promo codes, orders, and homepage banners.",
      "Designed a **RESTful API** with 40+ endpoints and **centralized error handling**, using **Zustand** for lightweight **state management** on the client.",
      "Created a fully **responsive UI** with **Tailwind CSS** and **shadcn/radix-ui** components, using drawers and dialogs for cart, checkout, and order history.",
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
