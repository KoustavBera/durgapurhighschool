import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

// Values stay in English because they are matched against `faculty.department`.
const DEPARTMENT_OPTIONS = [
  { value: 'Science', labelKey: 'filter.options.science' },
  { value: 'Humanities', labelKey: 'filter.options.humanities' },
  { value: 'Commerce', labelKey: 'filter.options.commerce' },
  { value: 'Language', labelKey: 'filter.options.language' },
  { value: 'Physical Education', labelKey: 'filter.options.physicalEducation' },
];

const FacultyFilter = ({
  searchTerm,
  onSearchChange,
  department,
  onDepartmentChange,
  onReset,
  totalCount,
}) => {
  const { t } = useTranslation('faculty');
  const { num } = useLocale();

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant shadow-sm mb-10 grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
      {/* Search Input */}
      <div className="md:col-span-5">
        <label htmlFor="faculty-search" className="block font-label-md text-xs sm:text-sm font-semibold text-on-surface-variant mb-2">
          {t('filter.searchLabel')}
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-ash-gray text-[20px]">
            search
          </span>
          <input
            id="faculty-search"
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t('filter.searchPlaceholder')}
            className="w-full pl-11 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl outline-none text-sm transition-all"
          />
        </div>
      </div>

      {/* Department Dropdown */}
      <div className="md:col-span-4">
        <label htmlFor="faculty-department" className="block font-label-md text-xs sm:text-sm font-semibold text-on-surface-variant mb-2">
          {t('filter.departmentLabel')}
        </label>
        <select
          id="faculty-department"
          value={department}
          onChange={(e) => onDepartmentChange(e.target.value)}
          className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl outline-none text-sm transition-all"
        >
          <option value="All">{t('filter.allDepartments')}</option>
          {DEPARTMENT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {t(option.labelKey)}
            </option>
          ))}
        </select>
      </div>

      {/* Action / Counter */}
      <div className="md:col-span-3 flex items-center gap-2">
        {(searchTerm || department !== 'All') ? (
          <button
            onClick={onReset}
            className="w-full bg-surface-variant text-on-surface-variant py-2.5 rounded-xl font-bold text-xs hover:bg-outline-variant transition-colors flex items-center justify-center gap-1.5 active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
            <span>{t('filter.reset', { total: num(totalCount) })}</span>
          </button>
        ) : (
          <div className="w-full py-2.5 px-4 bg-surface-container rounded-xl text-center font-label-md text-xs text-on-surface-variant font-bold">
            {t('filter.showing', { total: num(totalCount) })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyFilter;
