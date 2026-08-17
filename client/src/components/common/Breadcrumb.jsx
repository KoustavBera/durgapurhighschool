import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-2 text-ash-gray font-label-md text-label-md mb-6 py-2"
    >
      <Link
        to="/"
        className="hover:text-primary transition-colors flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-primary rounded"
      >
        <span className="material-symbols-outlined text-[16px]">home</span>
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <span className="material-symbols-outlined text-[16px] text-outline-variant" aria-hidden="true">
              chevron_right
            </span>
            {isLast || !item.href ? (
              <span className="text-on-surface font-bold" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
