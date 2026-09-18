import React from 'react';
import { GALLERY_ITEMS } from '../data';

export const Gallery: React.FC = () => {
  return (
    <section aria-labelledby="gallery-title" className="bg-brand py-20 text-cream md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-gold">AfriFest Calgary · August 2026</p>
            <h2 id="gallery-title" className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Botswana on the Calgary stage
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-cream/65">
            Cultural showcases, performances, and conversations at Eau Claire Plaza brought Botswana’s creativity and community spirit to an international audience.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-3 md:grid-cols-2 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.image}
              className={`group relative overflow-hidden rounded-lg bg-brand/50 ${item.aspectClassName} ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                className={`size-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                  item.imageClassName ?? 'object-center'
                }`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
