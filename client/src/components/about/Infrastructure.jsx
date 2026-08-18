import React from 'react';
import { useTranslation } from 'react-i18next';

const FACILITIES = [
  {
    key: 'labs',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5ecUzjTYeQPbwR2MKTyp9nvpwfTh0ECeY_DBOx_gc9bL48qEOMiK2sxf6zJK28ThFZuKeut1tDpPL7s6c_qmWSULc0vCnTZuSqGB6Rqp51x2AqM-Z-n0Ven1ondk3O4m5HiL09Lxd8A3X23j_ngKcVHMWPWicU1Y4-w0JvjJced6-8xL_dP6n4tQUyIrOka486TIwjK3sB-VLyEp7cBDJQRgWOBNF8xoHWIzaE6thXIBlJgyXl_JZOw',
  },
  {
    key: 'library',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcE1Kt3sALK98wXh72jm4-V1uI9nRRSrOuL4mcNLhIhz--8HsVQnKNFmQ2loa_W6hoZW1KLjouCLMFdBMDJW2XKuz8s3lHRMsPqAL2ig4dF51385AnNgaHjp2AOaOirvpxHnR6kaiiK1OICXilcqq9MnlUYSm_jizvRP7H5f_uQA0YnFtSrAbbORf5RmHu3VA_bSly_9xLgCmnsCwI6Df8RQrBE7v0wDOoZa4VfHk09ZC4g9JPizRGOA',
  },
  {
    key: 'sports',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrNPPtjtWKz5bxxOKOPWdoDVCpypRwNpDqwaba0H7yyFDKj4VcQLp9wyBz59qOenh4QZsAQQgZnG03Guq5NJ80sBhsdrlB477y37c4GZTZXtx1maagrv6Zn0bETpAyEw80sJdWmqIt1VzpBDzyazkze7yaNg-4b_9jd4cLQE6aTO503IE6o6JGUZc-c1N0OjYuIXzMheuv0fD0yoUzj6LLKH2lATkQ9LvKQdBpuCPj4YZ0ibdvs2glgg',
  },
];

const Infrastructure = () => {
  const { t } = useTranslation('about');

  return (
    <section className="mb-16 md:mb-24">
      <h2 className="font-headline-lg text-2xl sm:text-3xl text-primary font-bold mb-10 border-l-4 border-secondary pl-4 flex flex-col">
        <span>{t('infrastructure.heading')}</span>
        <span lang="bn" className="font-bengali-body text-sm text-on-surface-variant font-normal">
          {t('infrastructure.headingBn')}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FACILITIES.map((fac) => {
          const title = t(`infrastructure.${fac.key}.title`);
          return (
            <div
              key={fac.key}
              className="group relative bg-white rounded-2xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={title}
                  src={fac.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-headline-md text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {title}
                  </h4>
                  <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {t(`infrastructure.${fac.key}.desc`)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Infrastructure;
