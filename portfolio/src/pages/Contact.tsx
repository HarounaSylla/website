import { useState, type ReactNode } from "react";
import {
  contactDetails,
  contactIntro,
  socialLinks,
  type SocialPlatform,
} from "../data/contact";

function EmailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4v10m0 0 3.5-3.5M12 14l-3.5-3.5M5 18h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
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

function GitHubIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0 0 22 12.021C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="9"
        y="9"
        width="11"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 15V5a2 2 0 0 1 2-2h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5 12 4 4 10-10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const socialIcons: Record<SocialPlatform, ReactNode> = {
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
};

function EmailContactRow({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard may be unavailable
    }
  }

  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
        <EmailIcon />
      </span>
      <a href={`mailto:${email}`} className="min-w-0 flex-1 text-left">
        <span className="block text-xs font-medium uppercase tracking-wide text-gray-400">
          Email
        </span>
        <span className="mt-1 block truncate text-base font-medium text-gray-900 group-hover:text-blue-700">
          {email}
        </span>
      </a>
      <button
        type="button"
        onClick={copyEmail}
        aria-label={copied ? "Email copied" : "Copy email address"}
        className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
          copied
            ? "bg-green-100 text-green-700"
            : "bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white"
        }`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function ContactRow({
  href,
  label,
  value,
  external,
  download,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  external?: boolean;
  download?: boolean;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download || undefined}
      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </span>
      <span className="min-w-0 text-left">
        <span className="block text-xs font-medium uppercase tracking-wide text-gray-400">
          {label}
        </span>
        <span className="mt-1 block truncate text-base font-medium text-gray-900 group-hover:text-blue-700">
          {value}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="ml-auto text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-500"
      >
        →
      </span>
    </a>
  );
}

export default function Contact() {
  const activeSocialLinks = socialLinks.filter(({ url }) => url);

  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mx-auto w-full max-w-2xl px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">
            {contactIntro.title}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-500">
            {contactIntro.subtitle}
          </p>
          <span className="mt-4 inline-block rounded-full bg-blue-600/10 px-4 py-1.5 text-xs font-semibold text-blue-700">
            {contactDetails.availability}
          </span>
        </div>

        <div className="mt-10 space-y-4">
          {contactDetails.email && (
            <EmailContactRow email={contactDetails.email} />
          )}

          <ContactRow
            href={`https://maps.google.com/?q=${encodeURIComponent(contactDetails.location)}`}
            label="Location"
            value={contactDetails.location}
            external
            icon={<LocationIcon />}
          />

          {activeSocialLinks.map(({ name, url, handle, platform }) => (
            <ContactRow
              key={name}
              href={url}
              label={name}
              value={handle ?? name}
              external
              icon={socialIcons[platform]}
            />
          ))}

          {contactDetails.cvUrl && (
            <ContactRow
              href={contactDetails.cvUrl}
              label="Resume"
              value="Download resume"
              download
              icon={<DownloadIcon />}
            />
          )}
        </div>
      </div>
    </div>
  );
}
