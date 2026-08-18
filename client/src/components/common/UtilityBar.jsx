import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const UtilityBar = () => {
  const { t, i18n } = useTranslation('common');
  const language = i18n.resolvedLanguage || i18n.language || 'en';

  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('dhs-font-size') || 'normal';
  });
  const [isHighContrast, setIsHighContrast] = useState(() => {
    return localStorage.getItem('dhs-high-contrast') === 'true';
  });

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

  // i18next's language detector persists the choice to localStorage, so the
  // selection survives reloads without any extra bookkeeping here.
  const toggleLanguage = () => {
    i18n.changeLanguage(language === 'bn' ? 'en' : 'bn');
  };

  return (
    <aside
      aria-label={t('a11y.utilityBar')}
      className="bg-surface-container-highest w-full px-4 md:px-margin-desktop py-2 justify-between items-center z-50 text-on-surface-variant font-label-sm text-label-sm border-b border-outline-variant hidden md:flex"
    >
      {/* Left side actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="hover:text-primary transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
          title={t('utilityBar.languageToggleTitle')}
          aria-label={t('utilityBar.languageToggleAria')}
          lang={language === 'bn' ? 'bn' : 'en'}
        >
          <span className="material-symbols-outlined text-[16px]">language</span>
          <span>
            {language === 'bn'
              ? t('utilityBar.languageBengaliFirst')
              : t('utilityBar.languageEnglishFirst')}
          </span>
        </button>
        <span className="text-outline-variant" aria-hidden="true">|</span>
        <a
          href="#main-content"
          className="hover:text-primary transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
          title={t('utilityBar.screenReaderTitle')}
        >
          <span className="material-symbols-outlined text-[16px]">blind</span>
          <span>{t('utilityBar.screenReaderAccess')}</span>
        </a>
      </div>

      {/* Right side accessibility tools */}
      <div className="flex items-center gap-4">
        <div
          className="flex items-center gap-1 border-r border-outline-variant pr-4"
          role="group"
          aria-label={t('utilityBar.textSizeGroup')}
        >
          <button
            onClick={handleDecreaseFont}
            className={`px-2 py-0.5 rounded transition-colors ${
              fontSize === 'small' ? 'bg-primary text-on-primary font-bold' : 'hover:bg-outline-variant'
            }`}
            title={t('utilityBar.decreaseFontTitle')}
            aria-label={t('utilityBar.decreaseFont')}
          >
            A-
          </button>
          <button
            onClick={handleResetFont}
            className={`px-2 py-0.5 rounded transition-colors ${
              fontSize === 'normal' ? 'bg-primary text-on-primary font-bold' : 'hover:bg-outline-variant'
            }`}
            title={t('utilityBar.resetFontTitle')}
            aria-label={t('utilityBar.resetFont')}
          >
            A
          </button>
          <button
            onClick={handleIncreaseFont}
            className={`px-2 py-0.5 rounded transition-colors ${
              fontSize === 'large' || fontSize === 'xlarge' ? 'bg-primary text-on-primary font-bold' : 'hover:bg-outline-variant'
            }`}
            title={t('utilityBar.increaseFontTitle')}
            aria-label={t('utilityBar.increaseFont')}
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
            title={isHighContrast ? t('utilityBar.contrastDisable') : t('utilityBar.contrastEnable')}
            aria-label={t('utilityBar.contrastToggle')}
          >
            <span className="material-symbols-outlined text-[18px]">contrast</span>
          </button>
          <a
            href="/notices"
            className="hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container"
            title={t('utilityBar.searchNotices')}
            aria-label={t('utilityBar.searchNotices')}
          >
            <span className="material-symbols-outlined text-[18px]">search</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default UtilityBar;
