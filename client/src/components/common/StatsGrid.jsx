import React from 'react';
import statsData from '../../data/stats.json';

const defaultStats = [
  {
    icon: 'groups',
    value: statsData.students,
    label: statsData.studentsLabel,
    labelBn: statsData.studentsLabelBn,
  },
  {
    icon: 'school',
    value: statsData.faculty,
    label: statsData.facultyLabel,
    labelBn: statsData.facultyLabelBn,
  },
  {
    icon: 'science',
    value: statsData.labs,
    label: statsData.labsLabel,
    labelBn: statsData.labsLabelBn,
  },
  {
    icon: 'desktop_windows',
    value: statsData.smartClasses,
    label: statsData.smartClassesLabel,
    labelBn: statsData.smartClassesLabelBn,
  },
];

const StatsGrid = ({ stats = defaultStats, dark = true }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`${
            dark
              ? 'bg-primary text-on-primary'
              : 'bg-white text-on-surface border border-outline-variant'
          } p-6 sm:p-7 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group`}
        >
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <span
              className={`material-symbols-outlined text-3xl sm:text-4xl ${
                dark ? 'text-secondary-fixed' : 'text-primary'
              }`}
            >
              {stat.icon}
            </span>
          </div>
          <span className="text-3xl sm:text-4xl font-bold tracking-tight mb-1">
            {stat.value}
          </span>
          <span
            className={`text-label-sm uppercase font-bold tracking-wider text-[11px] sm:text-label-sm ${
              dark ? 'text-on-primary/70' : 'text-on-surface-variant'
            }`}
          >
            {stat.label}
          </span>
          {stat.labelBn && (
            <span
              className={`font-bengali-body text-[12px] mt-1 font-normal ${
                dark ? 'text-secondary-fixed/80' : 'text-ash-gray'
              }`}
              lang="bn"
            >
              {stat.labelBn}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
