import React from 'react';
import { useTranslation } from 'react-i18next';
import Pagination from '../common/Pagination';
import { useLocale } from '../../hooks/useLocale';
import { categoryLabel } from '../../i18n/categories';

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
  const { t } = useTranslation(['notices', 'common']);
  const { field, num, date } = useLocale();

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm mb-12">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="bg-primary-container text-on-primary-container font-label-md text-xs sm:text-sm border-b border-outline-variant">
              <th className="px-6 py-4 font-bold uppercase tracking-wider w-32">{t('table.date')}</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider">{t('table.title')}</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider w-40">{t('table.category')}</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-right w-44">{t('table.action')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/60 font-body-md text-sm">
            {notices.length > 0 ? (
              notices.map((notice) => {
                const title = field(notice, 'title');

                return (
                  <tr key={notice.id} className="hover:bg-surface-container transition-colors">
                    <td className="px-6 py-4 text-ash-gray font-label-md whitespace-nowrap text-xs sm:text-sm">
                      {date(notice.date)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        {notice.isPinned && (
                          <span className="bg-error text-on-error text-[10px] font-bold px-1.5 py-0.5 rounded uppercase flex-shrink-0">
                            {t('table.newBadge')}
                          </span>
                        )}
                        <a
                          href={notice.pdfUrl || '#'}
                          onClick={(e) => {
                            if (!notice.pdfUrl) {
                              e.preventDefault();
                              alert(t('table.downloadAlert', { title }));
                            }
                          }}
                          className="font-bold text-primary hover:text-secondary hover:underline transition-colors line-clamp-2"
                        >
                          {title}
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 border rounded-full font-label-sm text-xs font-semibold inline-block ${getCategoryBadgeClass(
                          notice.category
                        )}`}
                      >
                        {categoryLabel(t, notice.category)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <a
                        href={notice.pdfUrl || '#'}
                        onClick={(e) => {
                          if (!notice.pdfUrl) {
                            e.preventDefault();
                            alert(t('table.downloadPdfAlert', { id: notice.id }));
                          }
                        }}
                        className="inline-flex items-center gap-1 text-primary font-bold hover:text-secondary transition-colors text-xs sm:text-sm bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant/40"
                      >
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        <span>{t('table.pdfLabel', { size: num(notice.fileSize || '1.2 MB') })}</span>
                      </a>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-12 text-center text-ash-gray">
                  <span className="material-symbols-outlined text-4xl block mb-2 text-outline">search_off</span>
                  <p className="font-semibold text-base">{t('table.emptyTitle')}</p>
                  <p className="text-xs mt-1">{t('table.emptyMessage')}</p>
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
            {t('table.showing', {
              start: num((currentPage - 1) * pageSize + 1),
              end: num(Math.min(currentPage * pageSize, totalItems)),
              total: num(totalItems),
            })}
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
