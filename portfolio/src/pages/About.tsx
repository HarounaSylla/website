import { aboutIntro, aboutMe } from "../data/aboutMe";
import { educations } from "../data/educations";
import { skills, skillsWithoutLogos } from "../data/skills";
import HighlightedText from "../lib/HighlightedText";

function EducationCard({ item }: { item: (typeof educations)[number] }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <img
            src={item.logo}
            alt={item.name}
            className="h-12 w-12 rounded-lg object-contain"
          />
          <div>
            <h2 className="text-lg font-semibold text-black">{item.degree}</h2>
            <p className="text-sm text-gray-600">{item.name}</p>
          </div>
        </div>
        <p className="text-sm text-gray-400">
          {item.startDate} – {item.endDate}
        </p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{item.location}</p>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        {item.description}
      </p>
    </article>
  );
}

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-center text-3xl font-bold text-black">
        {aboutIntro.title}
      </h1>

      <article className="mt-10 space-y-4 rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm">
        {aboutMe.map((paragraph, index) => (
          <p key={index} className="text-sm leading-relaxed text-gray-600">
            <HighlightedText text={paragraph} keyPrefix={`about-${index}`} />
          </p>
        ))}
      </article>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-black">Education</h2>
        <div className="mt-4 space-y-4">
          {educations.map((item) => (
            <EducationCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-base font-semibold text-black">
            Skills and technologies
          </h3>
          <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5">
            {skills.map(({ name, logo }) => (
              <li
                key={name}
                className="flex min-h-[5.5rem] flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-2 py-4 shadow-sm"
              >
                <img
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                  loading="lazy"
                />
                <span className="text-center text-xs font-medium text-gray-600">
                  {name}
                </span>
              </li>
            ))}
            {skillsWithoutLogos.map((name) => (
              <li
                key={name}
                className="flex min-h-[5.5rem] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-2 py-4 shadow-sm"
              >
                <span className="text-center text-xs font-medium text-gray-600">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
