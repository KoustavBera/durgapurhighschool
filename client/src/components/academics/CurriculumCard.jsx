import React from 'react';

const CurriculumCard = () => {
  return (
    <div className="md:col-span-8 bg-surface-container-low p-6 sm:p-8 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-secondary text-3xl">menu_book</span>
          <h3 className="font-headline-md text-2xl font-bold text-primary">Curriculum Structure</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-primary text-base sm:text-lg mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> Secondary Section (Class V - X)
            </h4>
            <p className="text-on-surface-variant font-body-md text-sm sm:text-base mb-4 leading-relaxed">
              Affiliated with the West Bengal Board of Secondary Education (WBBSE). Emphasizes core foundations in Language, Mathematics, Physical & Life Sciences, History, and Geography.
            </p>
            <ul className="space-y-2.5 text-sm font-label-md">
              <li className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                <span>Continuous & Comprehensive Evaluation (CCE)</span>
              </li>
              <li className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                <span>Structured Madhyamik Pariksha Preparation</span>
              </li>
              <li className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                <span>Computer Literacy & Work Education Modules</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary text-base sm:text-lg mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> Higher Secondary (Class XI - XII)
            </h4>
            <p className="text-on-surface-variant font-body-md text-sm sm:text-base mb-4 leading-relaxed">
              Affiliated with the West Bengal Council of Higher Secondary Education (WBCHSE). Offering specialized academic streams for engineering, medical, commerce, and civil services careers.
            </p>
            <ul className="space-y-2.5 text-sm font-label-md">
              <li className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                <span>Practical Laboratory-Driven Curriculum</span>
              </li>
              <li className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                <span>WBCHSE Higher Secondary Final Board Exams</span>
              </li>
              <li className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                <span>Career Orientation & Competitive Exam Guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumCard;
