import React from 'react';
import { useTranslation } from 'react-i18next';

const PrincipalMessage = () => {
  const { t } = useTranslation('about');

  return (
    <section className="mb-16 md:mb-24">
      <div className="bg-white rounded-2xl overflow-hidden border border-outline-variant flex flex-col md:flex-row shadow-sm">
        <div className="md:w-2/5 lg:w-1/3 min-h-[320px] relative">
          <img
            className="w-full h-full object-cover"
            alt={t('principal.alt')}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD08g6j1h2PeMcJjDbVr-XlydPwq6o54FzsiUPH6-niVn5kSi183MD5CFGRutbJqqd8vcv1CvubPkYj9a5oDmSyXvq0J3PfQzFV8VL8RIlp7FAVUTu6czyzJNnEpGtN1vT_JeJlc4op7Bc9eACJ51TURwhSlkqnLS5x5fEMqt2Axv0BiGvJa0niBL4sDpf2OvNQY4jEWPAK6jBjQq5vD8lMB3yf5OcU0pMZsyGo2AFD8PWjjF-6jyF0hw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-4 left-4 text-white md:hidden">
            <span className="text-xs uppercase font-bold text-secondary-fixed">{t('principal.role')}</span>
            <h4 className="font-bold text-lg">{t('principal.name')}</h4>
          </div>
        </div>

        <div className="md:w-3/5 lg:w-2/3 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <span className="font-label-md text-sm text-secondary font-bold mb-2 uppercase tracking-widest block">
            {t('principal.label')}
          </span>
          <h3 className="font-headline-lg text-2xl sm:text-3xl text-primary font-bold mb-4">
            {t('principal.name')}
          </h3>
          <blockquote className="font-body-md text-base sm:text-lg text-on-surface-variant italic mb-6 border-l-4 border-secondary-fixed pl-4 bg-surface-container-low/50 py-2 rounded-r-lg">
            {t('principal.quote')}
          </blockquote>
          <p className="font-body-md text-base text-on-surface-variant mb-6 leading-relaxed">
            {t('principal.bio')}
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-surface-container-high px-4 py-2 rounded-lg text-primary font-bold font-label-md text-xs sm:text-sm">
              {t('principal.credential1')}
            </div>
            <div className="bg-surface-container-high px-4 py-2 rounded-lg text-primary font-bold font-label-md text-xs sm:text-sm">
              {t('principal.credential2')}
            </div>
            <div className="bg-surface-container-high px-4 py-2 rounded-lg text-primary font-bold font-label-md text-xs sm:text-sm">
              {t('principal.credential3')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
