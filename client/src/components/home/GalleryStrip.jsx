import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import galleryData from '../../data/gallery.json';
import { useLocale } from '../../hooks/useLocale';
import { categoryLabel } from '../../i18n/categories';

const GalleryStrip = () => {
  const { t } = useTranslation(['home', 'common']);
  const { field } = useLocale();
  const photoList = galleryData.filter((item) => !item.isVideo).slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-surface-dim overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop mb-8 flex items-center justify-between">
        <div>
          <h2 className="font-headline-lg text-2xl md:text-headline-lg border-l-4 border-secondary pl-4 flex flex-col">
            <span className="text-primary font-bold">{t('galleryStrip.heading')}</span>
            <span lang="bn" className="font-bengali-body text-sm text-on-surface-variant font-normal">
              {t('galleryStrip.headingBn')}
            </span>
          </h2>
        </div>
        <Link
          to="/gallery"
          className="text-primary font-bold hover:text-secondary transition-colors text-sm flex items-center gap-1"
        >
          <span>{t('galleryStrip.viewAll')}</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>

      {/* Horizontal Scrolling Strip */}
      <div className="flex gap-5 px-4 sm:px-6 md:px-margin-desktop overflow-x-auto pb-6 scrollbar-thin no-scrollbar">
        {photoList.map((item) => (
          <Link
            key={item.id}
            to="/gallery"
            className="group relative h-64 w-80 sm:w-96 rounded-2xl overflow-hidden shrink-0 shadow-md cursor-pointer block"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={field(item, 'title')}
              src={item.url}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
              <span className="text-secondary-fixed text-xs font-bold uppercase tracking-wider mb-1">
                {categoryLabel(t, item.category)}
              </span>
              <h4 className="text-white font-bold text-base leading-snug">
                {field(item, 'title')}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GalleryStrip;
