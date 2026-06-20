import { useState } from "react";
import { projects } from "../data/projects";
import HighlightedText from "../lib/HighlightedText";

function isEmbedVideo(url: string) {
  return (
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    url.includes("vimeo.com")
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <article className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold text-black">{project.name}</h2>
          <p className="mt-1 text-sm text-gray-500">{project.course}</p>
        </div>
        <p className="text-sm text-gray-400">{project.dateRange}</p>
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-600">
        {project.description.map((item, index) => (
          <li key={index}>
            <HighlightedText
              text={item}
              keyPrefix={`${project.name}-${index}`}
            />
          </li>
        ))}
      </ul>

      {(project.demoVideo || project.demoComingSoon) && (
        <div className="mt-4 flex flex-col items-center">
          {project.demoVideo ? (
            <>
              <button
                type="button"
                onClick={() => setShowDemo((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  {showDemo ? (
                    <path d="M6 6h12v12H6z" />
                  ) : (
                    <path d="M8 5v14l11-7z" />
                  )}
                </svg>
                {showDemo ? "Hide demo" : "Watch demo"}
              </button>

              {showDemo && (
                <div className="mt-4 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                  {isEmbedVideo(project.demoVideo) ? (
                    <iframe
                      src={project.demoVideo}
                      title={`${project.name} demo`}
                      className="aspect-video w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={project.demoVideo}
                      controls
                      autoPlay
                      className="w-full"
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
            </>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-blue-600/60 px-5 py-2.5 text-sm font-medium text-white"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Demo video coming soon
            </button>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-200 pt-4">
        {project.stack.map((tech) => (
          <span key={tech} className="text-xs font-semibold text-gray-500">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-center text-3xl font-bold">Projects</h1>

      <div className="mt-10 space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
