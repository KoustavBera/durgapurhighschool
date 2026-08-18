import React, { useState, useMemo } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Sidebar from '../components/common/Sidebar';
import Pagination from '../components/common/Pagination';
import FacultyFilter from '../components/faculty/FacultyFilter';
import FacultyGrid from '../components/faculty/FacultyGrid';
import facultyData from '../data/faculty.json';

const PAGE_SIZE = 6;

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered Faculty List
  const filteredFaculty = useMemo(() => {
    return facultyData.filter((item) => {
      const matchesSearch =
        searchTerm.trim() === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.qualification.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.department.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDept =
        selectedDept === 'All' ||
        item.department.toLowerCase().includes(selectedDept.toLowerCase());

      return matchesSearch && matchesDept;
    });
  }, [searchTerm, selectedDept]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredFaculty.length / PAGE_SIZE));
  const paginatedFaculty = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredFaculty.slice(start, start + PAGE_SIZE);
  }, [filteredFaculty, currentPage]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedDept('All');
    setCurrentPage(1);
  };

  const handleDeptChange = (val) => {
    setSelectedDept(val);
    setCurrentPage(1);
  };

  const handleSearchChange = (val) => {
    setSearchTerm(val);
    setCurrentPage(1);
  };

  return (
    <div className="relative min-h-screen">
      {/* Desktop Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="lg:pl-64 py-6 px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: 'Academics', link: '/academics' },
            { label: 'Faculty Directory' },
          ]}
        />

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-headline-lg text-3xl sm:text-4xl text-primary font-bold mb-2">
            Faculty Directory
          </h1>
          <p className="text-body-lg text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
            Our dedicated educators are the pillar of Durgapur High School. Browse through our diverse team of subject matter experts committed to holistic academic excellence.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <FacultyFilter
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          department={selectedDept}
          onDepartmentChange={handleDeptChange}
          onReset={handleReset}
          totalCount={filteredFaculty.length}
        />

        {/* Faculty Grid Cards */}
        <FacultyGrid facultyList={paginatedFaculty} />

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mb-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Faculty;
