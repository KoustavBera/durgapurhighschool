import React from 'react';

const AboutBento = () => {
  return (
    <section className="mb-16 md:mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* History Card (2 cols) */}
        <div className="md:col-span-2 bg-surface-container p-8 sm:p-10 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 bg-primary-container rounded-xl flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-2xl">history</span>
              </div>
              <div>
                <span className="text-secondary text-xs uppercase font-bold tracking-widest block">Heritage & Roots</span>
                <h3 className="font-headline-md text-2xl font-bold text-primary">Our Rich History</h3>
              </div>
            </div>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-4">
              Founded in the transformative post-independence era of 1952, Durgapur High School was established to provide top-tier academic foundation to the children of industrial township workers and neighboring communities.
            </p>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              Over the decades, it has evolved into a premier Higher Secondary institution recognized by the West Bengal Board of Secondary Education (WBBSE) and Council of Higher Secondary Education (WBCHSE). Our alumni include distinguished scientists, civil servants, engineers, and educators serving across the globe.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-outline-variant flex flex-wrap gap-6 text-sm text-ash-gray font-label-md">
            <div><strong className="text-primary text-lg block">70+</strong> Years of Service</div>
            <div><strong className="text-primary text-lg block">100%</strong> Board Pass Rate</div>
            <div><strong className="text-primary text-lg block">WBBSE & WBCHSE</strong> Recognized</div>
          </div>
        </div>

        {/* Vision & Mission Column (1 col) */}
        <div className="flex flex-col gap-6">
          <div className="bg-primary text-on-primary p-8 rounded-2xl shadow-md flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl">visibility</span>
              <h3 className="font-headline-md text-xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="font-body-md text-sm sm:text-base text-white/90 leading-relaxed">
              To be a beacon of inclusive academic excellence, cultivating intellectual curiosity, moral integrity, and modern technological competency in every student.
            </p>
          </div>

          <div className="bg-secondary text-on-secondary p-8 rounded-2xl shadow-md flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-white text-3xl">target</span>
              <h3 className="font-headline-md text-xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="font-body-md text-sm sm:text-base text-white/90 leading-relaxed">
              Fostering a nurturing, discipline-oriented environment with rigorous scientific temper, artistic creativity, and civic responsibility for nation-building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBento;
