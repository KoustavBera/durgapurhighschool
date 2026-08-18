import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NAV_ITEMS = [
  { labelKey: 'nav.home', path: '/', icon: 'home' },
  { labelKey: 'nav.about', path: '/about', icon: 'school' },
  { labelKey: 'nav.academics', path: '/academics', icon: 'menu_book' },
  { labelKey: 'nav.admissions', path: '/admissions', icon: 'person_add' },
  { labelKey: 'nav.noticeBoard', path: '/notices', icon: 'campaign' },
  { labelKey: 'nav.newsEvents', path: '/news', icon: 'newspaper' },
  { labelKey: 'nav.gallery', path: '/gallery', icon: 'photo_library' },
  { labelKey: 'nav.facultyDirectory', path: '/faculty', icon: 'groups' },
];

const MobileMenu = ({ isOpen, onClose }) => {
  const { t } = useTranslation('common');
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="h-full w-72 max-w-[85vw] bg-surface flex flex-col p-5 shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with emblem & close button */}
        <div className="flex items-center justify-between border-b border-surface-container-highest pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 bg-primary-container rounded-full flex items-center justify-center p-1 border border-secondary-fixed shadow-sm">
              <span className="material-symbols-outlined text-secondary-fixed text-2xl">account_balance</span>
            </div>
            <div>
              <div className="font-headline-md text-[18px] font-bold text-primary leading-tight">{t('school.shortName')}</div>
              <div className="font-label-sm text-[12px] text-on-surface-variant">{t('school.governmentShort')}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors"
            aria-label={t('a11y.closeMenu')}
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1.5 flex-grow" aria-label={t('a11y.mobileNavigation')}>
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-lg text-label-md font-medium transition-all ${
                  active
                    ? 'bg-primary-container text-on-primary-container font-bold shadow-sm translate-x-1'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                <span>{t(item.labelKey)}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA & Emergency Contact */}
        <div className="mt-6 pt-4 border-t border-outline-variant/30 space-y-3">
          <Link
            to="/admissions"
            onClick={onClose}
            className="w-full py-3 bg-primary hover:bg-primary-container text-on-primary rounded-lg font-bold font-label-md flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 text-center"
          >
            <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
            <span>{t('mobileMenu.onlineAdmission')}</span>
          </Link>
          <div className="text-center font-label-sm text-ash-gray text-[11px]">
            {t('mobileMenu.copyright')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
