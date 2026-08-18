import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import noticesData from '../../data/notices.json';
import StatsGrid from '../common/StatsGrid';
import { useLocale } from '../../hooks/useLocale';
import { categoryLabel } from '../../i18n/categories';

const NoticeBoardHome = () => {
  const { t } = useTranslation(['home', 'common']);
  const { field, date } = useLocale();
  const recentNotices = noticesData.slice(0, 5);

  return (
    <section className="py-16 md:py-20 bg-surface-dim px-4 sm:px-6 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Notice Board Column */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline-lg text-2xl md:text-headline-lg border-l-4 border-secondary pl-4 flex flex-col">
              <span className="text-primary font-bold">{t('noticeBoard.heading')}</span>
              <span lang="bn" className="font-bengali-body text-sm text-on-surface-variant font-normal">
                {t('noticeBoard.headingBn')}
              </span>
            </h2>
            <Link
              to="/notices"
              className="text-primary font-bold hover:text-secondary transition-colors text-sm flex items-center gap-1"
            >
              <span>{t('noticeBoard.viewAll')}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm h-[480px] flex flex-col">
            <div className="overflow-y-auto p-4 flex flex-col gap-3 flex-grow divide-y divide-outline-variant/30">
              {recentNotices.map((notice) => (
                <Link
                  key={notice.id}
                  to="/notices"
                  className="p-3.5 bg-surface rounded-lg border border-outline-variant/40 hover:bg-surface-container-low hover:border-primary/40 transition-all group block"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-label-sm text-xs font-bold text-secondary">{date(notice.date)}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant font-medium">
                      {categoryLabel(t, notice.category)}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                    {field(notice, 'title')}
                  </h4>
                  {notice.isPinned && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-error-container text-on-error-container text-[10px] font-bold rounded uppercase">
                      {t('noticeBoard.newBadge')}
                    </span>
                  )}
                </Link>
              ))}
            </div>
            <div className="p-3 bg-surface-container-low border-t border-outline-variant text-center">
              <Link
                to="/notices"
                className="text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider inline-flex items-center gap-1"
              >
                <span>{t('noticeBoard.browseAll')}</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats & Campus Highlights Column */}
        <div className="flex-grow">
          <div className="mb-8">
            <h2 className="font-headline-lg text-2xl md:text-headline-lg border-l-4 border-secondary pl-4 flex flex-col mb-4">
              <span className="text-primary font-bold">{t('noticeBoard.statsHeading')}</span>
              <span lang="bn" className="font-bengali-body text-sm text-on-surface-variant font-normal">
                {t('noticeBoard.statsHeadingBn')}
              </span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {t('noticeBoard.statsIntro')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mb-10">
            <StatsGrid />
          </div>

          {/* Feature Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer shadow-md">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={t('noticeBoard.digital.alt')}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhLX9OO8zOpVd1CxiETIPbyXjM8-_Xe-OOBsy36xDzOV0rVHbGaQl3yFT7AACmcMJOCP0BuFsoMU85v8_pp-cts31FUWZS-9OSNE3R8YuzxE4VBBersHFfHsf6laQq72C87jQprekjUSIv4LaMRvFTFquao1WKBAG8HeJ14r_OFS08r-FNt_9kFr67rGu80q6wFVa7JIF4RhiIX7XOhqbUiD0JhPcwZHV7HBVVUE7fw_DHvCHjp4F5gg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6">
                <span className="text-secondary-fixed text-xs uppercase font-bold tracking-widest mb-1">{t('noticeBoard.digital.tag')}</span>
                <h3 className="text-white font-headline-md text-xl font-bold">{t('noticeBoard.digital.title')}</h3>
                <p className="text-white/80 font-label-md text-sm mt-1">{t('noticeBoard.digital.desc')}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer shadow-md">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={t('noticeBoard.library.alt')}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArkf9JVtDSDcxqApML1uNow0wKO2RrfK4wEqv_wkwtKV9BF1obl9zwB-nZiq7Gp6zFPwzlYc1FWK8rKjiZ8G-ehqIdIrafBb2F2tuSYRBsidLti9D3MVHFHQWNKEt2d26VWOn537l-OAK_6adTwc877a4ElXFPqrTtm0wL1LWyZadoHvJKEYC3lkAepw4pcTM4phg-gM1-lQdWtDKHkb-n5QhOc9zRCkMH74LpzvAknBYtokHQ8-qh7w"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6">
                <span className="text-secondary-fixed text-xs uppercase font-bold tracking-widest mb-1">{t('noticeBoard.library.tag')}</span>
                <h3 className="text-white font-headline-md text-xl font-bold">{t('noticeBoard.library.title')}</h3>
                <p className="text-white/80 font-label-md text-sm mt-1">{t('noticeBoard.library.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoardHome;
