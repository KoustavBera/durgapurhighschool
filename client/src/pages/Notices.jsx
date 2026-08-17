import React, { useState } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import PageHeader from '../components/common/PageHeader';
import Pagination from '../components/common/Pagination';
import noticesData from '../data/notices.json';

const Notices = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredNotices = noticesData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const paginatedNotices = filteredNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      <Breadcrumb items={[{ label: 'Student Corner' }, { label: 'Notice Board' }]} />
      <PageHeader
        title="Notice Board & Circulars"
        titleBn="বিজ্ঞপ্তি ফলক ও সার্কুলার"
        subtitle="Access all official administrative notifications, examination schedules, and admission circulars for Durgapur High School."
      />

      {/* Search and Category Filter */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-xl p-4 sm:p-6 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-ash-gray">
            search
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search circulars..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-outline-variant rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {['All', 'Admission', 'Examination', 'Academics', 'General'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                category === cat
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-white text-on-surface-variant hover:bg-surface-container-high border border-outline-variant'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Notices Table */}
      <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" role="table">
            <thead>
              <tr className="bg-primary-container text-on-primary-container font-label-md text-xs sm:text-sm border-b border-outline-variant">
                <th className="px-4 sm:px-6 py-4 font-bold">Date</th>
                <th className="px-4 sm:px-6 py-4 font-bold">Notice Title</th>
                <th className="px-4 sm:px-6 py-4 font-bold">Category</th>
                <th className="px-4 sm:px-6 py-4 font-bold text-right">Download</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/40 text-sm">
              {paginatedNotices.length > 0 ? (
                paginatedNotices.map((notice) => (
                  <tr key={notice.id} className="hover:bg-surface-container/60 transition-colors">
                    <td className="px-4 sm:px-6 py-4 text-ash-gray whitespace-nowrap font-medium text-xs sm:text-sm">
                      {notice.date}
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center gap-2">
                        {notice.isNew && (
                          <span className="bg-error text-on-error text-[10px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0">
                            New
                          </span>
                        )}
                        <span className="font-bold text-primary hover:underline cursor-pointer">
                          {notice.title}
                        </span>
                      </div>
                      {notice.description && (
                        <p className="text-xs text-on-surface-variant mt-1 line-clamp-1">
                          {notice.description}
                        </p>
                      )}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span className="px-2.5 py-0.5 bg-secondary-container/20 text-secondary border border-secondary-fixed rounded-full text-xs font-bold">
                        {notice.category}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-right whitespace-nowrap">
                      <a
                        href={notice.pdfUrl}
                        className="inline-flex items-center gap-1 text-primary font-bold hover:text-secondary text-xs sm:text-sm"
                      >
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        <span>PDF ({notice.fileSize})</span>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-ash-gray">
                    No notices found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(p) => setCurrentPage(p)}
          totalItems={filteredNotices.length}
          itemsPerPage={itemsPerPage}
          variant="inline"
        />
      </div>
    </div>
  );
};

export default Notices;
