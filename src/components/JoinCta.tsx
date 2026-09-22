import React from 'react';

interface JoinCtaProps {
  memberUrl: string;
}

export const JoinCta: React.FC<JoinCtaProps> = ({ memberUrl }) => {
  return (
    <section id="join" className="relative z-10 px-6 pb-16 md:px-12">
      <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-rose/20 via-brand/50 to-teal/20 px-8 py-14 text-center md:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(circle at 50% 120%, color-mix(in oklab, var(--gold) 35%, transparent), transparent 60%)',
          }}
        />
        <div className="relative">
          <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">
            Pula · Welcome Home
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
            Become part of the Calgary Botswana story
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-cream/70">
            Whether you were born in Gaborone or raised in Calgary, there's a seat with you in our community.
          </p>
          <a
            href={memberUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-brand transition-all hover:brightness-110 active:scale-95"
          >
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
};
