import React from 'react';

const NoticeFilter = ({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange,
  year,
  onYearChange,
  onReset,
}) => {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-end">
        {/* Search Input */}
        <div className="w-full lg:flex-1">
          <label className="block font-label-md text-xs sm:text-sm font-semibold text-on-surface-variant mb-2">
            Search Notices & Circulars
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-ash-gray text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by title, number or keyword..."
              className="w-full pl-11 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="w-full sm:w-1/2 lg:w-52">
          <label className="block font-label-md text-xs sm:text-sm font-semibold text-on-surface-variant mb-2">
            Notice Category
          </label>
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full py-3 px-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          >
            <option value="All">All Categories</option>
            <option value="Admission">Admission</option>
            <option value="Academics">Academics</option>
            <option value="Examination">Examination</option>
            <option value="General">General / Administrative</option>
          </select>
        </div>

        {/* Academic Year Dropdown */}
        <div className="w-full sm:w-1/2 lg:w-48">
          <label className="block font-label-md text-xs sm:text-sm font-semibold text-on-surface-variant mb-2">
            Academic Year
          </label>
          <select
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
            className="w-full py-3 px-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          >
            <option value="All">All Years</option>
            <option value="2024-25">2024-25</option>
            <option value="2023-24">2023-24</option>
            <option value="2022-23">2022-23</option>
          </select>
        </div>

        {/* Reset Button */}
        {(searchTerm || category !== 'All' || year !== 'All') && (
          <button
            onClick={onReset}
            className="bg-surface-variant text-on-surface-variant px-5 py-3 rounded-xl font-bold text-sm hover:bg-outline-variant transition-colors whitespace-nowrap active:scale-95"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default NoticeFilter;
