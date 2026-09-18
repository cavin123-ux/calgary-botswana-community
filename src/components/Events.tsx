import React from 'react';
import { EMAIL, TICKET_URL } from '../data';

export const Events: React.FC = () => {
  return (
    <section id="events" className="bg-cream text-brand">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-12 md:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Event Details */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-5">
              <img
                src="/assets/bw60-logo.png"
                alt="Botswana at 60 Diamond Jubilee"
                width={120}
                height={92}
                className="w-28 rounded-lg border border-brand/10 bg-cream object-contain p-2"
              />
              <p className="text-xs font-bold uppercase text-sage">Signature event · 2026</p>
            </div>
            <h2 className="mt-7 font-display text-4xl font-bold leading-tight md:text-5xl">
              Botswana 60th Independence Day Celebration
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-brand/70">
              Our Boipuso celebration brings together food, live music, traditional performers, cultural displays, sponsors, and community members for an evening of pride and connection.
            </p>
            <dl className="mt-8 divide-y divide-brand/15 border-y border-brand/15 text-sm">
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="font-bold text-brand">Date</dt>
                <dd className="col-span-2 text-brand/80">Saturday, September 26, 2026</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="font-bold text-brand">Time</dt>
                <dd className="col-span-2 text-brand/80">6:00 pm – 2:00 am</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="font-bold text-brand">Venue</dt>
                <dd className="col-span-2 text-brand/80">
                  TeeBee Event Hall
                  <br />
                  115 – 58 Ave SW, Calgary
                </dd>
              </div>
            </dl>
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-brand/90 active:scale-95"
            >
              View tickets &amp; details
            </a>
          </div>

          {/* Interactive Map */}
          <div className="overflow-hidden rounded-lg border border-brand/15 lg:col-span-7">
            <iframe
              title="Map to TeeBee Event Hall"
              src="https://maps.google.com/maps?q=115%2058%20Ave%20SW%2C%20Calgary%2C%20AB&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="560"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block min-h-[420px] w-full border-0"
            />
          </div>
        </div>

        {/* Coming Next - Maitisong */}
        <div className="mt-20 grid gap-8 border-t border-brand/15 pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase text-sage">Coming next</p>
            <h3 className="mt-3 font-display text-3xl font-bold">Calgary Maitisong Mini-Festival</h3>
            <p className="mt-2 text-sm font-semibold text-brand/90">Planned weekend festival</p>
          </div>
          <div className="space-y-5 text-brand/70 md:col-span-7 md:col-start-6">
            <p className="leading-relaxed">
              Inspired by Botswana’s renowned Maitisong Festival in Gaborone, this planned Calgary weekend will offer an authentic experience of music, dance, theatre, storytelling, food, visual arts, youth activities, and community dialogue.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Calgary%20Maitisong%20Mini-Festival`}
              className="inline-block font-bold text-sage underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              Ask about partnerships
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
