import React from 'react';
import { useTranslation } from 'react-i18next';
import admissionsData from '../../data/admissions.json';
import { useLocale } from '../../hooks/useLocale';

const ImportantDates = () => {
  const { t } = useTranslation('admissions');
  const { field } = useLocale();
  const dates = admissionsData.importantDates || [];

  return (
    <div className="md:col-span-4 bg-primary text-on-primary rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-secondary-fixed text-3xl">event</span>
          <h3 className="font-headline-md text-xl font-bold text-white">{t('dates.heading')}</h3>
        </div>
        <ul className="space-y-5">
          {dates.map((item, idx) => (
            <li
              key={item.event || idx}
              className={`flex flex-col ${idx !== dates.length - 1 ? 'border-b border-white/15 pb-4' : ''}`}
            >
              <span className="font-label-sm text-xs text-secondary-fixed uppercase font-bold tracking-wider">
                {field(item, 'event')}
              </span>
              <span className="font-headline-md text-xl sm:text-2xl font-bold text-white mt-0.5">
                {field(item, 'date')}
              </span>
              {item.status && (
                <span className="font-label-sm text-[11px] text-white/60 mt-1">
                  {t(`dates.status.${item.status}`, { defaultValue: item.status })}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 pt-4 border-t border-white/15 flex items-center gap-2 text-xs text-white/70">
        <span className="material-symbols-outlined text-[16px]">info</span>
        <span>{t('dates.footnote')}</span>
      </div>
    </div>
  );
};

export default ImportantDates;
