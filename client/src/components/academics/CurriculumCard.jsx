import React from 'react';
import { useTranslation } from 'react-i18next';

const SECTIONS = ['secondary', 'higherSecondary'];
const POINT_KEYS = ['point1', 'point2', 'point3'];

const CurriculumCard = () => {
  const { t } = useTranslation('academics');

  return (
    <div className="md:col-span-8 bg-surface-container-low p-6 sm:p-8 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-secondary text-3xl">menu_book</span>
          <h3 className="font-headline-md text-2xl font-bold text-primary">{t('curriculum.heading')}</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {SECTIONS.map((section) => (
            <div key={section}>
              <h4 className="font-bold text-primary text-base sm:text-lg mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>{' '}
                {t(`curriculum.${section}.title`)}
              </h4>
              <p className="text-on-surface-variant font-body-md text-sm sm:text-base mb-4 leading-relaxed">
                {t(`curriculum.${section}.desc`)}
              </p>
              <ul className="space-y-2.5 text-sm font-label-md">
                {POINT_KEYS.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                    <span>{t(`curriculum.${section}.${point}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumCard;
