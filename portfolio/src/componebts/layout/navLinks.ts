export const navLinks = [
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function navLinkClass(isActive: boolean) {
  return isActive
    ? "text-sm font-medium text-black"
    : "text-base text-gray-500 transition-colors hover:text-black";
}
