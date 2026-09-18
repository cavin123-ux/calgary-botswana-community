import React from 'react';
import { EMAIL, EVENTS_URL, FACEBOOK_URL } from '../data';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-cream text-brand">
      <div className="mx-auto max-w-7xl px-5 py-20 text-center md:px-12 md:py-28">
        <p className="text-xs font-bold uppercase text-sage">Get involved</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
          Bring your time, talent, ideas, or partnership.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-brand/70">
          Become a member, attend an event, volunteer, sponsor a program, or share your work as an artist, musician, dancer, storyteller, or craftsperson.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-brand/90 active:scale-95"
          >
            Email the Association
          </a>
          <a
            href={EVENTS_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-brand/30 px-7 py-3.5 text-sm font-bold transition-colors hover:bg-brand/5 active:scale-95"
          >
            See upcoming events
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-brand/30 px-7 py-3.5 text-sm font-bold transition-colors hover:bg-brand/5 active:scale-95"
          >
            Connect across Alberta
          </a>
        </div>
        <p className="mt-10 break-all text-sm font-semibold text-brand">
          <a href={`mailto:${EMAIL}`} className="hover:underline">
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
};
