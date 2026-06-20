import { Link } from "react-router-dom";
import SkillsMarquee from "../componebts/home/SkillsMarquee";
import { socialLinks } from "../data/contact";

export default function Home() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SkillsMarquee />

      <section className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-4 text-center sm:py-6">
        <div className="relative flex items-center gap-12 sm:gap-12">
          {/* Social — left of frame */}

          <div className="absolute top-1/2 right-full mr-8 hidden -translate-y-1/2 flex-col items-center gap-4 sm:flex">
            <div>
              <p className="text-sm text-gray-500">Connect with me</p>
            </div>
            {socialLinks.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-gray-500 transition-colors hover:text-black"
              >
                {/* LinkedIn SVG */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center">
            {/* Arch frame */}
            <div className="relative inline-block px-8 sm:px-10">
              {/* Gray arch background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-t-[999px] bg-[#a8bbcf]  "
              />

              {/* Gray bottom fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#fafafa] to-transparent"
              />

              {/* FORCED gray gap above photo — this is the key fix */}
              <div className="relative h-20 sm:h-24" aria-hidden="true" />

              {/* Photo block */}
              <div className="relative overflow-hidden rounded-t-4xl">
                <img
                  src="/sylla_photo.jpg"
                  alt="Harouna Sylla"
                  className="block h-96 w-72 object-cover object-[50%_20%] sm:h-112 sm:w-80 [mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]"
                />

                {/* Soft depth at bottom */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-black/10 to-transparent"
                />

                {/* Photo bottom blend */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-24 bg-gradient-to-t from-[#fafafa] to-transparent"
                />
              </div>
            </div>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-black sm:text-6xl">
              Harouna Sylla
            </h1>
            <div className="flex flex-col items-center gap-2">
              <p className="mt-3 text-4xl font-bold text-gray-500 sm:text-lg">
                Software Engineer
              </p>
              <span className="text-gray-500 text-sm">
                3+ years of experience
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
