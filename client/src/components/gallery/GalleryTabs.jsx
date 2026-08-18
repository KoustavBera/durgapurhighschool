import React from 'react';
import { useTranslation } from 'react-i18next';

// `value` matches the `category` slug stored in gallery.json (`all` means no
// filter); only the label is translated.
const CATEGORIES = [
  { value: 'all', labelKey: 'tabs.allPhotos' },
  { value: 'infrastructure', labelKey: 'tabs.infrastructure' },
  { value: 'laboratories', labelKey: 'tabs.laboratories' },
  { value: 'sports', labelKey: 'tabs.sports' },
  { value: 'cultural', labelKey: 'tabs.culturalEvents' },
  { value: 'annual_day', labelKey: 'tabs.annualDay' },
];

const GalleryTabs = ({ activeCategory, onCategoryChange }) => {
  const { t } = useTranslation('gallery');

  return (
    <div className="sticky top-20 bg-surface/95 backdrop-blur-md z-30 py-4 mb-8 border-b border-outline-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-x-auto">
      {/* Category Pills */}
      <div className="flex gap-2.5 min-w-max pb-1 sm:pb-0">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={`px-5 py-2 rounded-full font-label-md text-xs sm:text-sm font-bold transition-all ${
              activeCategory === cat.value
                ? 'bg-primary text-on-primary shadow-sm scale-100'
                : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary'
            }`}
            aria-pressed={activeCategory === cat.value}
          >
            {t(cat.labelKey)}
          </button>
        ))}
      </div>

      {/* Year Filter Indicator */}
      <div className="flex items-center gap-1.5 text-ash-gray font-label-md text-xs sm:text-sm whitespace-nowrap pl-1">
        <span className="material-symbols-outlined text-[18px] text-secondary">filter_list</span>
        <span>
          {t('tabs.archiveYear')}{' '}
          <strong className="text-primary font-bold">{t('tabs.archiveYearValue')}</strong>
        </span>
      </div>
    </div>
  );
};

export default GalleryTabs;
