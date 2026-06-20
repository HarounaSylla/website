import { educations } from "../../data/educations";
import { pastCompanies } from "../../data/experience";

const bandLogos = [
  ...pastCompanies,
  ...educations.map(({ name, logo }) => ({ name, logo })),
];

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={className}>
      {/* Logo band — grey + side fade */}
      <div
        className="relative flex h-36 flex-col justify-between px-8 py-6"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #E3EFEB 12%, #E3EFEB 88%, transparent 100%)",
        }}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 px-8">
          {bandLogos.map(({ name, logo }) => (
            <img
              key={name}
              src={logo}
              alt={name}
              className="h-10 w-auto max-w-[160px] object-contain e"
            />
          ))}
        </div>

        {/* Copyright — stays on white */}
        <div className="border-t border-gray-100 pt-4 text-center text-sm text-gray-40">
          © {new Date().getFullYear()} Harouna Sylla. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
