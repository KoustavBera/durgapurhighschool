import React from 'react';
import { Link } from 'react-router-dom';

const ExamResultsCards = () => {
  return (
    <div className="md:col-span-5 flex flex-col gap-6">
      {/* Examination Rules Card */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant flex-1 flex flex-col items-center justify-center text-center shadow-sm">
        <div className="w-14 h-14 bg-error-container text-on-error-container rounded-full flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-2xl">assignment_late</span>
        </div>
        <h3 className="font-headline-md text-xl font-bold text-primary mb-2">Examination Code</h3>
        <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-4 max-w-xs">
          A minimum of 75% annual attendance is mandatory under WBBSE/WBCHSE norms to appear for final board examinations.
        </p>
        <Link
          to="/notices"
          className="text-primary font-bold flex items-center gap-1 hover:text-secondary text-sm group"
        >
          <span>Read Evaluation Guidelines</span>
          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </div>

      {/* Results Portal Card */}
      <div className="bg-secondary-container text-on-secondary-container p-6 sm:p-8 rounded-2xl flex-1 flex flex-col items-center justify-center text-center shadow-md">
        <div className="w-14 h-14 bg-white text-secondary rounded-full flex items-center justify-center mb-4 shadow-sm">
          <span className="material-symbols-outlined text-2xl">emoji_events</span>
        </div>
        <h3 className="font-headline-md text-xl font-bold text-on-secondary-container mb-2">
          Online Results Portal
        </h3>
        <p className="text-on-secondary-container/90 text-xs sm:text-sm leading-relaxed mb-5 max-w-xs">
          Access unit evaluations, terminal report cards, and board result rankings using your Student Roll & DOB.
        </p>
        <Link
          to="/notices"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary-container transition-colors shadow-sm text-sm active:scale-95"
        >
          Check Examination Results
        </Link>
      </div>
    </div>
  );
};

export default ExamResultsCards;
