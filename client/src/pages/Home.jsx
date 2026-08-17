import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/common/Marquee';
import StatsGrid from '../components/common/StatsGrid';

const Home = () => {
  return (
    <div>
      {/* Announcements Marquee */}
      <Marquee />

      {/* Hero Section */}
      <section className="relative w-full min-h-[540px] md:min-h-[600px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOxUhw5kyf6VtIvEI29tcCThXiUa2FjK7fWnIRFqbwm4M3UDQLA5VDs5fxedaybN9-16GNUBUWvNzO-QdV0cDjoGph0hyUicPQiThGLJeBhbMBAPMJVs4BwfzpLK7RgBD7cehKsfqsJDNsiulwt75d_gv-SVA-q7JNtarywKMx2WdwgpgUc-qc44KVr1bnlhmEqnYqbWpUErYgLS4ccXYvtXaZm-K07bNg0XblMnf7IsyOnqX_ZFh8Jw')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20" />
        </div>

        <div className="relative z-10 w-full max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop pb-12 md:pb-16 flex flex-col lg:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl text-on-primary">
            <span className="bg-secondary px-3 py-1 rounded text-label-sm font-bold uppercase tracking-wider mb-3 inline-block shadow-sm">
              Established 1952
            </span>
            <h1 className="font-display-lg text-[34px] sm:text-[44px] md:text-display-lg text-white font-bold leading-tight mb-4">
              Shaping Minds, <br className="hidden sm:inline" />
              Nurturing Futures
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary/90 mb-8 max-w-lg leading-relaxed">
              Providing excellence in education for over seven decades, fostering a holistic environment for the leaders of tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary transition-all font-bold px-8 py-3.5 rounded-lg flex items-center gap-2 shadow-lg active:scale-95 text-base"
              >
                <span>Apply Online</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <Link
                to="/about"
                className="border-2 border-white/40 text-white hover:bg-white/15 transition-all font-bold px-8 py-3.5 rounded-lg backdrop-blur-sm text-base"
              >
                About Our School
              </Link>
            </div>
          </div>

          {/* Principal Snippet Card */}
          <div className="glass-panel-dark p-5 sm:p-6 rounded-2xl border border-white/20 max-w-sm flex gap-4 items-center shadow-xl">
            <img
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-secondary-fixed object-cover shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD08g6j1h2PeMcJjDbVr-XlydPwq6o54FzsiUPH6-niVn5kSi183MD5CFGRutbJqqd8vcv1CvubPkYj9a5oDmSyXvq0J3PfQzFV8VL8RIlp7FAVUTu6czyzJNnEpGtN1vT_JeJlc4op7Bc9eACJ51TURwhSlkqnLS5x5fEMqt2Axv0BiGvJa0niBL4sDpf2OvNQY4jEWPAK6jBjQq5vD8lMB3yf5OcU0pMZsyGo2AFD8PWjjF-6jyF0hw"
              alt="Principal Dr. S. K. Mukherjee"
            />
            <div className="text-on-primary">
              <h3 className="font-headline-md text-base sm:text-lg font-bold leading-tight">
                Dr. S. K. Mukherjee
              </h3>
              <p className="text-label-sm text-secondary-fixed uppercase font-bold text-[11px] tracking-wider mt-0.5">
                Principal's Message
              </p>
              <p className="font-body-md text-xs text-white/80 line-clamp-2 mt-1.5">
                "Our mission is to empower every student to achieve excellence with discipline..."
              </p>
              <Link to="/about" className="text-secondary-fixed text-xs font-bold hover:underline mt-1.5 inline-block">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-12 md:py-16 bg-surface px-4 sm:px-6 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/admissions"
              className="bg-white p-6 sm:p-8 border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-l-primary hover:border-l-secondary group"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-3 group-hover:scale-110 transition-transform block">
                person_add
              </span>
              <h3 className="font-headline-md text-lg font-bold text-primary mb-1">
                Online Admission
              </h3>
              <p className="text-ash-gray font-label-md text-xs leading-relaxed">
                Start your journey with us for the 2025-26 academic year.
              </p>
            </Link>

            <Link
              to="/notices"
              className="bg-white p-6 sm:p-8 border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-l-primary hover:border-l-secondary group"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-3 group-hover:scale-110 transition-transform block">
                campaign
              </span>
              <h3 className="font-headline-md text-lg font-bold text-primary mb-1">
                Latest Notices
              </h3>
              <p className="text-ash-gray font-label-md text-xs leading-relaxed">
                Access official circulars, examination schedules and updates.
              </p>
            </Link>

            <Link
              to="/academics"
              className="bg-white p-6 sm:p-8 border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-l-primary hover:border-l-secondary group"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-3 group-hover:scale-110 transition-transform block">
                auto_stories
              </span>
              <h3 className="font-headline-md text-lg font-bold text-primary mb-1">
                Curriculum
              </h3>
              <p className="text-ash-gray font-label-md text-xs leading-relaxed">
                Explore WBBSE & WBCHSE subject streams and academic calendar.
              </p>
            </Link>

            <Link
              to="/faculty"
              className="bg-white p-6 sm:p-8 border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-l-primary hover:border-l-secondary group"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-3 group-hover:scale-110 transition-transform block">
                groups
              </span>
              <h3 className="font-headline-md text-lg font-bold text-primary mb-1">
                Faculty Directory
              </h3>
              <p className="text-ash-gray font-label-md text-xs leading-relaxed">
                Meet our dedicated teaching faculty and department heads.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-dim px-4 sm:px-6 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-primary mb-2">
              Excellence in Numbers
            </h2>
            <p className="text-ash-gray text-sm sm:text-base">
              Committed to providing a digitally enabled learning environment since 1952.
            </p>
          </div>
          <StatsGrid />
        </div>
      </section>
    </div>
  );
};

export default Home;
