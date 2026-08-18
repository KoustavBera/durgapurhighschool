import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutBento = () => {
  const { t } = useTranslation('about');

  return (
    <section className="mb-16 md:mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* History Card (2 cols) */}
        <div className="md:col-span-2 bg-surface-container p-8 sm:p-10 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 bg-primary-container rounded-xl flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-2xl">history</span>
              </div>
              <div>
                <span className="text-secondary text-xs uppercase font-bold tracking-widest block">{t('history.tag')}</span>
                <h3 className="font-headline-md text-2xl font-bold text-primary">{t('history.title')}</h3>
              </div>
            </div>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-4">
              {t('history.paragraph1')}
            </p>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              {t('history.paragraph2')}
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-outline-variant flex flex-wrap gap-6 text-sm text-ash-gray font-label-md">
            <div><strong className="text-primary text-lg block">{t('history.statYearsValue')}</strong> {t('history.statYears')}</div>
            <div><strong className="text-primary text-lg block">{t('history.statPassValue')}</strong> {t('history.statPass')}</div>
            <div><strong className="text-primary text-lg block">{t('history.statBoardsValue')}</strong> {t('history.statBoards')}</div>
          </div>
        </div>

        {/* Vision & Mission Column (1 col) */}
        <div className="flex flex-col gap-6">
          <div className="bg-primary text-on-primary p-8 rounded-2xl shadow-md flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl">visibility</span>
              <h3 className="font-headline-md text-xl font-bold text-white">{t('vision.title')}</h3>
            </div>
            <p className="font-body-md text-sm sm:text-base text-white/90 leading-relaxed">
              {t('vision.text')}
            </p>
          </div>

          <div className="bg-secondary text-on-secondary p-8 rounded-2xl shadow-md flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-white text-3xl">target</span>
              <h3 className="font-headline-md text-xl font-bold text-white">{t('mission.title')}</h3>
            </div>
            <p className="font-body-md text-sm sm:text-base text-white/90 leading-relaxed">
              {t('mission.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBento;
