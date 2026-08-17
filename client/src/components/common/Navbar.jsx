import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '16px 0' }}>
      <div className="container flex-between">
        <Link to="/" style={{ fontWeight: 'bold', fontSize: '20px', color: 'var(--color-primary)' }}>
          Durgapur High School
        </Link>
        <div style={{ display: 'flex', gap: '20px', fontWeight: 500 }}>
          <Link to="/">Home</Link>
          <Link to="/notices">Notices</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
