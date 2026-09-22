import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 flex items-center justify-between border-b border-cream/15 px-5 py-4 md:px-12">
      <a
        href="#top"
        className="flex min-w-0 items-center gap-3"
        aria-label="Calgary Botswana Community Association home"
      >
        <img
          src="/assets/cbca-logo.jpg"
          alt="Calgary Botswana Community Association logo"
          width={56}
          height={56}
          className="size-12 shrink-0 aspect-square rounded-full bg-cream object-contain p-0.5 shadow-sm ring-1 ring-cream/20 md:size-14"
        />
        <span className="max-w-48 font-display text-sm font-semibold leading-tight md:max-w-none md:text-base">
          Calgary Botswana Community Association
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav
        className="hidden items-center gap-7 text-xs font-semibold uppercase text-cream/75 lg:flex"
        aria-label="Main navigation"
      >
        <a className="transition-colors hover:text-gold" href="#about">
          About
        </a>
        <a className="transition-colors hover:text-gold" href="#programs">
          Programs
        </a>
        <a className="transition-colors hover:text-gold" href="#events">
          Events
        </a>
        <a className="transition-colors hover:text-gold" href="#media">
          Media
        </a>
        <a className="transition-colors hover:text-gold" href="#membership">
          Membership
        </a>
        <a className="transition-colors hover:text-gold" href="#contact">
          Contact
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 text-cream/80 hover:text-gold transition-colors focus:outline-none lg:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-cream/15 bg-brand/95 px-6 py-6 shadow-2xl backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-wider text-cream/85">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-gold"
            >
              About
            </a>
            <a
              href="#programs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-gold"
            >
              Programs
            </a>
            <a
              href="#events"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-gold"
            >
              Events
            </a>
            <a
              href="#media"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-gold"
            >
              Media
            </a>
            <a
              href="#membership"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-gold"
            >
              Membership
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-gold"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
