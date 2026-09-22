import React from 'react';
import { PROGRAMS } from '../data';

export const Programs: React.FC = () => {
  return (
    <section id="programs" className="border-y border-cream/10 bg-brand text-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-12 md:py-28">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase text-gold">What we do</p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Culture in motion</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-cream/70 md:col-span-6 md:col-start-7">
            Our programs create places to celebrate, learn, perform, meet, and keep Botswana’s culture thriving across generations.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-cream/15 bg-cream/15 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((item) => (
            <article key={item.id} className="min-h-44 bg-brand p-7 transition-colors hover:bg-brand/80">
              <p className="text-xs font-bold text-gold">{item.id}</p>
              <h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
