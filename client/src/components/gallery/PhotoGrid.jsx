import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';
import { categoryLabel } from '../../i18n/categories';

const PhotoGrid = ({ photos = [], onPhotoClick }) => {
  const { t } = useTranslation(['gallery', 'common']);
  const { field } = useLocale();

  if (photos.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-outline-variant p-12 text-center text-ash-gray mb-12 shadow-sm">
        <span className="material-symbols-outlined text-5xl text-outline mb-3 block">image_not_supported</span>
        <h4 className="font-headline-md text-lg font-bold text-primary mb-1">{t('photos.emptyTitle')}</h4>
        <p className="text-sm">{t('photos.emptyMessage')}</p>
      </div>
    );
  }

  // Segmenting photos for bento layout
  const featured = photos[0];
  const secondary = photos.slice(1, 3);
  const remaining = photos.slice(3);

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Large Feature Item (8 cols, 2 rows) */}
        {featured && (
          <div
            onClick={() => onPhotoClick && onPhotoClick(featured)}
            className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-2xl cursor-pointer min-h-[380px] md:min-h-[500px] shadow-md"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={field(featured, 'title')}
              src={featured.url}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 sm:p-8">
              <span className="text-secondary-fixed font-bold font-label-sm text-xs uppercase tracking-wider mb-2">
                {categoryLabel(t, featured.category)}
              </span>
              <h3 className="text-white font-headline-md text-xl sm:text-2xl font-bold">
                {field(featured, 'title')}
              </h3>
              {featured.caption && (
                <p className="text-white/80 text-sm mt-1 line-clamp-2 max-w-xl">
                  {field(featured, 'caption')}
                </p>
              )}
            </div>
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-xl">zoom_in</span>
            </div>
          </div>
        )}

        {/* Secondary Featured Items (4 cols each) */}
        {secondary.map((photo) => (
          <div
            key={photo.id}
            onClick={() => onPhotoClick && onPhotoClick(photo)}
            className="md:col-span-4 group relative overflow-hidden rounded-2xl cursor-pointer min-h-[220px] md:h-[238px] shadow-md"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt={field(photo, 'title')}
              src={photo.url}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
              <span className="text-secondary-fixed text-[11px] uppercase font-bold tracking-wider">
                {categoryLabel(t, photo.category)}
              </span>
              <h4 className="text-white font-bold text-sm leading-snug">{field(photo, 'title')}</h4>
            </div>
            <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
            </div>
          </div>
        ))}

        {/* Regular Grid Items (3 cols each) */}
        {remaining.map((photo) => (
          <div
            key={photo.id}
            onClick={() => onPhotoClick && onPhotoClick(photo)}
            className="col-span-1 sm:col-span-6 md:col-span-3 group relative overflow-hidden rounded-2xl cursor-pointer h-[260px] shadow-md"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt={field(photo, 'title')}
              src={photo.url}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <span className="text-secondary-fixed text-[10px] uppercase font-bold tracking-wider mb-0.5">
                {categoryLabel(t, photo.category)}
              </span>
              <h4 className="text-white font-bold text-xs sm:text-sm line-clamp-2">{field(photo, 'title')}</h4>
            </div>
            <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-sm">zoom_in</span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => alert(t('photos.loadMoreAlert'))}
          className="group flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm text-sm active:scale-95"
        >
          <span>{t('photos.loadMore')}</span>
          <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform text-[18px]">
            keyboard_double_arrow_down
          </span>
        </button>
      </div>
    </section>
  );
};

export default PhotoGrid;
