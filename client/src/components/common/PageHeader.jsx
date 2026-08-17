import React from 'react';

const PageHeader = ({
  title,
  titleBn,
  subtitle,
  badge,
  action,
}) => {
  return (
    <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="max-w-3xl">
        {badge && (
          <span className="inline-block px-3 py-0.5 mb-2.5 text-[11px] font-bold uppercase tracking-wider rounded bg-secondary-fixed text-on-secondary-fixed">
            {badge}
          </span>
        )}
        <h1 className="font-headline-lg text-[26px] sm:text-headline-lg text-primary font-bold leading-tight border-l-4 border-secondary pl-4 mb-2">
          <span>{title}</span>
          {titleBn && (
            <span className="block font-bengali-body text-[18px] sm:text-bengali-body text-on-surface-variant font-normal mt-1" lang="bn">
              {titleBn}
            </span>
          )}
        </h1>
        {subtitle && (
          <p className="text-body-md sm:text-body-lg text-on-surface-variant leading-relaxed pl-4 mt-2">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};

export default PageHeader;
