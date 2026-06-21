import { NavLink } from "react-router-dom";
import { contactDetails } from "../../data/contact";

const navLinks = [
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="flex shrink-0 items-center justify-between gap-2 px-4 py-4 sm:px-8 sm:py-6">
      <NavLink to="/" className="flex items-center gap-2">
        <span className="relative flex h-10 w-10 items-center justify-center">
          {/* Green outer arc */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 40 40"
            aria-hidden="true"
          >
            <circle
              cx="20"
              cy="20"
              r="17"
              fill="none"
              stroke="#14b8a6"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray="53 100"
              transform="rotate(-60 20 20)"
            />
          </svg>

          {/* Black circle with H */}
          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
            H
          </span>
        </span>

        <span className="text-2xl font-bold italic tracking-tight text-black sm:text-3xl">
          sylla
        </span>
      </NavLink>

      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium text-black"
                : "text-base text-gray-500 transition-colors hover:text-black"
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <a
        href={contactDetails.cvUrl}
        download
        className="shrink-0 rounded-full bg-black px-3 py-1.5 text-xs text-white transition-colors hover:bg-gray-800 sm:px-5 sm:py-2 sm:text-sm"
      >
        <span className="sm:hidden">CV</span>
        <span className="hidden sm:inline">Download CV</span>
      </a>
    </header>
  );
}
