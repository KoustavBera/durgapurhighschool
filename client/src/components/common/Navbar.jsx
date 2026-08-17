import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar = () => {
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
            aria-label="Durgapur High School Home"
          >
            <div className="h-14 w-14 sm:h-16 sm:w-16 bg-white p-1 rounded-full border-2 border-secondary-fixed shrink-0 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                account_balance
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-[18px] sm:text-headline-md font-bold leading-tight tracking-tight text-white group-hover:text-secondary-fixed transition-colors">
                Durgapur High School
              </span>
              <span className="font-bengali-body text-[14px] sm:text-bengali-body leading-none text-secondary-fixed font-normal mt-0.5" lang="bn">
                দুর্গাপুর উচ্চ বিদ্যালয়
              </span>
              <span className="font-label-sm text-[10px] sm:text-label-sm text-on-primary/80 uppercase tracking-widest mt-1 font-medium">
                Govt. of West Bengal • Estd. 1952
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main Navigation">
            <Link
              to="/about"
              className={`font-label-md text-label-md transition-all ${
                isNavActive('/about')
                  ? 'text-on-primary border-b-2 border-secondary-fixed pb-1 font-bold'
                  : 'text-on-primary/90 hover:text-white hover:border-b-2 hover:border-secondary-fixed/50 pb-1'
              }`}
            >
              About
            </Link>

            <Link
              to="/academics"
              className={`font-label-md text-label-md transition-all ${
                isNavActive('/academics')
                  ? 'text-on-primary border-b-2 border-secondary-fixed pb-1 font-bold'
                  : 'text-on-primary/90 hover:text-white hover:border-b-2 hover:border-secondary-fixed/50 pb-1'
              }`}
            >
              Academics
            </Link>

            <Link
              to="/admissions"
              className={`font-label-md text-label-md transition-all ${
                isNavActive('/admissions')
                  ? 'text-on-primary border-b-2 border-secondary-fixed pb-1 font-bold'
                  : 'text-on-primary/90 hover:text-white hover:border-b-2 hover:border-secondary-fixed/50 pb-1'
              }`}
            >
              Admissions
            </Link>

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
                <span>Student Corner</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-primary-container text-on-primary py-2 rounded-lg shadow-xl border border-secondary/30 flex flex-col z-50 animate-fadeIn">
                  <Link
                    to="/notices"
                    className="px-4 py-2 hover:bg-primary text-label-md flex items-center gap-2 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">campaign</span>
                    <span>Notice Board</span>
                  </Link>
                  <Link
                    to="/news"
                    className="px-4 py-2 hover:bg-primary text-label-md flex items-center gap-2 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">newspaper</span>
                    <span>News & Events</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/faculty"
              className={`font-label-md text-label-md transition-all ${
                isNavActive('/faculty')
                  ? 'text-on-primary border-b-2 border-secondary-fixed pb-1 font-bold'
                  : 'text-on-primary/90 hover:text-white hover:border-b-2 hover:border-secondary-fixed/50 pb-1'
              }`}
            >
              Faculty
            </Link>

            <Link
              to="/gallery"
              className={`font-label-md text-label-md transition-all ${
                isNavActive('/gallery')
                  ? 'text-on-primary border-b-2 border-secondary-fixed pb-1 font-bold'
                  : 'text-on-primary/90 hover:text-white hover:border-b-2 hover:border-secondary-fixed/50 pb-1'
              }`}
            >
              Gallery
            </Link>

            <a
              href="#contact"
              className="font-label-md text-label-md text-on-primary/90 hover:text-white transition-colors pb-1"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-on-primary hover:bg-primary-container rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-fixed"
              aria-label="Open mobile menu"
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
