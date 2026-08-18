import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-[60vh] max-w-container-max mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mb-6 text-outline">
        <span className="material-symbols-outlined text-6xl">search_off</span>
      </div>
      <h1 className="font-display-lg text-[40px] sm:text-display-lg text-primary font-bold mb-2">
        {t('notFound.code')}
      </h1>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-3">
        {t('notFound.titleEn')} / {t('notFound.titleBn')}
      </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-8 leading-relaxed">
        {t('notFound.message')}
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="bg-primary hover:bg-primary-container text-on-primary font-bold px-8 py-3.5 rounded-lg flex items-center gap-2 shadow-md transition-all active:scale-95"
        >
          <span className="material-symbols-outlined">home</span>
          <span>{t('notFound.backHome')}</span>
        </Link>
        <Link
          to="/notices"
          className="border-2 border-primary text-primary hover:bg-primary hover:text-on-primary font-bold px-6 py-3.5 rounded-lg transition-all"
        >
          <span>{t('notFound.viewNotices')}</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
