import { experience } from "../data/experience";
import HighlightedText from "../lib/HighlightedText";

function ExperienceCard({ item }: { item: (typeof experience)[number] }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold text-black">{item.position}</h2>
          <p className="text-sm text-gray-600">{item.name}</p>
        </div>
        <p className="text-sm text-gray-400">
          {item.startDate} – {item.endDate}
        </p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{item.location}</p>
      <div className="mt-4 space-y-3">
        {item.description.map((paragraph, index) => (
          <p key={index} className="text-sm leading-relaxed text-gray-600">
            <HighlightedText text={paragraph} />
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 mt-4">
        {item.stack.map((tech) => (
          <span key={tech.name} className="text-xs text-gray-500 font-semibold">
            {tech.name}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Experience() {
  const count = experience.length;
  const isSingle = count === 1;
  const needsScroll = count > 4;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-center text-3xl font-bold">Experience</h1>

      {isSingle ? (
        <div className="mx-auto mt-10 w-full max-w-2xl">
          <ExperienceCard item={experience[0]} />
        </div>
      ) : (
        <div
          className={`mt-10 space-y-4 ${
            needsScroll ? "max-h-[640px] overflow-y-auto pr-2" : ""
          }`}
        >
          {experience.map((item) => (
            <ExperienceCard
              key={`${item.name}-${item.startDate}`}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}
