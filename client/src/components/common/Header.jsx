import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation('common');

  return (
    <header style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff', padding: '8px 0', fontSize: '14px' }}>
      <div className="container flex-between">
        <div>📞 {t('school.phone')} | ✉️ {t('school.email')}</div>
        <div><a href="/notices" style={{ color: 'var(--color-accent)' }}>{t('topBar.noticesLink')}</a></div>
      </div>
    </header>
  );
};

export default Header;
