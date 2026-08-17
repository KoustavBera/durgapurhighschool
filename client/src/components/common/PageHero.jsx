import React from 'react';

const PageHero = ({
  title,
  subtitle,
  bgImage,
  height = 'h-[320px] md:h-[400px]',
  align = 'left',
  tag,
  children,
}) => {
  return (
    <section
      className={`relative rounded-2xl overflow-hidden ${height} flex items-end mb-10 shadow-lg`}
      aria-label={title}
    >
      {/* Background Image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105"
          style={{ backgroundImage: `url('${bgImage}')` }}
          role="img"
          aria-label={title}
        />
      )}

      {/* Primary Atmospheric Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20" />

      {/* Content Container */}
      <div
        className={`relative z-10 p-6 sm:p-10 md:p-12 w-full text-on-primary ${
          align === 'center' ? 'text-center flex flex-col items-center justify-center' : ''
        }`}
      >
        {tag && (
          <span className="inline-block bg-secondary text-on-secondary px-3 py-1 rounded text-label-sm font-bold uppercase tracking-wider mb-3 shadow-sm">
            {tag}
          </span>
        )}
        <h1 className="font-display-lg text-[32px] sm:text-[40px] md:text-display-lg text-white font-bold leading-tight mb-3 max-w-3xl drop-shadow-sm">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`font-body-lg text-body-lg text-on-primary/90 max-w-2xl leading-relaxed ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
};

export default PageHero;
