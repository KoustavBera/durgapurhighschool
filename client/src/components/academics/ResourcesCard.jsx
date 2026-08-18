import React from 'react';
import { useTranslation } from 'react-i18next';

const SYLLABI = [
  { key: 'resources.secondarySyllabus', size: '2.4 MB' },
  { key: 'resources.scienceSyllabus', size: '1.8 MB' },
  { key: 'resources.humanitiesSyllabus', size: '1.5 MB' },
  { key: 'resources.commerceSyllabus', size: '1.2 MB' },
];

const ResourcesCard = () => {
  const { t } = useTranslation('academics');

  return (
    <div className="md:col-span-4 bg-primary text-on-primary p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-secondary-fixed text-3xl">download_for_offline</span>
          <h3 className="font-headline-md text-xl font-bold text-white">{t('resources.heading')}</h3>
        </div>
        <p className="text-white/80 text-sm mb-6 leading-relaxed">
          {t('resources.intro')}
        </p>
      </div>

      <div className="space-y-3">
        {SYLLABI.map((item) => (
          <a
            key={item.key}
            href="#download"
            onClick={(e) => e.preventDefault()}
            className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/15 text-sm group"
          >
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <span className="material-symbols-outlined text-secondary-fixed text-[18px]">picture_as_pdf</span>
              <span className="font-label-md truncate text-white group-hover:text-secondary-fixed transition-colors">
                {t(item.key)}
              </span>
            </div>
            <span className="material-symbols-outlined text-white/70 group-hover:text-white transition-colors text-[20px] flex-shrink-0">
              download
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourcesCard;
