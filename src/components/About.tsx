import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-cream text-brand">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:px-12 md:py-28">
        <div className="md:col-span-4">
          <p className="text-xs font-bold uppercase text-sage">Who we are</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            A home for Batswana. A bridge to Calgary.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-brand/75 md:col-span-7 md:col-start-6">
          <p>
            Founded in 2008, the Association formally registered as a society in 2026. We create a welcoming home for Batswana living in Alberta and introduce Calgary audiences to Botswana’s music, dance, storytelling, cuisine, visual arts, and traditions.
          </p>
          <p>
            Our work strengthens cultural identity among diaspora families while fostering intercultural understanding and dialogue across Calgary’s diverse communities.
          </p>
          <div className="grid gap-px overflow-hidden rounded-lg border border-brand/15 bg-brand/15 sm:grid-cols-2">
            <div className="bg-cream p-6">
              <p className="text-xs font-bold uppercase text-sage">Our mission</p>
              <p className="mt-3 text-sm leading-relaxed text-brand/90">
                To promote and celebrate Botswana’s cultural heritage in Canada through events, artistic expression, education, and meaningful partnerships.
              </p>
            </div>
            <div className="bg-cream p-6">
              <p className="text-xs font-bold uppercase text-sage">Our vision</p>
              <p className="mt-3 text-sm leading-relaxed text-brand/90">
                A vibrant, inclusive Calgary where Botswana culture is visible, valued, and shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
