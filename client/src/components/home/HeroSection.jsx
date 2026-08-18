import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[560px] md:h-[600px] overflow-hidden flex items-end">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Durgapur High School Campus"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOxUhw5kyf6VtIvEI29tcCThXiUa2FjK7fWnIRFqbwm4M3UDQLA5VDs5fxedaybN9-16GNUBUWvNzO-QdV0cDjoGph0hyUicPQiThGLJeBhbMBAPMJVs4BwfzpLK7RgBD7cehKsfqsJDNsiulwt75d_gv-SVA-q7JNtarywKMx2WdwgpgUc-qc44KVr1bnlhmEqnYqbWpUErYgLS4ccXYvtXaZm-K07bNg0XblMnf7IsyOnqX_ZFh8Jw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop pb-12 md:pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
        <div className="max-w-2xl text-on-primary">
          <span className="bg-secondary px-3 py-1 rounded text-label-sm font-bold uppercase tracking-wider mb-4 inline-block text-white shadow-sm">
            Established 1952
          </span>
          <h1 className="font-display-lg text-3xl sm:text-4xl md:text-display-lg text-white font-bold leading-tight mb-4">
            Shaping Minds, <br className="hidden sm:inline" />
            Nurturing Futures
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/90 mb-8 max-w-lg leading-relaxed">
            Providing excellence in education for over seven decades, fostering a holistic environment for the leaders of tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/admissions"
              className="bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary transition-all font-bold px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg active:scale-95 text-base"
            >
              <span>Apply Online</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
            <Link
              to="/academics"
              className="border-2 border-white/30 text-white hover:bg-white/10 transition-all font-bold px-8 py-3 rounded-lg backdrop-blur-sm text-base"
            >
              View Prospectus
            </Link>
          </div>
        </div>

        {/* Principal Snippet */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 max-w-sm flex gap-4 items-center shadow-lg w-full md:w-auto">
          <img
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-secondary-fixed object-cover flex-shrink-0"
            alt="Dr. A.K. Sanyal, Principal"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1_DElFKp0ls44lG-YBE7SupwKk8qxCbbpPmRp-ub0ZCRI0qZCzJ29E6HK_r7IpPb51h9oEJheX1_E6ywc-0QoPZctqJ2LYwIxI08QyQ7opvv0O2FpVrao-IDw0HO4r7f-LNTX6CqCNK4cj1wLnRoKEyyHacX9W4ACNbMb3RCy6akONNMN8P686pzltn1Cb9YgBnZf3W9l1f-_kxAp3mJfvdWMv85D_tlQsp_jnDwvhsuRBByFrOw9HQ"
          />
          <div className="text-on-primary min-w-0">
            <h3 className="font-headline-md text-headline-md leading-tight text-white truncate">Dr. A.K. Sanyal</h3>
            <p className="text-label-sm text-secondary-fixed uppercase font-bold tracking-tighter mt-0.5">
              Principal's Message
            </p>
            <p className="font-body-md text-sm text-white/80 line-clamp-2 mt-2 italic">
              "Our mission is to provide quality education that empowers every student to reach their fullest potential..."
            </p>
            <Link
              to="/about"
              className="text-secondary-fixed font-bold hover:underline mt-2 inline-flex items-center gap-1 text-sm"
            >
              <span>Read More</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
