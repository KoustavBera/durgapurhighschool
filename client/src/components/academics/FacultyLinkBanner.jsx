import React from 'react';
import { Link } from 'react-router-dom';

const FacultyLinkBanner = () => {
  return (
    <section className="mt-12 bg-primary-container text-on-primary-container p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-white/10">
      <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 flex-shrink-0 shadow-lg">
          <img
            className="w-full h-full object-cover"
            alt="Durgapur High School Educators"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwMwlrzfkyMA-1VHM-9C2OKpLPb6qY6B8FtrJWuzt4h9M0rziYHt2NnyuRFgNK7c1pIkcSNy_ke2QVdTxy3pk7RgbiFaXIWpYUV4JCt8F6f5fgOZKjpimWuBTA6kKRLbAVjAu2dLBtO9WEX3uXNInBq_7T84-bwk4i7OFwlyM4O10weKxChXsKIW0kyY2IJfNO5AzKDRmot5mues4DMvqQVi0pGO7MwL3V06fCaMUpUZs8C52Enr8cZQ"
          />
        </div>
        <div>
          <span className="text-secondary-fixed text-xs uppercase font-bold tracking-widest block mb-1">
            Academic Mentors
          </span>
          <h3 className="font-headline-md text-2xl font-bold text-white mb-2">
            Meet Our Distinguished Faculty
          </h3>
          <p className="text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
            Our qualified team of senior postgraduate teachers (PGTs) and trained graduate teachers (TGTs) bring decades of mentoring excellence to every classroom.
          </p>
        </div>
      </div>
      <Link
        to="/faculty"
        className="bg-white text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-surface-variant transition-all whitespace-nowrap shadow-md text-sm active:scale-95 flex-shrink-0"
      >
        Browse Faculty Directory
      </Link>
    </section>
  );
};

export default FacultyLinkBanner;
