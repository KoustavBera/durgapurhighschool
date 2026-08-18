import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = [
  {
    icon: 'person_add',
    title: 'Online Admission',
    desc: 'Start your journey with us for the 2024-25 academic year.',
    link: '/admissions',
  },
  {
    icon: 'payments',
    title: 'Pay Fees',
    desc: 'Secure and convenient online fee payment & receipt generation.',
    link: '/admissions',
  },
  {
    icon: 'description',
    title: 'Results',
    desc: 'Access board and internal unit examination marks sheets.',
    link: '/academics',
  },
  {
    icon: 'auto_stories',
    title: 'Syllabus',
    desc: 'Download the latest WBBSE & WBCHSE curriculum for all grades.',
    link: '/academics',
  },
];

const QuickAccessGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-surface px-4 sm:px-6 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="group bg-white p-8 border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border-l-4 border-l-primary hover:border-l-secondary flex flex-col justify-between"
            >
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 group-hover:text-secondary transition-all block">
                  {item.icon}
                </span>
                <h3 className="font-headline-md text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-ash-gray font-label-md text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/40 flex items-center gap-1 text-sm font-bold text-primary group-hover:text-secondary group-hover:translate-x-1 transition-all">
                <span>Explore</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessGrid;
