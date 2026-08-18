import React from 'react';
import FacultyCard from './FacultyCard';

const FacultyGrid = ({ facultyList = [], onSelect }) => {
  if (facultyList.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-outline-variant p-12 text-center text-ash-gray mb-12 shadow-sm">
        <span className="material-symbols-outlined text-5xl text-outline mb-3 block">person_search</span>
        <h4 className="font-headline-md text-lg font-bold text-primary mb-1">No faculty found</h4>
        <p className="text-sm">Please try modifying your search query or department filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {facultyList.map((faculty) => (
        <FacultyCard
          key={faculty.id}
          faculty={faculty}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default FacultyGrid;
