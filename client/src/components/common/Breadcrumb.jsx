import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * `items` entries carry either a ready-to-render `label` or a `labelKey`
 * resolved against the `common` namespace, so pages can hand over translation
 * keys instead of pre-translating their own trail.
 */
const Breadcrumb = ({ items = [] }) => {
  const { t } = useTranslation('common');

  return (
    <nav
      aria-label={t('a11y.breadcrumb')}
      className="flex items-center flex-wrap gap-2 text-ash-gray font-label-md text-label-md mb-6 py-2"
    >
      <Link
        to="/"
        className="hover:text-primary transition-colors flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-primary rounded"
      >
        <span className="material-symbols-outlined text-[16px]">home</span>
        <span>{t('nav.home')}</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const label = item.labelKey ? t(item.labelKey) : item.label;

        return (
          <React.Fragment key={index}>
            <span className="material-symbols-outlined text-[16px] text-outline-variant" aria-hidden="true">
              chevron_right
            </span>
            {isLast || !item.href ? (
              <span className="text-on-surface font-bold" aria-current="page">
                {label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
              >
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
