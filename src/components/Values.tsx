import React from 'react';
import { VALUES } from '../data';

export const Values: React.FC = () => {
  return (
    <section aria-labelledby="values-title" className="border-y border-brand/10 bg-gold text-brand">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-12 md:py-24">
        <p className="text-xs font-bold uppercase text-brand/65">What guides us</p>
        <h2 id="values-title" className="mt-4 font-display text-4xl font-bold md:text-5xl">
          Our values
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((item) => (
            <div key={item.title} className="border-t border-brand/30 pt-5">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
