export interface Skill {
  name: string;
  logo: string;
}

export const skills: Skill[] = [
  { name: "C++", logo: "/logos/cpp.svg" },
  { name: "C", logo: "/logos/c.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Express", logo: "/logos/express.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "Qt", logo: "/logos/qt.svg" },
  { name: "QML", logo: "/logos/qml.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "GitLab", logo: "/logos/gitlab.svg" },
  { name: "CMake", logo: "/logos/cmake.svg" },
  { name: "FreeRTOS", logo: "/logos/freertos.svg" },
  { name: "Vite", logo: "/logos/vite.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "React Router", logo: "/logos/reactrouter.svg" },
  { name: "Axios", logo: "/logos/axios.svg" },
  { name: "Clerk", logo: "/logos/clerk.svg" },
  { name: "Cloudinary", logo: "/logos/cloudinary.svg" },
];

export const skillsWithoutLogos: string[] = [
  "Bitbucket",
  "Confluence",
  "Google Mock",
  "Google Test",
  "Jira",
  "Squish",
];
