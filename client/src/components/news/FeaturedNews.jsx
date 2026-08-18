import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FeaturedNews = () => {
  const { t } = useTranslation('news');

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Featured Hero Card (8 cols) */}
        <div className="lg:col-span-8 group relative overflow-hidden rounded-3xl shadow-lg min-h-[440px] md:h-[500px] flex flex-col justify-end">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCS_QJXjckeGY0Yew6ot92YW2nfjMJkq7D9WJm14el5puxlFnVEKCpXMVup0JY1eqrTyIc2gop3PTibE870qjblEDl01TwFuN5NryuRoo3s9RnTq-NZaJLbJsflFNgL7Q9Z1wc8nKU57i339Q109Ym275xR01UpA909ic77AWVkbIyPzbKC6mYyDoUL3TOLIf_cGJUtCZSGkAab5UHJtvMKYz_8Vfm1jXNBf8m2Rxy9t17FdOzKM4zh0g')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 w-full">
            <span className="inline-block px-3.5 py-1 bg-secondary text-on-secondary font-label-md text-xs font-bold rounded-full mb-3 shadow-sm uppercase tracking-wider">
              {t('featured.badge')}
            </span>
            <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold text-white mb-3 max-w-2xl leading-tight">
              {t('featured.title')}
            </h3>
            <p className="font-body-lg text-sm sm:text-base text-white/85 max-w-xl mb-6 line-clamp-2 leading-relaxed">
              {t('featured.excerpt')}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => alert(t('featured.readAlert'))}
                className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-secondary hover:text-white transition-all shadow-md active:scale-95"
              >
                <span>{t('featured.readFullStory')}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => alert(t('featured.shareAlert'))}
                  className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white backdrop-blur-md transition-colors"
                  title={t('featured.shareTitle')}
                >
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </button>
                <button
                  onClick={() => alert(t('featured.bookmarkAlert'))}
                  className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white backdrop-blur-md transition-colors"
                  title={t('featured.bookmarkTitle')}
                >
                  <span className="material-symbols-outlined text-[20px]">bookmark</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trending & Deadline Side Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Trending Update 1 */}
          <div className="flex-1 bg-surface-container rounded-3xl p-6 sm:p-7 border border-outline-variant hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="text-ash-gray font-label-sm text-xs font-semibold uppercase tracking-wider mb-2 block">
                {t('featured.trending.meta')}
              </span>
              <h4 className="font-headline-md text-lg font-bold text-primary mb-2 leading-snug">
                {t('featured.trending.title')}
              </h4>
              <p className="text-on-surface-variant font-body-md text-xs sm:text-sm line-clamp-2 leading-relaxed">
                {t('featured.trending.excerpt')}
              </p>
            </div>
            <a
              href="#view"
              onClick={(e) => {
                e.preventDefault();
                alert(t('featured.trending.alert'));
              }}
              className="mt-4 inline-flex items-center text-secondary font-bold hover:underline text-xs"
            >
              <span>{t('featured.trending.cta')}</span>
              <span className="material-symbols-outlined text-[16px] ml-1">open_in_new</span>
            </a>
          </div>

          {/* Deadline Alert 2 */}
          <div className="flex-1 bg-primary text-on-primary rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-lg flex flex-col justify-between">
            <div className="relative z-10">
              <span className="text-secondary-fixed font-label-sm text-xs uppercase font-bold tracking-wider mb-2 block">
                {t('featured.deadline.tag')}
              </span>
              <h4 className="font-headline-md text-lg font-bold text-white mb-2 leading-snug">
                {t('featured.deadline.title')}
              </h4>
              <p className="text-white/80 font-body-md text-xs sm:text-sm mb-4 leading-relaxed">
                {t('featured.deadline.desc')}
              </p>
              <Link
                to="/admissions"
                className="bg-secondary text-white px-5 py-2 rounded-xl font-bold text-xs inline-flex items-center gap-1 hover:bg-secondary-container hover:text-on-secondary-container transition-all active:scale-95 shadow-sm"
              >
                <span>{t('featured.deadline.cta')}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
            <span
              className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/5 text-[150px] pointer-events-none rotate-12"
            >
              campaign
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
