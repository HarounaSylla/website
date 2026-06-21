import { NavLink } from "react-router-dom";
import { navLinkClass, navLinks } from "./navLinks";

type MobileNavProps = {
  open: boolean;
  onNavigate: () => void;
};

export default function MobileNav({ open, onNavigate }: MobileNavProps) {
  return (
    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <nav
        id="mobile-nav"
        aria-hidden={!open}
        className="overflow-hidden"
      >
        <ul className="flex flex-col items-start gap-4 px-4 pb-2 pt-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                tabIndex={open ? undefined : -1}
                className={({ isActive }) => navLinkClass(isActive)}
                onClick={onNavigate}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
