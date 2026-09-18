import React from 'react';

interface SignatureEventProps {
  ticketUrl: string;
}

export const SignatureEvent: React.FC<SignatureEventProps> = ({ ticketUrl }) => {
  return (
    <section id="events" className="relative z-10 px-6 pb-14 md:px-12">
      <div className="grid overflow-hidden rounded-3xl border border-gold/25 md:grid-cols-12 bg-brand/40 backdrop-blur-sm">
        <div className="flex flex-col justify-center p-8 md:col-span-5 md:p-12">
          <p className="mb-4 w-fit rounded-full bg-rose/15 px-3 py-1.5 text-[11px] uppercase tracking-[0.3em] text-rose">
            Signature Event · 2026
          </p>
          <img
            src="/assets/bw60-logo.png"
            alt="Botswana at 60 diamond jubilee logo"
            width={120}
            height={92}
            loading="lazy"
            className="mb-5 w-28 rounded-lg bg-cream object-contain p-2"
          />
          <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
            Botswana 60th Independence Diamond Jubilee Gala
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            An unforgettable night of great vibes, music, and culture honouring sixty years of independence, unity, and pride. All ages welcome.
          </p>
          <div className="mt-7 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-gold"></span>
              <span className="text-cream/80">Sat, 26 Sep 2026 · 6:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-rose"></span>
              <span className="text-cream/80">TeeBee Event Hall · 115 58 Ave SW, Calgary</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-teal"></span>
              <span className="text-cream/80">Ages: All · Language: English & Setswana</span>
            </div>
          </div>
          <a
            href={ticketUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 w-fit rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-brand transition-all hover:brightness-110 active:scale-95"
          >
            View Ticket Details
          </a>
        </div>
        <div className="relative md:col-span-7">
          <img
            src="/assets/gala.jpg"
            alt="Women in traditional Botswana attire performing a cultural dance"
            width={1200}
            height={900}
            loading="lazy"
            className="h-full min-h-[280px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
