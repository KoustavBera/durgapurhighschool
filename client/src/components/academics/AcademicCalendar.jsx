import React from 'react';

const calendarEvents = [
  {
    day: '15',
    month: 'May',
    title: 'Unit Test - I Commencement',
    desc: 'Applies to Class V through X. Detailed room allocations posted on official notice board.',
    border: 'border-secondary',
  },
  {
    day: '02',
    month: 'Jun',
    title: 'Summer Vacation Break',
    desc: 'School closes for summer break. Reopens on June 18th for all sections.',
    border: 'border-primary',
  },
  {
    day: '12',
    month: 'Aug',
    title: 'H.S. Lab Project Submissions',
    desc: 'Final deadline for submitting Class XII Practical Lab Records & Computer Projects.',
    border: 'border-secondary',
  },
  {
    day: '10',
    month: 'Nov',
    title: 'Pre-Board Mock Examinations',
    desc: 'Madhyamik and Higher Secondary Test examination series commences.',
    border: 'border-info',
  },
];

const AcademicCalendar = () => {
  return (
    <div className="md:col-span-7 bg-surface-container-high p-6 sm:p-8 rounded-2xl border border-outline-variant flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
          <div>
            <h3 className="font-headline-md text-xl font-bold text-primary">Academic Calendar 2024-25</h3>
            <p className="text-xs text-ash-gray font-label-md">Key institutional dates and milestone timeline</p>
          </div>
          <button
            onClick={() => alert('Full academic calendar PDF download initiated.')}
            className="bg-white px-3.5 py-1.5 rounded-lg border border-outline-variant hover:bg-surface transition-colors flex items-center gap-2 font-label-md text-xs font-bold text-primary shadow-sm"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            <span>Download PDF</span>
          </button>
        </div>

        <div className="space-y-3.5">
          {calendarEvents.map((evt, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 p-4 bg-white rounded-xl border-l-4 ${evt.border} shadow-sm`}
            >
              <div className="text-center min-w-[54px] bg-surface-container py-1.5 rounded-lg border border-outline-variant/40 flex-shrink-0">
                <span className="block font-bold text-xl text-primary leading-tight">{evt.day}</span>
                <span className="block text-[10px] text-ash-gray uppercase font-bold tracking-wider">{evt.month}</span>
              </div>
              <div className="min-w-0">
                <h5 className="font-bold text-primary text-sm sm:text-base leading-snug">{evt.title}</h5>
                <p className="text-on-surface-variant text-xs sm:text-sm mt-0.5 leading-relaxed">{evt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
