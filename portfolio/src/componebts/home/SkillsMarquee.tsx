import { skills } from "../../data/skills";

type LogoStripProps = {
  idPrefix: string;
};

function LogoStrip({ idPrefix }: LogoStripProps) {
  return (
    <>
      {skills.map(({ name, logo }) => (
        <div
          key={`${idPrefix}-${name}`}
          className="mx-8 flex shrink-0 items-center justify-center sm:mx-10"
          title={name}
        >
          <img
            src={logo}
            alt={name}
            className="h-8 w-auto max-w-[120px] object-contain opacity-50 transition-opacity duration-300 hover:opacity-100 sm:h-9"
            loading="lazy"
          />
        </div>
      ))}
    </>
  );
}

export default function SkillsMarquee() {
  return (
    <div
      className="relative left-1/2 mb-4 w-screen max-w-none -translate-x-1/2 overflow-hidden border-y border-gray-200/70 bg-white/30 py-2 backdrop-blur-sm sm:mb-6 sm:py-3"
      aria-label="Skills and technologies"
    >
      <p className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500/45 sm:text-sm">
        Skills and technologies
      </p>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fafafa] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fafafa] to-transparent sm:w-24" />

      <div className="skills-marquee-track flex w-max items-center">
        <LogoStrip idPrefix="a" />
        <LogoStrip idPrefix="b" />
      </div>
    </div>
  );
}
