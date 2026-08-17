import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff', padding: '8px 0', fontSize: '14px' }}>
      <div className="container flex-between">
        <div>📞 +91 343 254 9876 | ✉️ info@durgapurhighschool.edu.in</div>
        <div><a href="/notices" style={{ color: 'var(--color-accent)' }}>Notices & Announcements</a></div>
      </div>
    </header>
  );
};

export default Header;
