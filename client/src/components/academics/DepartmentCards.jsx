import React from 'react';
import { Link } from 'react-router-dom';

const departments = [
  {
    name: 'Science & Technology',
    icon: 'science',
    iconBg: 'bg-secondary-container text-on-secondary-container',
    desc: 'Dedicated state-of-the-art labs for Physics, Chemistry, Biology, and Computer Science with hands-on experimental coursework.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science'],
  },
  {
    name: 'Arts & Humanities',
    icon: 'history_edu',
    iconBg: 'bg-primary-fixed text-on-primary-fixed-variant',
    desc: 'Deep analytical and historical studies in Bengali, English Literature, History, Geography, Philosophy, and Political Science.',
    subjects: ['Bengali (1st Lang)', 'English (2nd Lang)', 'History', 'Geography', 'Pol Science'],
  },
  {
    name: 'Commerce & Business',
    icon: 'payments',
    iconBg: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    desc: 'Comprehensive modern coursework in Accountancy, Business Studies, Commercial Law, and Economics preparing students for corporate finance.',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Commercial Law', 'Statistics'],
  },
];

const DepartmentCards = () => {
  return (
    <div className="md:col-span-12">
      <div className="mb-6">
        <h3 className="font-headline-md text-2xl font-bold text-primary">Our Academic Departments</h3>
        <p className="text-ash-gray font-body-md text-sm mt-1">
          Specialized streams designed for comprehensive higher secondary and competitive preparation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {departments.map((dept, idx) => (
          <div
            key={idx}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className={`w-12 h-12 ${dept.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-sm`}>
                <span className="material-symbols-outlined text-2xl">{dept.icon}</span>
              </div>
              <h4 className="font-headline-md text-xl font-bold text-primary mb-3">
                {dept.name}
              </h4>
              <p className="text-on-surface-variant font-body-md text-sm leading-relaxed mb-4">
                {dept.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {dept.subjects.map((sub, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-medium bg-surface-container px-2 py-0.5 rounded text-on-surface-variant"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to="/faculty"
              className="text-primary font-bold hover:text-secondary flex items-center gap-1 text-sm pt-4 border-t border-outline-variant/40 group w-fit"
            >
              <span>View Department Faculty</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentCards;
