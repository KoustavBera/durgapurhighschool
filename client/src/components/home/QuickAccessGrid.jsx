import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const QUICK_LINKS = [
  { icon: 'person_add', key: 'admission', link: '/admissions' },
  { icon: 'payments', key: 'fees', link: '/admissions' },
  { icon: 'description', key: 'results', link: '/academics' },
  { icon: 'auto_stories', key: 'syllabus', link: '/academics' },
];

const QuickAccessGrid = () => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <section className="py-12 md:py-16 bg-surface px-4 sm:px-6 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.key}
              to={item.link}
              className="group bg-white p-8 border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border-l-4 border-l-primary hover:border-l-secondary flex flex-col justify-between"
            >
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 group-hover:text-secondary transition-all block">
                  {item.icon}
                </span>
                <h3 className="font-headline-md text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {t(`quickAccess.${item.key}.title`)}
                </h3>
                <p className="text-ash-gray font-label-md text-sm leading-relaxed">
                  {t(`quickAccess.${item.key}.desc`)}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/40 flex items-center gap-1 text-sm font-bold text-primary group-hover:text-secondary group-hover:translate-x-1 transition-all">
                <span>{t('common:actions.explore')}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessGrid;
