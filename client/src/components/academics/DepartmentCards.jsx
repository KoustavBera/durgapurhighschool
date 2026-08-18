import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DEPARTMENTS = [
  {
    key: 'science',
    icon: 'science',
    iconBg: 'bg-secondary-container text-on-secondary-container',
  },
  {
    key: 'humanities',
    icon: 'history_edu',
    iconBg: 'bg-primary-fixed text-on-primary-fixed-variant',
  },
  {
    key: 'commerce',
    icon: 'payments',
    iconBg: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
  },
];

const DepartmentCards = () => {
  const { t } = useTranslation('academics');

  return (
    <div className="md:col-span-12">
      <div className="mb-6">
        <h3 className="font-headline-md text-2xl font-bold text-primary">{t('departments.heading')}</h3>
        <p className="text-ash-gray font-body-md text-sm mt-1">
          {t('departments.subheading')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DEPARTMENTS.map((dept) => {
          // `returnObjects` gives us the per-language subject list as an array.
          const subjects = t(`departments.${dept.key}.subjects`, { returnObjects: true });

          return (
            <div
              key={dept.key}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 ${dept.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-sm`}>
                  <span className="material-symbols-outlined text-2xl">{dept.icon}</span>
                </div>
                <h4 className="font-headline-md text-xl font-bold text-primary mb-3">
                  {t(`departments.${dept.key}.name`)}
                </h4>
                <p className="text-on-surface-variant font-body-md text-sm leading-relaxed mb-4">
                  {t(`departments.${dept.key}.desc`)}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {(Array.isArray(subjects) ? subjects : []).map((sub) => (
                    <span
                      key={sub}
                      className="text-[11px] font-medium bg-surface-container px-2 py-0.5 rounded text-on-surface-variant"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/faculty"
                className="text-primary font-bold hover:text-secondary flex items-center gap-1 text-sm pt-4 border-t border-outline-variant/40 group w-fit"
              >
                <span>{t('departments.viewFaculty')}</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DepartmentCards;
