import React, { useState } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import PageHeader from '../components/common/PageHeader';
import Sidebar from '../components/common/Sidebar';
import Pagination from '../components/common/Pagination';
import facultyData from '../data/faculty.json';

const Faculty = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 lg:pl-64 max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
        <Breadcrumb items={[{ label: 'Academics', href: '/academics' }, { label: 'Faculty Directory' }]} />
        <PageHeader
          title="Faculty Directory"
          titleBn="শিক্ষকমণ্ডলীর তালিকা"
          subtitle="Our dedicated educators are the pillar of Durgapur High School. Browse through our diverse team of subject experts committed to academic excellence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {facultyData.slice(0, 6).map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-48 overflow-hidden bg-surface-container relative">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {teacher.isHod && (
                  <span className="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-label-sm font-bold shadow-sm">
                    H.O.D
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="text-label-sm text-secondary font-bold uppercase tracking-wider mb-1">
                  {teacher.department}
                </p>
                <h3 className="font-headline-md text-[20px] font-bold text-primary mb-1">
                  {teacher.name}
                </h3>
                <p className="text-body-md text-on-surface-variant mb-4 text-sm">
                  {teacher.designation}
                </p>
                <div className="border-t border-outline-variant/40 pt-4 space-y-2 text-ash-gray text-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">school</span>
                    <span>{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">history_edu</span>
                    <span>{teacher.experience} Experience</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={2}
          onPageChange={(p) => setCurrentPage(p)}
          variant="centered"
        />
      </div>
    </div>
  );
};

export default Faculty;
