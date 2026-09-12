import React from 'react';

interface FooterProps {
  facebookUrl: string;
  instagramUrl: string;
  memberUrl: string;
}

export const Footer: React.FC<FooterProps> = ({
  facebookUrl,
  instagramUrl,
  memberUrl,
}) => {
  return (
    <footer className="relative z-10 flex flex-col items-center justify-between gap-6 border-t border-gold/15 px-6 py-10 md:flex-row md:px-12">
      <div className="flex items-center gap-3">
        <img
          src="/assets/cbca-logo.jpg"
          alt="Calgary Botswana Community Association"
          width={36}
          height={36}
          loading="lazy"
          className="size-12 rounded-full bg-cream object-contain p-0.5"
        />
        <p className="text-xs text-cream/60">
          © 2026 Calgary Botswana Community Association · Calgary, Alberta
        </p>
      </div>
      <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-cream/50">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-gold"
        >
          Facebook
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-gold"
        >
          Instagram
        </a>
        <a
          href={memberUrl}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-gold"
        >
          Eventbrite
        </a>
      </div>
    </footer>
  );
};
