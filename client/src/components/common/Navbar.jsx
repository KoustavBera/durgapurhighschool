import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MobileMenu from './MobileMenu';

// Top-level destinations, in display order. Student Corner is rendered
// separately because it opens a dropdown rather than linking anywhere.
const PRIMARY_LINKS = [
  { path: '/about', labelKey: 'nav.about' },
  { path: '/academics', labelKey: 'nav.academics' },
  { path: '/admissions', labelKey: 'nav.admissions' },
];

const TRAILING_LINKS = [
  { path: '/faculty', labelKey: 'nav.faculty' },
  { path: '/gallery', labelKey: 'nav.gallery' },
];

const linkClass = (active) =>
  `font-label-md text-label-md transition-all ${
    active
      ? 'text-on-primary border-b-2 border-secondary-fixed pb-1 font-bold'
      : 'text-on-primary/90 hover:text-white hover:border-b-2 hover:border-secondary-fixed/50 pb-1'
  }`;

const Navbar = () => {
  const { t } = useTranslation('common');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isNavActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isStudentCornerActive =
    location.pathname.startsWith('/notices') || location.pathname.startsWith('/news');

  return (
    <>
      <header className="fixed top-0 md:top-[37px] left-0 w-full z-40 flex flex-col items-center bg-primary text-on-primary shadow-md border-b-4 border-secondary transition-all">
        <div className="w-full max-w-container-max flex items-center justify-between px-4 sm:px-6 py-2.5 md:py-3">
          
          {/* Logo + Dual-Language Header */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-secondary-fixed rounded p-1"
            aria-label={t('a11y.schoolHome')}
          >
            <div className="h-14 w-14 sm:h-16 sm:w-16 bg-white p-1 rounded-full border-2 border-secondary-fixed shrink-0 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                account_balance
              </span>
            </div>
            {/* The masthead always carries both scripts, as government portals require. */}
            <div className="flex flex-col">
              <span className="font-headline-md text-[18px] sm:text-headline-md font-bold leading-tight tracking-tight text-white group-hover:text-secondary-fixed transition-colors" lang="en">
                {t('school.nameEn')}
              </span>
              <span className="font-bengali-body text-[14px] sm:text-bengali-body leading-none text-secondary-fixed font-normal mt-0.5" lang="bn">
                {t('school.nameBn')}
              </span>
              <span className="font-label-sm text-[10px] sm:text-label-sm text-on-primary/80 uppercase tracking-widest mt-1 font-medium">
                {t('school.masthead')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label={t('a11y.mainNavigation')}>
            {PRIMARY_LINKS.map((item) => (
              <Link key={item.path} to={item.path} className={linkClass(isNavActive(item.path))}>
                {t(item.labelKey)}
              </Link>
            ))}

            {/* Student Corner Dropdown / Nav */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`font-label-md text-label-md flex items-center gap-1 transition-all ${
                  isStudentCornerActive
                    ? 'text-on-primary border-b-2 border-secondary-fixed pb-1 font-bold'
                    : 'text-on-primary/90 hover:text-white pb-1'
                }`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span>{t('nav.studentCorner')}</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-primary-container text-on-primary py-2 rounded-lg shadow-xl border border-secondary/30 flex flex-col z-50 animate-fadeIn">
                  <Link
                    to="/notices"
                    className="px-4 py-2 hover:bg-primary text-label-md flex items-center gap-2 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">campaign</span>
                    <span>{t('nav.noticeBoard')}</span>
                  </Link>
                  <Link
                    to="/news"
                    className="px-4 py-2 hover:bg-primary text-label-md flex items-center gap-2 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">newspaper</span>
                    <span>{t('nav.newsEvents')}</span>
                  </Link>
                </div>
              )}
            </div>

            {TRAILING_LINKS.map((item) => (
              <Link key={item.path} to={item.path} className={linkClass(isNavActive(item.path))}>
                {t(item.labelKey)}
              </Link>
            ))}

            <a
              href="#contact"
              className="font-label-md text-label-md text-on-primary/90 hover:text-white transition-colors pb-1"
            >
              {t('nav.contact')}
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-on-primary hover:bg-primary-container rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-fixed"
              aria-label={t('a11y.openMobileMenu')}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Mobile Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
