import React from 'react';
import { useTranslation } from 'react-i18next';

const ARCHIVES = ['pastYear', 'admissionReports', 'legacy'];

const NoticeArchive = () => {
  const { t } = useTranslation('notices');

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between mb-6 gap-2">
        <div>
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">{t('archive.heading')}</h3>
          <p className="text-xs text-ash-gray font-label-md">{t('archive.subheading')}</p>
        </div>
        <a
          href="#archive-all"
          onClick={(e) => {
            e.preventDefault();
            alert(t('archive.viewAllAlert'));
          }}
          className="text-primary font-bold flex items-center gap-1 hover:text-secondary text-sm group"
        >
          <span>{t('archive.viewAll')}</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARCHIVES.map((key) => {
          const title = t(`archive.${key}.title`);
          // Only the first two folders list individual notices; the legacy
          // folder is summarised with a description instead.
          const notices = t(`archive.${key}.notices`, { returnObjects: true, defaultValue: null });
          const noticeList = Array.isArray(notices) ? notices : null;

          return (
            <div
              key={key}
              className="bg-surface-container-low border border-outline-variant p-6 rounded-2xl hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-ash-gray font-label-sm text-xs mb-3">
                  <span className="material-symbols-outlined text-[18px] text-secondary">folder</span>
                  <span className="font-semibold">{t(`archive.${key}.year`)}</span>
                </div>
                <h4 className="font-bold text-primary text-base sm:text-lg mb-4">{title}</h4>

                {noticeList ? (
                  <ul className="space-y-2.5 mb-6">
                    {noticeList.map((n, nIdx) => (
                      <li key={nIdx} className="flex items-start gap-2 text-xs text-on-surface-variant group cursor-pointer hover:text-primary">
                        <span className="material-symbols-outlined text-[16px] text-ash-gray group-hover:text-primary flex-shrink-0 mt-0.5">
                          description
                        </span>
                        <span className="line-clamp-1">{n}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-ash-gray font-body-md leading-relaxed mb-6">
                    {t(`archive.${key}.desc`)}
                  </p>
                )}
              </div>

              <button
                onClick={() => alert(t('archive.openFolderAlert', { title }))}
                className="w-full py-2.5 bg-surface-container-highest border border-outline-variant rounded-xl text-primary font-bold hover:bg-primary hover:text-white transition-all text-xs active:scale-95 flex items-center justify-center gap-1.5"
              >
                <span>{t('archive.openFolder')}</span>
                <span className="material-symbols-outlined text-[16px]">folder_open</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NoticeArchive;
