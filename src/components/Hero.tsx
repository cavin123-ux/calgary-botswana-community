import React from 'react';
import { Header } from './Header';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92svh] border-b border-cream/15">
      {/* Background Video with Poster fallback */}
      <video
        className="absolute inset-0 size-full object-cover"
        src="/assets/botswana-afrifest-2026.mp4"
        poster="/assets/botswana-afrifest-mayor.jpg"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label="Botswana community celebrations at AfriFest Calgary"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-brand/70" />

      {/* Top Header */}
      <Header />

      {/* Hero Headline & Call-to-Actions */}
      <div
        id="top"
        className="relative z-10 mx-auto flex min-h-[calc(92svh-81px)] max-w-7xl items-end px-5 pb-16 pt-24 md:px-12 md:pb-20"
      >
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-gold">
            <span className="h-px w-10 bg-gold" /> Pula · Unity · Heritage
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] md:text-7xl lg:text-8xl">
            Botswana culture. Calgary community.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
            A registered non-profit society celebrating, preserving, and sharing Botswana’s rich cultural heritage with the diaspora and the wider Canadian community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#membership"
              className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-brand transition-all hover:brightness-110 active:scale-95"
            >
              Become a member
            </a>
            <a
              href="#events"
              className="rounded-full border border-cream/50 px-6 py-3 text-sm font-bold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Explore our events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
