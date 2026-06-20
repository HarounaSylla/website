export interface Educations {
  name: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string; // path in /public
}

export const educations: Educations[] = [
  {
    name: "University of Ottawa",
    degree: "Bachelor of Computer Engineering",
    location: "Ottawa, ON",
    startDate: "2018",
    endDate: "2022",
    description:
      "Studied computer engineering with a focus on software design, algorithms, data structures, embedded systems, and computer architecture.",
    logo: "/logos/uOttawa.jpg",
  },
];
