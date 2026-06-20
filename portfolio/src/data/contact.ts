export const contactIntro = {
  title: "Get in touch",
  subtitle:
    "I'm open to full-time roles right now. Whether you have an opportunity or just want to connect, I'd love to hear from you.",
};

export const contactDetails = {
  email: "sylla.harouna96@gmail.com",
  location: "Ottawa, Canada",
  availability: "Open to opportunities",
  cvUrl: "/resume-Harouna.pdf",
};

export type SocialPlatform = "linkedin" | "github";

export const socialLinks = [
  {
    name: "LinkedIn",
    platform: "linkedin" as SocialPlatform,
    url: "https://www.linkedin.com/in/harouna-sylla-b92148208/",
    handle: "Harouna Sylla",
  },
] as const;

export type SocialLink = (typeof socialLinks)[number];
