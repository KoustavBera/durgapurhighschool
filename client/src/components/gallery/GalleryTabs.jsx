import React from 'react';

const categories = [
  'All Photos',
  'Infrastructure',
  'Laboratories',
  'Sports',
  'Cultural Events',
  'Annual Day',
];

const GalleryTabs = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="sticky top-20 bg-surface/95 backdrop-blur-md z-30 py-4 mb-8 border-b border-outline-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-x-auto">
      {/* Category Pills */}
      <div className="flex gap-2.5 min-w-max pb-1 sm:pb-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-5 py-2 rounded-full font-label-md text-xs sm:text-sm font-bold transition-all ${
              activeCategory === cat
                ? 'bg-primary text-on-primary shadow-sm scale-100'
                : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Year Filter Indicator */}
      <div className="flex items-center gap-1.5 text-ash-gray font-label-md text-xs sm:text-sm whitespace-nowrap pl-1">
        <span className="material-symbols-outlined text-[18px] text-secondary">filter_list</span>
        <span>Archive Year: <strong className="text-primary font-bold">2024-25</strong></span>
      </div>
    </div>
  );
};

export default GalleryTabs;
