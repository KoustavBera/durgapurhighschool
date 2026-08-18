import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

const CALENDAR_EVENTS = [
  { key: 'unitTest', day: '15', month: 'May', border: 'border-secondary' },
  { key: 'summerBreak', day: '02', month: 'Jun', border: 'border-primary' },
  { key: 'labSubmission', day: '12', month: 'Aug', border: 'border-secondary' },
  { key: 'preBoard', day: '10', month: 'Nov', border: 'border-info' },
];

const AcademicCalendar = () => {
  const { t } = useTranslation('academics');
  const { num, monthAbbr } = useLocale();

  return (
    <div className="md:col-span-7 bg-surface-container-high p-6 sm:p-8 rounded-2xl border border-outline-variant flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
          <div>
            <h3 className="font-headline-md text-xl font-bold text-primary">{t('calendar.heading')}</h3>
            <p className="text-xs text-ash-gray font-label-md">{t('calendar.subheading')}</p>
          </div>
          <button
            onClick={() => alert(t('calendar.downloadAlert'))}
            className="bg-white px-3.5 py-1.5 rounded-lg border border-outline-variant hover:bg-surface transition-colors flex items-center gap-2 font-label-md text-xs font-bold text-primary shadow-sm"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            <span>{t('calendar.downloadPdf')}</span>
          </button>
        </div>

        <div className="space-y-3.5">
          {CALENDAR_EVENTS.map((evt) => (
            <div
              key={evt.key}
              className={`flex items-start gap-4 p-4 bg-white rounded-xl border-l-4 ${evt.border} shadow-sm`}
            >
              <div className="text-center min-w-[54px] bg-surface-container py-1.5 rounded-lg border border-outline-variant/40 flex-shrink-0">
                <span className="block font-bold text-xl text-primary leading-tight">{num(evt.day)}</span>
                <span className="block text-[10px] text-ash-gray uppercase font-bold tracking-wider">
                  {monthAbbr(evt.month)}
                </span>
              </div>
              <div className="min-w-0">
                <h5 className="font-bold text-primary text-sm sm:text-base leading-snug">
                  {t(`calendar.${evt.key}.title`)}
                </h5>
                <p className="text-on-surface-variant text-xs sm:text-sm mt-0.5 leading-relaxed">
                  {t(`calendar.${evt.key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
