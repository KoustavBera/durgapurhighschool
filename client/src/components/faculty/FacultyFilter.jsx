import React from 'react';

const FacultyFilter = ({
  searchTerm,
  onSearchChange,
  department,
  onDepartmentChange,
  onReset,
  totalCount,
}) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant shadow-sm mb-10 grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
      {/* Search Input */}
      <div className="md:col-span-5">
        <label className="block font-label-md text-xs sm:text-sm font-semibold text-on-surface-variant mb-2">
          Search Faculty by Name or Subject
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-ash-gray text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search educator or subject..."
            className="w-full pl-11 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl outline-none text-sm transition-all"
          />
        </div>
      </div>

      {/* Department Dropdown */}
      <div className="md:col-span-4">
        <label className="block font-label-md text-xs sm:text-sm font-semibold text-on-surface-variant mb-2">
          Filter by Department
        </label>
        <select
          value={department}
          onChange={(e) => onDepartmentChange(e.target.value)}
          className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl outline-none text-sm transition-all"
        >
          <option value="All">All Departments</option>
          <option value="Science">Science (Physics/Chem/Bio/Math)</option>
          <option value="Humanities">Humanities & Social Sciences</option>
          <option value="Commerce">Commerce & Economics</option>
          <option value="Language">Language & Literature</option>
          <option value="Physical Education">Physical Education & Sports</option>
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
            <span>Reset ({totalCount})</span>
          </button>
        ) : (
          <div className="w-full py-2.5 px-4 bg-surface-container rounded-xl text-center font-label-md text-xs text-on-surface-variant font-bold">
            Showing {totalCount} Faculty
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyFilter;
