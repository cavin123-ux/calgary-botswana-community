import React from 'react';

interface HeroProps {
  ticketUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ ticketUrl }) => {
  return (
    <section className="relative z-10 px-6 pb-10 pt-14 md:px-12">
      <div className="grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold"></span> Pula · Unity · Heritage
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] md:text-7xl">
            Where the Light of <span className="italic text-gold">Botswana</span> Gathers in Calgary
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-cream/70">
            A cultural and social home for Batswana living abroad — celebrating our music, heritage, and traditions while building a community rooted in connection.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={ticketUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-brand transition-all hover:brightness-110 active:scale-95"
            >
              Reserve Your Seat
            </a>
            <a
              href="#story"
              className="rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:border-gold/60 hover:text-gold"
            >
              Explore Our Story
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <img
            src="/assets/hero-mosaic.jpg"
            alt="Stained glass mosaic in gold, emerald and ruby tones"
            width={900}
            height={1100}
            className="aspect-4/5 w-full rounded-xl border border-gold/30 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
