import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="relative z-10 px-6 pb-12 md:px-12">
      <div className="grid grid-cols-2 divide-x divide-gold/15 rounded-2xl border border-gold/20 glass-panel md:grid-cols-4">
        <div className="px-6 py-7 text-center">
          <p className="font-display text-4xl font-bold text-gold">60</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/60">
            Years of Independence
          </p>
        </div>
        <div className="px-6 py-7 text-center">
          <p className="font-display text-4xl font-bold text-cream">400</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/60">
            Community Members
          </p>
        </div>
        <div className="px-6 py-7 text-center">
          <p className="font-display text-4xl font-bold text-cream">12</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/60">
            Cultural Events Hosted
          </p>
        </div>
        <div className="px-6 py-7 text-center">
          <p className="font-display text-4xl font-bold text-cream">1</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/60">
            Shared Heritage
          </p>
        </div>
      </div>
    </section>
  );
};
