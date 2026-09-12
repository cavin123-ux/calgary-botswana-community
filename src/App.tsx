/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { SignatureEvent } from './components/SignatureEvent';
import { MomentsOfPride } from './components/MomentsOfPride';
import { JoinCta } from './components/JoinCta';
import { Footer } from './components/Footer';

const TICKET_URL =
  'https://www.eventbrite.ca/e/botswana-60th-independence-diamond-jubilee-gala-tickets-1996533371058';
const MEMBER_URL = 'https://www.eventbrite.ca/o/121611711429';
const FACEBOOK_URL = 'https://www.facebook.com/groups/261182977292836/';
const INSTAGRAM_URL = 'https://www.instagram.com/';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand text-cream selection:bg-gold selection:text-brand">
      {/* Ambient background wash */}
      <div className="stained-wash pointer-events-none absolute inset-0 opacity-40" />

      {/* Navigation Header */}
      <Header memberUrl={MEMBER_URL} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero ticketUrl={TICKET_URL} />

        {/* Community Key Numbers */}
        <Stats />

        {/* 60th Independence Diamond Jubilee Gala Event */}
        <SignatureEvent ticketUrl={TICKET_URL} />

        {/* Moments of Pride Stories */}
        <MomentsOfPride facebookUrl={FACEBOOK_URL} />

        {/* Membership CTA */}
        <JoinCta memberUrl={MEMBER_URL} />
      </main>

      {/* Footer */}
      <Footer
        facebookUrl={FACEBOOK_URL}
        instagramUrl={INSTAGRAM_URL}
        memberUrl={MEMBER_URL}
      />
    </div>
  );
}
