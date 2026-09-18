import React from 'react';

export const Governance: React.FC = () => {
  return (
    <section className="border-t border-cream/10 bg-brand text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-12 md:py-28">
        <div className="md:col-span-5">
          <p className="text-xs font-bold uppercase text-gold">Governance</p>
          <h2 className="mt-4 font-display text-4xl font-bold">Community-led and accountable</h2>
        </div>
        <div className="space-y-5 text-sm leading-relaxed text-cream/70 md:col-span-6 md:col-start-7">
          <p>
            Six directors elected by voting members at the Annual General Meeting govern the Association, including the Chairperson, Deputy Chairperson, Secretary, Treasurer, Vice Treasurer, and another executive officer.
          </p>
          <p>
            Directors serve one-year terms and manage the Society under Alberta’s Societies Act, the Association bylaws, and the direction of members. Their service is voluntary.
          </p>
        </div>
      </div>
    </section>
  );
};
