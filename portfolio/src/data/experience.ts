export interface PastCompanies {
  name: string;
  logo: string; // path in /public
}

export const pastCompanies: PastCompanies[] = [
  { name: "Zimmer Biomet", logo: "/logos/ZB_Branding.png" },
];

export interface TechStack {
  name: string;
  logo: string; // path in /public
}

export interface Experience {
  name: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  stack: TechStack[];
}

export const experience: Experience[] = [
  {
    name: "Zimmer Biomet",
    position: "Software Engineer",
    location: "Montreal, Canada",
    startDate: "2022",
    endDate: "2026",
    description: [
      "Contributed to the development and maintenance of clinical software applications used in orthopedic and surgical planning solutions ([ROSA Total Knee](https://www.zimmerbiomet.com/en/products-and-solutions/specialties/knee/rosa--knee-system.html) and [ROSA Partial Knee](https://www.zimmerbiomet.com/en/products-and-solutions/specialties/knee/rosa-partial-knee-system.html)). Designed, implemented, and enhanced software features using **C++**, **Qt/QML**, **JavaScript**, and **Python**, focusing on performance, reliability, and user experience in a medical technology environment.",
      "Collaborated with cross-functional teams including software engineers, mechanical engineers, biomedical engineers, product owners, quality assurance specialists, and clinical experts to deliver new functionality and improve existing workflows. Participated in the complete **software development lifecycle**, including requirements analysis, design discussions, implementation, testing, code reviews, debugging, and release activities.",
      "Developed responsive and intuitive user interfaces using **Qt/QML**, leveraging **JavaScript** for UI logic and interaction handling. Implemented backend functionality in **C++** and integrated components across multiple layers of the application architecture.",
      "Ensured software quality by creating and maintaining automated unit tests using **Google Test** and **Google Mock**, performing extensive debugging, and participating in peer code reviews. Worked with **Squish** for UI test automation and validation of application workflows.",
      "Utilized **Git**, **GitLab**, and **CMake** to manage source code, build configurations, and continuous integration processes. Collaborated within an **Agile** development environment using **Jira** for project tracking and **Confluence** for technical documentation and knowledge sharing.",
      "Gained experience in developing software for highly regulated **medical device** environments, emphasizing code quality, maintainability, traceability, and compliance with industry standards while delivering reliable solutions that support healthcare professionals and improve patient outcomes.",
    ],
    stack: [
      { name: "C++", logo: "/logos/cpp.svg" },
      { name: "Python", logo: "/logos/python.svg" },
      { name: "JavaScript", logo: "/logos/javascript.svg" },
      { name: "QML", logo: "/logos/qml.svg" },
      { name: "Qt", logo: "/logos/qt.svg" },
      { name: "Git", logo: "/logos/git.svg" },
      { name: "GitLab", logo: "/logos/gitlab.svg" },
      { name: "Jira", logo: "/logos/jira.svg" },
      { name: "Confluence", logo: "/logos/confluence.svg" },
      { name: "Gtest", logo: "/logos/gtest.svg" },
      { name: "Gmock", logo: "/logos/gmock.svg" },
      { name: "CMake", logo: "/logos/cmake.svg" },
      { name: "Squish", logo: "/logos/squish.svg" },
    ],
  },
];
