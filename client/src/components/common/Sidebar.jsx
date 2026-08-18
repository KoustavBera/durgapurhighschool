import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SIDEBAR_ITEMS = [
  { labelKey: 'nav.home', path: '/', icon: 'home' },
  { labelKey: 'nav.academics', path: '/academics', icon: 'school' },
  { labelKey: 'nav.facultyDirectory', path: '/faculty', icon: 'groups' },
  { labelKey: 'nav.admissions', path: '/admissions', icon: 'person_add' },
  { labelKey: 'nav.noticesCirculars', path: '/notices', icon: 'description' },
  { labelKey: 'nav.newsEvents', path: '/news', icon: 'newspaper' },
];

const Sidebar = () => {
  const { t } = useTranslation('common');
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <aside
      aria-label={t('a11y.sidebarNavigation')}
      className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-36 p-4 bg-surface shadow-lg z-30 border-r border-outline-variant/30"
    >
      <div className="px-3 mb-3">
        <p className="font-label-sm text-[11px] text-ash-gray uppercase tracking-widest font-bold">
          {t('sidebar.heading')}
        </p>
      </div>

      <nav className="flex flex-col gap-1.5 flex-grow" aria-label={t('a11y.sidebarMenu')}>
        {SIDEBAR_ITEMS.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-lg text-label-md transition-all ${
                active
                  ? 'bg-primary-container text-on-primary-container font-bold translate-x-1 shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span>{t(item.labelKey)}</span>
            </Link>
          );
        })}
      </nav>

      {/* Quick Action Portal Access Card */}
      <div className="mt-auto p-4 bg-surface-container-low rounded-xl border border-outline-variant/40">
        <p className="font-label-sm text-label-sm text-ash-gray font-bold uppercase tracking-wider mb-2">
          {t('sidebar.admissionsBadge')}
        </p>
        <p className="text-on-surface-variant font-body-md text-xs mb-3">
          {t('sidebar.admissionsNote')}
        </p>
        <Link
          to="/admissions"
          className="w-full bg-primary text-on-primary py-2.5 rounded-lg font-bold text-label-md flex items-center justify-center gap-1.5 hover:bg-primary-container shadow transition-all block text-center"
        >
          <span>{t('sidebar.applyOnline')}</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
