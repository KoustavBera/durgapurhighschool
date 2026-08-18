import React from 'react';

const syllabi = [
  { title: 'Secondary Syllabus (V-X) 2024-25', size: '2.4 MB' },
  { title: 'H.S. Science Stream Syllabus', size: '1.8 MB' },
  { title: 'H.S. Humanities & Arts Syllabus', size: '1.5 MB' },
  { title: 'H.S. Commerce Stream Syllabus', size: '1.2 MB' },
];

const ResourcesCard = () => {
  return (
    <div className="md:col-span-4 bg-primary text-on-primary p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-secondary-fixed text-3xl">download_for_offline</span>
          <h3 className="font-headline-md text-xl font-bold text-white">Academic Resources</h3>
        </div>
        <p className="text-white/80 text-sm mb-6 leading-relaxed">
          Download official curriculum guidelines, question patterns, and syllabus PDFs approved by WBBSE & WBCHSE.
        </p>
      </div>

      <div className="space-y-3">
        {syllabi.map((item, idx) => (
          <a
            key={idx}
            href="#download"
            onClick={(e) => e.preventDefault()}
            className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/15 text-sm group"
          >
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <span className="material-symbols-outlined text-secondary-fixed text-[18px]">picture_as_pdf</span>
              <span className="font-label-md truncate text-white group-hover:text-secondary-fixed transition-colors">
                {item.title}
              </span>
            </div>
            <span className="material-symbols-outlined text-white/70 group-hover:text-white transition-colors text-[20px] flex-shrink-0">
              download
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourcesCard;
