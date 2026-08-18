import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

// Values match the `category` slugs in notices.json, so only labels translate.
const CATEGORY_OPTIONS = [
  { value: 'Admission', labelKey: 'common:categories.admission' },
  { value: 'Academics', labelKey: 'common:categories.academics' },
  { value: 'Examination', labelKey: 'common:categories.examination' },
  { value: 'General', labelKey: 'filter.categoryGeneral' },
];

const YEAR_OPTIONS = ['2024-25', '2023-24', '2022-23'];

const NoticeFilter = ({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange,
  year,
  onYearChange,
  onReset,
}) => {
  const { t } = useTranslation(['notices', 'common']);
  const { num } = useLocale();

  return (
    <div className="bg-surface-container border border-outline-variant rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-end">
        {/* Search Input */}
        <div className="w-full lg:flex-1">
          <label htmlFor="notice-search" className="block font-label-md text-xs sm:text-sm font-semibold text-on-surface-variant mb-2">
            {t('filter.searchLabel')}
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-ash-gray text-[20px]">
              search
            </span>
            <input
              id="notice-search"
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t('filter.searchPlaceholder')}
              className="w-full pl-11 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="w-full sm:w-1/2 lg:w-52">
          <label htmlFor="notice-category" className="block font-label-md text-xs sm:text-sm font-semibold text-on-surface-variant mb-2">
            {t('filter.categoryLabel')}
          </label>
          <select
            id="notice-category"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full py-3 px-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          >
            <option value="All">{t('filter.allCategories')}</option>
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {t(option.labelKey)}
              </option>
            ))}
          </select>
        </div>

        {/* Academic Year Dropdown */}
        <div className="w-full sm:w-1/2 lg:w-48">
          <label htmlFor="notice-year" className="block font-label-md text-xs sm:text-sm font-semibold text-on-surface-variant mb-2">
            {t('filter.yearLabel')}
          </label>
          <select
            id="notice-year"
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
            className="w-full py-3 px-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          >
            <option value="All">{t('filter.allYears')}</option>
            {YEAR_OPTIONS.map((value) => (
              <option key={value} value={value}>
                {num(value)}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Button */}
        {(searchTerm || category !== 'All' || year !== 'All') && (
          <button
            onClick={onReset}
            className="bg-surface-variant text-on-surface-variant px-5 py-3 rounded-xl font-bold text-sm hover:bg-outline-variant transition-colors whitespace-nowrap active:scale-95"
          >
            {t('filter.reset')}
          </button>
        )}
      </div>
    </div>
  );
};

export default NoticeFilter;
