import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  totalItems,
  itemsPerPage = 10,
  variant = 'centered',
}) => {
  const { t } = useTranslation('common');
  const { num } = useLocale();

  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems || currentPage * itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        start = 2;
        end = 4;
      } else if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
        end = totalPages - 1;
      }

      if (start > 2) {
        pages.push('...');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  if (variant === 'inline') {
    return (
      <div className="bg-surface-container-low px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-outline-variant rounded-b-lg">
        {totalItems && (
          <p className="font-label-sm text-ash-gray">
            <Trans
              t={t}
              i18nKey="pagination.showingRecords"
              values={{ start: num(startItem), end: num(endItem), total: num(totalItems) }}
              components={[
                <span className="font-bold text-on-surface" key="start" />,
                <span className="font-bold text-on-surface" key="end" />,
                <span className="font-bold text-on-surface" key="total" />,
              ]}
            />
          </p>
        )}
        <div className="flex items-center gap-1.5" role="navigation" aria-label={t('pagination.navigation')}>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1.5 sm:p-2 border border-outline-variant rounded hover:bg-surface-variant disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title={t('pagination.previous')}
            aria-label={t('pagination.previous')}
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>

          {getPageNumbers().map((page, idx) => {
            if (page === '...') {
              return (
                <span key={`dots-${idx}`} className="px-2 text-ash-gray">
                  ...
                </span>
              );
            }
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 text-label-md rounded font-bold transition-all ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'border border-outline-variant text-on-surface-variant hover:bg-surface-variant'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {num(page)}
              </button>
            );
          })}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1.5 sm:p-2 border border-outline-variant rounded hover:bg-surface-variant disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title={t('pagination.next')}
            aria-label={t('pagination.next')}
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    );
  }

  // Centered Variant
  return (
    <nav
      className="mt-12 md:mt-16 flex items-center justify-center gap-2 sm:gap-3"
      role="navigation"
      aria-label={t('pagination.navigation')}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 sm:p-2.5 rounded-lg border border-outline-variant hover:bg-surface-container-high disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        title={t('pagination.previous')}
        aria-label={t('pagination.previous')}
      >
        <span className="material-symbols-outlined text-[20px]">navigate_before</span>
      </button>

      <div className="flex items-center gap-1.5 sm:gap-2">
        {getPageNumbers().map((page, idx) => {
          if (page === '...') {
            return (
              <span key={`dots-${idx}`} className="px-2 text-ash-gray font-bold">
                ...
              </span>
            );
          }
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg font-bold text-label-md transition-all ${
                isActive
                  ? 'bg-primary text-on-primary shadow-md scale-105'
                  : 'border border-outline-variant hover:bg-surface-container-high text-on-surface-variant'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {num(page)}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 sm:p-2.5 rounded-lg border border-outline-variant hover:bg-surface-container-high disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        title={t('pagination.next')}
        aria-label={t('pagination.next')}
      >
        <span className="material-symbols-outlined text-[20px]">navigate_next</span>
      </button>
    </nav>
  );
};

export default Pagination;
