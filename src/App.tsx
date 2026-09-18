/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Values } from './components/Values';
import { Membership } from './components/Membership';
import { Governance } from './components/Governance';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-brand text-cream">
      <main>
        {/* Hero Section with Video Background and Top Navigation */}
        <Hero />

        {/* Who We Are - About Section */}
        <About />

        {/* What We Do - Programs Section */}
        <Programs />

        {/* Signature Event & Coming Next - Events Section */}
        <Events />

        {/* AfriFest Calgary - Gallery Section */}
        <Gallery />

        {/* What Guides Us - Values Section */}
        <Values />

        {/* Belong, Participate, and Shape Our Future - Membership Section */}
        <Membership />

        {/* Community-Led and Accountable - Governance Section */}
        <Governance />

        {/* Bring Your Time, Talent, Ideas - Get Involved / Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
