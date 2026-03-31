"use client";

interface WayCardProps {
  number: number;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  affiliateLabel?: string;
  affiliateUrl?: string;
}

export default function WayCard({
  number,
  title,
  paragraphs,
  bullets,
  affiliateLabel,
  affiliateUrl,
}: WayCardProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg">
            {number}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        </div>

        {paragraphs.map((p, i) => (
          <p key={i} className="text-text-secondary text-lg leading-relaxed">
            {p}
          </p>
        ))}

        {bullets && (
          <ul className="space-y-2 pl-1">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-text-secondary text-lg">
                <span className="text-accent mt-1">&#10003;</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {affiliateLabel && affiliateUrl && (
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold transition-colors"
          >
            {affiliateLabel}
          </a>
        )}
      </div>
    </section>
  );
}
