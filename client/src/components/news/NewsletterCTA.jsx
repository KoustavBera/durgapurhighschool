import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NewsletterCTA = () => {
  const { t } = useTranslation('news');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="bg-primary-container rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden text-white shadow-xl mb-12 border border-white/10">
      {/* Background Decorative Blur Radii */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl text-center lg:text-left">
        <span className="text-secondary-fixed text-xs font-bold uppercase tracking-widest block mb-2">
          {t('newsletter.tag')}
        </span>
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold mb-3 leading-tight">
          {t('newsletter.heading')}
        </h2>
        <p className="text-white/80 font-body-lg text-sm sm:text-base mb-6 leading-relaxed">
          {t('newsletter.intro')}
        </p>

        {subscribed ? (
          <div className="bg-white/10 border border-white/20 p-4 rounded-xl flex items-center gap-3 text-secondary-fixed text-sm font-bold w-fit mx-auto lg:mx-0">
            <span className="material-symbols-outlined text-2xl">check_circle</span>
            <span>{t('newsletter.success')}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.emailPlaceholder')}
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/25 text-white placeholder:text-white/40 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-sm transition-all"
            />
            <button
              type="submit"
              className="bg-secondary text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all active:scale-95 shadow-md flex-shrink-0"
            >
              {t('newsletter.subscribe')}
            </button>
          </form>
        )}
      </div>

      {/* Official Media Handles */}
      <div className="flex flex-col items-center gap-3 relative z-10">
        <p className="text-white/80 font-label-md text-xs sm:text-sm font-semibold uppercase tracking-wider">
          {t('newsletter.handlesHeading')}
        </p>
        <div className="flex gap-3">
          <a
            href="#qr"
            onClick={(e) => {
              e.preventDefault();
              alert(t('newsletter.qrAlert'));
            }}
            className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-secondary transition-all hover:scale-105 border border-white/15"
            title={t('newsletter.qrTitle')}
          >
            <span className="material-symbols-outlined text-2xl">qr_code_2</span>
          </a>
          <a
            href="https://wbsed.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-secondary transition-all hover:scale-105 border border-white/15"
            title={t('newsletter.statePortalTitle')}
          >
            <span className="material-symbols-outlined text-2xl">public</span>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-secondary transition-all hover:scale-105 border border-white/15"
            title={t('newsletter.mediaChannelTitle')}
          >
            <span className="material-symbols-outlined text-2xl">video_library</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
