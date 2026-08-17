import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Academics', path: '/academics', icon: 'school' },
  { label: 'Faculty Directory', path: '/faculty', icon: 'groups' },
  { label: 'Admissions', path: '/admissions', icon: 'person_add' },
  { label: 'Notices & Circulars', path: '/notices', icon: 'description' },
  { label: 'News & Events', path: '/news', icon: 'newspaper' },
];

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <aside
      aria-label="Section Navigation Sidebar"
      className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-36 p-4 bg-surface shadow-lg z-30 border-r border-outline-variant/30"
    >
      <div className="px-3 mb-3">
        <p className="font-label-sm text-[11px] text-ash-gray uppercase tracking-widest font-bold">
          Navigation
        </p>
      </div>

      <nav className="flex flex-col gap-1.5 flex-grow" aria-label="Sidebar Menu">
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
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Quick Action Portal Access Card */}
      <div className="mt-auto p-4 bg-surface-container-low rounded-xl border border-outline-variant/40">
        <p className="font-label-sm text-label-sm text-ash-gray font-bold uppercase tracking-wider mb-2">
          Admissions 2025
        </p>
        <p className="text-on-surface-variant font-body-md text-xs mb-3">
          Session 2025-26 applications now live.
        </p>
        <Link
          to="/admissions"
          className="w-full bg-primary text-on-primary py-2.5 rounded-lg font-bold text-label-md flex items-center justify-center gap-1.5 hover:bg-primary-container shadow transition-all block text-center"
        >
          <span>Apply Online</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
