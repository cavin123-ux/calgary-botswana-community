import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cream/15 bg-brand px-5 py-8 md:px-12 text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <img
            src="/assets/cbca-logo.jpg"
            alt="Calgary Botswana Community Association"
            width={44}
            height={44}
            loading="lazy"
            className="size-11 rounded-full bg-cream object-contain p-0.5"
          />
          <p className="text-xs text-cream/60">
            © 2026 Calgary Botswana Community Association
          </p>
        </div>
        <p className="text-xs text-cream/50">
          Calgary, Alberta · Pula
        </p>
      </div>
    </footer>
  );
};
