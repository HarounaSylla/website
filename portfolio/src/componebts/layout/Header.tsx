import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { contactDetails } from "../../data/contact";

const navLinks = [
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function navLinkClass(isActive: boolean) {
  return isActive
    ? "text-sm font-medium text-black"
    : "text-base text-gray-500 transition-colors hover:text-black";
}

function mobileNavLinkClass(isActive: boolean) {
  return isActive
    ? "rounded-lg bg-gray-100 px-4 py-3 text-base font-medium text-black"
    : "rounded-lg px-4 py-3 text-base text-gray-600 transition-colors hover:bg-gray-50 hover:text-black";
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      <header className="flex shrink-0 items-center justify-between gap-2 px-4 py-4 sm:px-8 sm:py-6">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="relative flex h-10 w-10 items-center justify-center">
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
            <NavLink key={to} to={to} className={({ isActive }) => navLinkClass(isActive)}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contactDetails.cvUrl}
            download
            className="shrink-0 rounded-full bg-black px-3 py-1.5 text-xs text-white transition-colors hover:bg-gray-800 sm:px-5 sm:py-2 sm:text-sm"
          >
            <span className="sm:hidden">CV</span>
            <span className="hidden sm:inline">Download CV</span>
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-black md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-50 border-b border-gray-200/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => mobileNavLinkClass(isActive)}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
