import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] max-w-container-max mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mb-6 text-outline">
        <span className="material-symbols-outlined text-6xl">search_off</span>
      </div>
      <h1 className="font-display-lg text-[40px] sm:text-display-lg text-primary font-bold mb-2">
        404
      </h1>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-3">
        Page Not Found / পৃষ্ঠাটি পাওয়া যায়নি
      </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-8 leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="bg-primary hover:bg-primary-container text-on-primary font-bold px-8 py-3.5 rounded-lg flex items-center gap-2 shadow-md transition-all active:scale-95"
        >
          <span className="material-symbols-outlined">home</span>
          <span>Back to Home</span>
        </Link>
        <Link
          to="/notices"
          className="border-2 border-primary text-primary hover:bg-primary hover:text-on-primary font-bold px-6 py-3.5 rounded-lg transition-all"
        >
          <span>View Notice Board</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
