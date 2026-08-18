import React from 'react';

const archives = [
  {
    year: 'Academic Year 2023-24',
    title: 'Past Academic Notices & Circulars',
    notices: [
      'Final Board Exam Routine & Guidelines 2023',
      'Summer Vacation Administrative Circular 2023',
      'Kanyashree K2 Beneficiary Enrolment 2023',
    ],
  },
  {
    year: 'Admission Reports',
    title: 'Previous Year Selection Lists',
    notices: [
      'Class V Admission Merit Results 2022-23',
      'Class XI Science Intake Final Merit 2023',
      'Transfer Vacancy Intake Notification 2022',
    ],
  },
  {
    year: 'Legacy Records',
    title: 'Digitized Archive (2018 - 2022)',
    desc: 'Historical gazette circulars, state education orders, and administrative meeting minutes from previous academic councils.',
  },
];

const NoticeArchive = () => {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-between mb-6 gap-2">
        <div>
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">Notice Archive</h3>
          <p className="text-xs text-ash-gray font-label-md">Historical records & previous academic years</p>
        </div>
        <a
          href="#archive-all"
          onClick={(e) => {
            e.preventDefault();
            alert('Accessing full historical records repository.');
          }}
          className="text-primary font-bold flex items-center gap-1 hover:text-secondary text-sm group"
        >
          <span>View All Archives</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {archives.map((arch, idx) => (
          <div
            key={idx}
            className="bg-surface-container-low border border-outline-variant p-6 rounded-2xl hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-ash-gray font-label-sm text-xs mb-3">
                <span className="material-symbols-outlined text-[18px] text-secondary">folder</span>
                <span className="font-semibold">{arch.year}</span>
              </div>
              <h4 className="font-bold text-primary text-base sm:text-lg mb-4">{arch.title}</h4>

              {arch.notices ? (
                <ul className="space-y-2.5 mb-6">
                  {arch.notices.map((n, nIdx) => (
                    <li key={nIdx} className="flex items-start gap-2 text-xs text-on-surface-variant group cursor-pointer hover:text-primary">
                      <span className="material-symbols-outlined text-[16px] text-ash-gray group-hover:text-primary flex-shrink-0 mt-0.5">
                        description
                      </span>
                      <span className="line-clamp-1">{n}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-ash-gray font-body-md leading-relaxed mb-6">
                  {arch.desc}
                </p>
              )}
            </div>

            <button
              onClick={() => alert(`Opening archive folder: ${arch.title}`)}
              className="w-full py-2.5 bg-surface-container-highest border border-outline-variant rounded-xl text-primary font-bold hover:bg-primary hover:text-white transition-all text-xs active:scale-95 flex items-center justify-center gap-1.5"
            >
              <span>Access Folder Records</span>
              <span className="material-symbols-outlined text-[16px]">folder_open</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NoticeArchive;
