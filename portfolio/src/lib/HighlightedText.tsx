function parseInlineText(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={key}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 underline decoration-blue-400 decoration-2 underline-offset-2 transition-colors hover:text-blue-800 hover:decoration-blue-600"
        >
          {linkMatch[1]}
          <span aria-hidden="true" className="ml-0.5 text-[0.85em]">
            ↗
          </span>
        </a>
      );
    }

    return part;
  });
}

export default function HighlightedText({
  text,
  keyPrefix = "inline",
}: {
  text: string;
  keyPrefix?: string;
}) {
  return <>{parseInlineText(text, keyPrefix)}</>;
}
