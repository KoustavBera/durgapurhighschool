import React from 'react';
import admissionsData from '../../data/admissions.json';

const ImportantDates = () => {
  const dates = admissionsData.importantDates || [
    { label: 'Registration Opens', date: 'Dec 01, 2024' },
    { label: 'Last Date to Apply', date: 'Jan 15, 2025' },
    { label: 'Written Assessment', date: 'Feb 05, 2025' },
    { label: 'Merit List Declaration', date: 'Feb 20, 2025' },
  ];

  return (
    <div className="md:col-span-4 bg-primary text-on-primary rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-secondary-fixed text-3xl">event</span>
          <h3 className="font-headline-md text-xl font-bold text-white">Important Deadlines</h3>
        </div>
        <ul className="space-y-5">
          {dates.map((item, idx) => (
            <li
              key={idx}
              className={`flex flex-col ${idx !== dates.length - 1 ? 'border-b border-white/15 pb-4' : ''}`}
            >
              <span className="font-label-sm text-xs text-secondary-fixed uppercase font-bold tracking-wider">
                {item.label}
              </span>
              <span className="font-headline-md text-xl sm:text-2xl font-bold text-white mt-0.5">
                {item.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 pt-4 border-t border-white/15 flex items-center gap-2 text-xs text-white/70">
        <span className="material-symbols-outlined text-[16px]">info</span>
        <span>Dates subject to official WBBSE circulars</span>
      </div>
    </div>
  );
};

export default ImportantDates;
