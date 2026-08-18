import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../components/common/Breadcrumb';
import NoticeFilter from '../components/notices/NoticeFilter';
import NoticeTable from '../components/notices/NoticeTable';
import NoticeArchive from '../components/notices/NoticeArchive';
import noticesData from '../data/notices.json';

const PAGE_SIZE = 6;

const Notices = () => {
  const { t } = useTranslation('notices');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered dataset
  const filteredNotices = useMemo(() => {
    return noticesData.filter((item) => {
      const matchesSearch =
        searchTerm.trim() === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesYear =
        selectedYear === 'All' ||
        item.academicYear === selectedYear ||
        item.date.includes(selectedYear.split('-')[0]);

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchTerm, selectedCategory, selectedYear]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredNotices.length / PAGE_SIZE));
  const paginatedNotices = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredNotices.slice(start, start + PAGE_SIZE);
  }, [filteredNotices, currentPage]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedYear('All');
    setCurrentPage(1);
  };

  const handleCategoryChange = (val) => {
    setSelectedCategory(val);
    setCurrentPage(1);
  };

  const handleYearChange = (val) => {
    setSelectedYear(val);
    setCurrentPage(1);
  };

  const handleSearchChange = (val) => {
    setSearchTerm(val);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ labelKey: 'nav.studentCorner' }, { labelKey: 'nav.noticeBoard' }]} />

      {/* Page Header Section */}
      <div className="mb-8">
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-primary font-bold mb-2">
          {t('page.title')}
        </h1>
        <p className="text-ash-gray font-body-md text-sm sm:text-base max-w-3xl leading-relaxed">
          {t('page.intro')}
        </p>
      </div>

      {/* Search and Filters Bar */}
      <NoticeFilter
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
        year={selectedYear}
        onYearChange={handleYearChange}
        onReset={handleReset}
      />

      {/* Tabulated Notices Table with Pagination */}
      <NoticeTable
        notices={paginatedNotices}
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredNotices.length}
        pageSize={PAGE_SIZE}
        onPageChange={setCurrentPage}
      />

      {/* Notice Archive Folders */}
      <NoticeArchive />
    </div>
  );
};

export default Notices;
