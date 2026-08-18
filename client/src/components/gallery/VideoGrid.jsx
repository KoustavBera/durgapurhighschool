import React from 'react';
import { useTranslation } from 'react-i18next';
import galleryData from '../../data/gallery.json';
import { useLocale } from '../../hooks/useLocale';
import { categoryLabel } from '../../i18n/categories';

const VideoGrid = ({ onVideoSelect }) => {
  const { t } = useTranslation(['gallery', 'common']);
  const { field, num } = useLocale();
  const videos = galleryData.filter((item) => item.isVideo) || [];

  return (
    <section className="bg-primary text-on-primary py-16 sm:py-20 px-6 sm:px-10 rounded-3xl mb-16 relative overflow-hidden shadow-xl">
      {/* Decorative Atmosphere Glows */}
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-primary-container/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-secondary-fixed text-xs uppercase font-bold tracking-widest block mb-1">
              {t('videos.tag')}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-white mb-2">
              {t('videos.heading')}
            </h2>
            <p className="text-white/70 text-sm max-w-xl leading-relaxed">
              {t('videos.intro')}
            </p>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary-fixed hover:text-white font-label-md text-sm font-bold transition-colors w-fit"
          >
            <span>{t('videos.youtubeLink')}</span>
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => onVideoSelect && onVideoSelect(vid)}
              className="group relative rounded-2xl overflow-hidden bg-primary-container/60 border border-white/15 cursor-pointer shadow-md flex flex-col justify-between"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={field(vid, 'title')}
                  src={vid.thumb || vid.url}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <span className="material-symbols-outlined text-3xl">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-mono text-white">
                  {num(vid.duration || '04:15')}
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] text-secondary-fixed font-bold uppercase tracking-wider block mb-1">
                  {categoryLabel(t, vid.category)}
                </span>
                <h4 className="text-white font-bold text-sm sm:text-base line-clamp-2 group-hover:text-secondary-fixed transition-colors">
                  {field(vid, 'title')}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;
