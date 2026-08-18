import React from 'react';
import Pagination from '../common/Pagination';

const getCategoryBadgeClass = (cat) => {
  switch (cat?.toLowerCase()) {
    case 'admission':
      return 'bg-secondary-container/20 text-secondary border-secondary-fixed';
    case 'examination':
      return 'bg-primary-container/10 text-primary border-outline-variant';
    case 'academics':
      return 'bg-tertiary-fixed text-on-tertiary-fixed-variant border-tertiary-fixed-dim';
    default:
      return 'bg-surface-variant text-on-surface-variant border-outline-variant';
  }
};

const NoticeTable = ({
  notices = [],
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  pageSize = 6,
  onPageChange,
}) => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm mb-12">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="bg-primary-container text-on-primary-container font-label-md text-xs sm:text-sm border-b border-outline-variant">
              <th className="px-6 py-4 font-bold uppercase tracking-wider w-32">Date</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider">Notice Title & Reference</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider w-40">Category</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-right w-44">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/60 font-body-md text-sm">
            {notices.length > 0 ? (
              notices.map((notice) => (
                <tr key={notice.id} className="hover:bg-surface-container transition-colors">
                  <td className="px-6 py-4 text-ash-gray font-label-md whitespace-nowrap text-xs sm:text-sm">
                    {notice.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      {notice.isPinned && (
                        <span className="bg-error text-on-error text-[10px] font-bold px-1.5 py-0.5 rounded uppercase flex-shrink-0">
                          New
                        </span>
                      )}
                      <a
                        href={notice.pdfUrl || '#'}
                        onClick={(e) => {
                          if (!notice.pdfUrl) {
                            e.preventDefault();
                            alert(`Downloading official notice: ${notice.title}`);
                          }
                        }}
                        className="font-bold text-primary hover:text-secondary hover:underline transition-colors line-clamp-2"
                      >
                        {notice.title}
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 border rounded-full font-label-sm text-xs font-semibold inline-block ${getCategoryBadgeClass(
                        notice.category
                      )}`}
                    >
                      {notice.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <a
                      href={notice.pdfUrl || '#'}
                      onClick={(e) => {
                        if (!notice.pdfUrl) {
                          e.preventDefault();
                          alert(`Downloading PDF for notice #${notice.id}`);
                        }
                      }}
                      className="inline-flex items-center gap-1 text-primary font-bold hover:text-secondary transition-colors text-xs sm:text-sm bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant/40"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      <span>PDF ({notice.fileSize || '1.2 MB'})</span>
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-12 text-center text-ash-gray">
                  <span className="material-symbols-outlined text-4xl block mb-2 text-outline">search_off</span>
                  <p className="font-semibold text-base">No notices found matching your filter criteria.</p>
                  <p className="text-xs mt-1">Try searching with a different keyword or resetting filters.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="bg-surface-container-low px-6 py-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-label-sm text-xs text-ash-gray">
            Showing {(currentPage - 1) * pageSize + 1} to{' '}
            {Math.min(currentPage * pageSize, totalItems)} of {totalItems} official notices
          </p>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default NoticeTable;
