import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  memberUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ memberUrl }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 flex items-center justify-between border-b border-gold/20 px-6 py-6 md:px-12">
      <a href="#" className="flex items-center gap-3 group">
        <img
          src="/assets/cbca-logo.jpg"
          alt="Calgary Botswana Community Association logo"
          width={44}
          height={44}
          className="size-14 rounded-full bg-cream object-contain p-0.5 outline-1 -outline-offset-1 outline-gold/40 transition-transform duration-200 group-hover:scale-105"
        />
        <div className="leading-tight">
          <p className="font-display text-sm font-semibold tracking-wide md:text-base">
            Calgary Botswana
          </p>
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold/70">
            Community Association
          </p>
        </div>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-cream/70 md:flex">
        <a href="#story" className="transition-colors hover:text-gold">
          Our Story
        </a>
        <a href="#events" className="transition-colors hover:text-gold">
          Events
        </a>
        <a href="#join" className="transition-colors hover:text-gold">
          Get Involved
        </a>
        <a
          href={memberUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gold px-5 py-2 font-semibold text-brand transition-all hover:brightness-110 active:scale-95"
        >
          Join Us
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-cream/80 hover:text-gold transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-gold/20 bg-brand/95 backdrop-blur-md px-6 py-6 md:hidden flex flex-col gap-4 text-xs uppercase tracking-[0.2em] text-cream/80 shadow-xl">
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-gold transition-colors"
          >
            Our Story
          </a>
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-gold transition-colors"
          >
            Events
          </a>
          <a
            href="#join"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-gold transition-colors"
          >
            Get Involved
          </a>
          <a
            href={memberUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center rounded-full bg-gold px-5 py-3 font-semibold text-brand transition-all hover:brightness-110"
          >
            Join Us
          </a>
        </div>
      )}
    </header>
  );
};
