import React, { useState, useEffect } from 'react';

const UtilityBar = () => {
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('dhs-font-size') || 'normal';
  });
  const [isHighContrast, setIsHighContrast] = useState(() => {
    return localStorage.getItem('dhs-high-contrast') === 'true';
  });
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
    localStorage.setItem('dhs-font-size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('dhs-high-contrast', isHighContrast.toString());
  }, [isHighContrast]);

  const handleDecreaseFont = () => {
    if (fontSize === 'xlarge') setFontSize('large');
    else if (fontSize === 'large') setFontSize('normal');
    else if (fontSize === 'normal') setFontSize('small');
  };

  const handleResetFont = () => {
    setFontSize('normal');
  };

  const handleIncreaseFont = () => {
    if (fontSize === 'small') setFontSize('normal');
    else if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
  };

  const toggleContrast = () => {
    setIsHighContrast((prev) => !prev);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  return (
    <aside
      aria-label="Accessibility and Utility Bar"
      className="bg-surface-container-highest w-full px-4 md:px-margin-desktop py-2 justify-between items-center z-50 text-on-surface-variant font-label-sm text-label-sm border-b border-outline-variant hidden md:flex"
    >
      {/* Left side actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="hover:text-primary transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
          title="Toggle Language (English / বাংলা)"
          aria-label="Toggle language between English and Bengali"
        >
          <span className="material-symbols-outlined text-[16px]">language</span>
          <span>{language === 'en' ? 'English / বাংলা' : 'বাংলা / English'}</span>
        </button>
        <span className="text-outline-variant" aria-hidden="true">|</span>
        <a
          href="#main-content"
          className="hover:text-primary transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
          title="Skip directly to screen reader accessible content"
        >
          <span className="material-symbols-outlined text-[16px]">blind</span>
          <span>Screen Reader Access</span>
        </a>
      </div>

      {/* Right side accessibility tools */}
      <div className="flex items-center gap-4">
        <div
          className="flex items-center gap-1 border-r border-outline-variant pr-4"
          role="group"
          aria-label="Text size adjustments"
        >
          <button
            onClick={handleDecreaseFont}
            className={`px-2 py-0.5 rounded transition-colors ${
              fontSize === 'small' ? 'bg-primary text-on-primary font-bold' : 'hover:bg-outline-variant'
            }`}
            title="Decrease Font Size (A-)"
            aria-label="Decrease Font Size"
          >
            A-
          </button>
          <button
            onClick={handleResetFont}
            className={`px-2 py-0.5 rounded transition-colors ${
              fontSize === 'normal' ? 'bg-primary text-on-primary font-bold' : 'hover:bg-outline-variant'
            }`}
            title="Standard Font Size (A)"
            aria-label="Reset Font Size to Default"
          >
            A
          </button>
          <button
            onClick={handleIncreaseFont}
            className={`px-2 py-0.5 rounded transition-colors ${
              fontSize === 'large' || fontSize === 'xlarge' ? 'bg-primary text-on-primary font-bold' : 'hover:bg-outline-variant'
            }`}
            title="Increase Font Size (A+)"
            aria-label="Increase Font Size"
          >
            A+
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleContrast}
            className={`p-1 rounded-full transition-colors ${
              isHighContrast
                ? 'bg-secondary text-on-secondary ring-2 ring-secondary-fixed'
                : 'hover:text-primary hover:bg-surface-container'
            }`}
            title={isHighContrast ? 'Disable High Contrast Mode' : 'Enable High Contrast Mode'}
            aria-label="Toggle High Contrast View"
          >
            <span className="material-symbols-outlined text-[18px]">contrast</span>
          </button>
          <a
            href="/notices"
            className="hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container"
            title="Search Notices & Portal"
            aria-label="Search Notices & Portal"
          >
            <span className="material-symbols-outlined text-[18px]">search</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default UtilityBar;
