import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff', padding: '32px 0', marginTop: '40px', textAlign: 'center' }}>
      <div className="container">
        <p>© {new Date().getFullYear()} Durgapur High School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
