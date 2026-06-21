import SkillsMarquee from "../componebts/home/SkillsMarquee";
import { socialLinks } from "../data/contact";

function SocialIcon({ name }: { name: string }) {
  if (name === "LinkedIn") {
    return (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
      </svg>
    );
  }

  if (name === "GitHub") {
    return (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    );
  }

  return null;
}

export default function Home() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SkillsMarquee />

      <section className="mt-2 flex min-h-0 flex-1 flex-col items-center justify-center px-2 py-2 text-center sm:mt-0 sm:px-4 sm:py-6">
        <div className="relative flex items-center gap-12">
          {/* Social — left of frame (desktop) */}
          <div className="absolute top-1/2 right-full mr-8 hidden -translate-y-1/2 flex-col items-center gap-4 sm:flex">
            <p className="text-sm text-gray-500">Connect with me</p>
            {socialLinks.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-gray-500 transition-colors hover:text-black"
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center">
            {/* Arch frame */}
            <div className="relative inline-block px-4 sm:px-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-t-[999px] bg-[#f7f5f0]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#fafafa] to-transparent sm:h-24"
              />

              <div className="relative h-12 sm:h-24" aria-hidden="true" />

              <div className="relative overflow-hidden rounded-t-4xl">
                <img
                  src="/sylla_photo.jpg"
                  alt="Harouna Sylla"
                  className="block h-56 w-44 object-cover object-[50%_20%] sm:h-96 sm:w-72 [mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-black/10 to-transparent sm:h-20"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-16 bg-gradient-to-t from-[#fafafa] to-transparent sm:h-24"
                />
              </div>
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-black sm:mt-4 sm:text-5xl md:text-6xl">
              Harouna Sylla
            </h1>
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <p className="mt-2 text-base font-medium text-gray-500 sm:mt-3 sm:text-lg">
                Software Engineer
              </p>
              <span className="text-xs text-gray-500 sm:text-sm">
                3+ years of experience
              </span>
            </div>

            {/* Social — below profile (mobile) */}
            <div className="mt-4 flex items-center gap-5 sm:hidden">
              {socialLinks.map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-gray-500 transition-colors hover:text-black"
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
