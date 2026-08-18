import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../hooks/useLocale';

const QUICK_LINKS = [
  { to: '/admissions', key: 'footer.onlineAdmission' },
  { to: '/notices', key: 'footer.circularsNoticeBoard' },
  { to: '/faculty', key: 'footer.staffFacultyDirectory' },
  { to: '/academics', key: 'footer.curriculumExamination' },
  { to: '/gallery', key: 'footer.campusMediaGallery' },
  { to: '/news', key: 'footer.latestNewsAchievements' },
];

const GOVERNMENT_PORTALS = [
  { href: 'https://india.gov.in', key: 'footer.nationalPortal' },
  { href: 'https://banglarshiksha.gov.in', key: 'footer.banglarShiksha' },
  { href: 'https://wb.gov.in', key: 'footer.wbPortal' },
  { href: 'https://wbkanyashree.gov.in', key: 'footer.kanyashree' },
  { href: 'https://wbmdfc.org', key: 'footer.aikyashree' },
];

const Footer = () => {
  const { t } = useTranslation('common');
  const { num } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-on-primary border-t-4 border-secondary-fixed mt-16">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        
        {/* Column 1: School Identity */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center border border-secondary-fixed/50">
              <span className="material-symbols-outlined text-secondary-fixed text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                account_balance
              </span>
            </div>
            <div>
              <h2 className="font-bold text-headline-md leading-none text-white">{t('school.footerName')}</h2>
              <p className="text-[10px] text-secondary-fixed uppercase tracking-widest font-bold mt-0.5">
                {t('school.government')}
              </p>
            </div>
          </div>
          <p className="font-body-md text-on-primary/75 mb-6 text-[15px] leading-relaxed">
            {t('school.description')}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="mailto:info@durgapurhighschool.edu.in"
              className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary-container text-secondary-fixed hover:text-on-secondary transition-colors"
              title={t('footer.officialEmail')}
              aria-label={t('footer.emailAria')}
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
            <a
              href="tel:+913432546789"
              className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary-container text-secondary-fixed hover:text-on-secondary transition-colors"
              title={t('footer.helpline')}
              aria-label={t('footer.callAria')}
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
            <a
              href="#qr-code"
              className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary-container text-secondary-fixed hover:text-on-secondary transition-colors"
              title={t('footer.portalQr')}
              aria-label={t('footer.qrAria')}
            >
              <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-5 text-secondary-fixed font-headline-md tracking-wide">
            {t('footer.quickLinks')}
          </h4>
          <ul className="flex flex-col gap-2.5 text-on-primary/80 font-label-md">
            {QUICK_LINKS.map((item) => (
              <li key={item.to + item.key}>
                <Link to={item.to} className="hover:text-white hover:underline decoration-secondary-fixed transition-colors">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Government Portals */}
        <div>
          <h4 className="font-bold text-lg mb-5 text-secondary-fixed font-headline-md tracking-wide">
            {t('footer.governmentPortals')}
          </h4>
          <ul className="flex flex-col gap-2.5 text-on-primary/80 font-label-md">
            {GOVERNMENT_PORTALS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline decoration-secondary-fixed transition-colors inline-flex items-center gap-1"
                >
                  <span>{t(item.key)}</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div id="contact">
          <h4 className="font-bold text-lg mb-5 text-secondary-fixed font-headline-md tracking-wide">
            {t('footer.contactUs')}
          </h4>
          <address className="not-italic text-on-primary/80 font-label-md space-y-3">
            <p className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed shrink-0 mt-0.5">
                location_on
              </span>
              <span>
                {t('school.addressLine1')}<br />
                {t('school.addressLine2')}<br />
                {t('school.addressLine3')}
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed shrink-0">
                call
              </span>
              <a href="tel:+913432546789" className="hover:text-white hover:underline">
                {t('school.phone')}
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed shrink-0">
                mail
              </span>
              <a href="mailto:info@durgapurhighschool.edu.in" className="hover:text-white hover:underline">
                {t('school.email')}
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom Compliance & Copyright Bar */}
      <div className="border-t border-white/10 py-5 px-4 sm:px-6 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-label-sm font-label-sm text-on-primary/60">
            {t('footer.copyright', { year: num(currentYear) })}
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-label-sm font-label-sm text-on-primary/60">
            <Link to="/notices" className="hover:text-white hover:underline">
              {t('footer.rtiDisclosure')}
            </Link>
            <span className="text-white/20">•</span>
            <a href="#privacy" className="hover:text-white hover:underline">
              {t('footer.privacyPolicy')}
            </a>
            <span className="text-white/20">•</span>
            <a href="#accessibility" className="hover:text-white hover:underline">
              {t('footer.accessibilityStatement')}
            </a>
            <span className="text-white/20">•</span>
            <span className="text-secondary-fixed/90 font-medium">
              {t('footer.lastUpdated', { date: t('footer.lastUpdatedValue') })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
