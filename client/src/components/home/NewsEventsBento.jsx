import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsEventsBento = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-16 md:py-20 bg-surface px-4 sm:px-6 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 gap-4">
          <div>
            <h2 className="font-headline-lg text-2xl md:text-headline-lg border-l-4 border-secondary pl-4 flex flex-col">
              <span className="text-primary font-bold">{t('newsEvents.heading')}</span>
              <span lang="bn" className="font-bengali-body text-sm text-on-surface-variant font-normal">
                {t('newsEvents.headingBn')}
              </span>
            </h2>
          </div>
          <Link
            to="/news"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary-container transition-colors shadow-md flex items-center gap-2 text-sm w-fit active:scale-95"
          >
            <span>{t('newsEvents.browseAll')}</span>
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[240px]">
          {/* Main Featured Article (8 cols, 2 rows) */}
          <Link
            to="/news"
            className="md:col-span-8 md:row-span-2 relative rounded-3xl overflow-hidden shadow-lg group min-h-[360px] md:min-h-0 block"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt={t('newsEvents.featuredAlt')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ927KU9b8yYAuaRxFbl3UdQl1rXlMHxzE2jAfg8V3Rdb8senfL5i3D0ax7_SWcbUIBnmNdDAh5ExcH4Je8bnUMOnQ4KixMLojvpoehveBhhSbgfxKzrKxZW-JFlxbDHuQGD8HvlpfDVCcMnuEBysDi9nJQY0Dpl0oSwt0WUvzrLkbuOz6Cl1_sIh5lzQhkWdVkVbXwqFW_t5Ok0Jm8K_f23TgJWHkjnYZ5Z4eaJh0L2N6RRDdS3d-2w"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10">
              <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold w-fit mb-3 uppercase tracking-wider">
                {t('newsEvents.spotlight')}
              </span>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-secondary-fixed transition-colors">
                {t('newsEvents.featuredTitle')}
              </h3>
              <p className="text-white/80 font-body-lg text-sm sm:text-base max-w-xl line-clamp-2">
                {t('newsEvents.featuredExcerpt')}
              </p>
              <div className="mt-4 flex items-center gap-2 text-secondary-fixed text-sm font-bold">
                <span>{t('newsEvents.readFullArticle')}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </div>
          </Link>

          {/* Upcoming Event Card (4 cols, 1 row) */}
          <Link
            to="/news"
            className="md:col-span-4 md:row-span-1 bg-secondary-container rounded-3xl p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden group shadow-md"
          >
            <div className="relative z-10">
              <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">
                {t('newsEvents.upcomingEvent')}
              </span>
              <h3 className="text-on-secondary-container text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                {t('newsEvents.scienceFairTitle')}
              </h3>
              <div className="flex items-center gap-2 mt-3 text-on-secondary-container/90 text-sm font-medium">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>{t('newsEvents.scienceFairDate')}</span>
              </div>
            </div>
            <span
              className="material-symbols-outlined absolute -right-6 -bottom-6 text-primary/10 text-[140px] group-hover:rotate-12 group-hover:scale-110 transition-transform pointer-events-none"
            >
              biotech
            </span>
          </Link>

          {/* Secondary Action/Photo Card (4 cols, 1 row) */}
          <Link
            to="/news"
            className="md:col-span-4 md:row-span-1 relative rounded-3xl overflow-hidden shadow-md group min-h-[180px] md:min-h-0 block"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              alt={t('newsEvents.workshopAlt')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEez--7gEWJO61BK2iAOLDhOJWKOTRwA1kUBuQr9NqfKP8rtit_Iw24tqQnSvwSXBfCk98Z9Evx36OutJT3B6pphGzZ0fFLfTafVjs7VQ0hQ4XtCmVL0o0G6qASlvJOoX9x77yTRFouJGTH-Dw0-hAR7kP2Ixl-MAxeepfg_UHi43ArwMgZnfwpN1HtrnOTVyNq9H6hVhAk_HwqgfVhJ6_474C7rUl1nmXt_PCMWDE58CHc0oIZbdxyw"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all flex items-end p-6">
              <div>
                <span className="text-secondary-fixed text-[11px] uppercase font-bold tracking-widest block mb-1">
                  {t('newsEvents.workshopTag')}
                </span>
                <h3 className="text-white font-bold text-lg group-hover:text-secondary-fixed transition-colors">
                  {t('newsEvents.workshopTitle')}
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsBento;
