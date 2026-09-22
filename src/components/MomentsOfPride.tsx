import React from 'react';

interface MomentsOfPrideProps {
  facebookUrl: string;
}

export const MomentsOfPride: React.FC<MomentsOfPrideProps> = ({ facebookUrl }) => {
  return (
    <section id="story" className="relative z-10 px-6 pb-16 md:px-12">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Moments of <span className="italic text-gold">Pride</span>
        </h2>
        <span className="hidden text-[11px] uppercase tracking-[0.3em] text-cream/50 md:block">
          Recent &amp; Upcoming
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <article className="overflow-hidden rounded-2xl border border-gold/20 glass-panel transition-all duration-300 hover:border-gold/40 hover:-translate-y-1">
          <img
            src="/assets/makgakgadi-fishing.jpg"
            alt="A group fishing beside the water in Makgadikgadi, Botswana"
            width={800}
            height={600}
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
          <div className="p-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-rose">
              AfriFest 2026
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold">
              On the International Stage
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/65">
              Representing Botswana at Eau Claire Plaza with cultural showcases and performances by Botswanan artists including Vee Mampeezy.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-2xl border border-gold/20 glass-panel transition-all duration-300 hover:border-gold/40 hover:-translate-y-1">
          <img
            src="/assets/elephant-botswana.jpg"
            alt="Elephant walking through the Botswana bush"
            width={800}
            height={600}
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
          <div className="p-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-teal">
              Community
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold">
              Rooted Connection
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/65">
              Building bridges among Batswana across Alberta, alongside the{' '}
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="text-gold underline underline-offset-2 hover:brightness-125"
              >
                Botswana Society of Alberta
              </a>{' '}
              network.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-2xl border border-gold/20 glass-panel transition-all duration-300 hover:border-gold/40 hover:-translate-y-1">
          <img
            src="/assets/botswana-camel.jpg"
            alt="A camel and riders crossing desert dunes"
            width={800}
            height={600}
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
          <div className="p-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber">
              Music &amp; Heritage
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold">
              Living Traditions
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/65">
              Preserving and sharing Botswana's music, dance, and customs through celebrations throughout the year.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
