import React from 'react';
import { EMAIL } from '../data';

export const Membership: React.FC = () => {
  return (
    <section id="membership" className="bg-cream text-brand">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-12 md:py-28">
        <div className="md:col-span-5">
          <p className="text-xs font-bold uppercase text-sage">Membership</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Belong, participate, and shape our future.
          </h2>
          <p className="mt-6 leading-relaxed text-brand/70">
            Membership is open to any Motswana living in Alberta who is at least 18 years old, subject to approval and applicable fees.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="grid gap-px overflow-hidden rounded-lg border border-brand/15 bg-brand/15 sm:grid-cols-2">
            <div className="bg-cream p-7">
              <h3 className="font-display text-2xl font-bold">Voting members</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand/70">
                Full voting rights at general and special meetings while in good standing.
              </p>
            </div>
            <div className="bg-cream p-7">
              <h3 className="font-display text-2xl font-bold">Non-voting members</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand/70">
                Participate fully in Association activities without voting rights.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-brand/65">
            A one-time joining fee applies to new members. Members are encouraged to attend, volunteer, and take an active role in Association life.
          </p>
          <a
            href={`mailto:${EMAIL}?subject=CBCA%20Membership`}
            className="mt-7 inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-brand/90 active:scale-95"
          >
            Ask about membership
          </a>
        </div>
      </div>
    </section>
  );
};
