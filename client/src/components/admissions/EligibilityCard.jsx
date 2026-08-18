import React from 'react';
import { useTranslation } from 'react-i18next';
import admissionsData from '../../data/admissions.json';
import { useLocale } from '../../hooks/useLocale';

// Accent colour per row, cycled so the list stays readable at any length.
const BORDERS = ['border-primary', 'border-secondary', 'border-info', 'border-success'];

const EligibilityCard = () => {
  const { t } = useTranslation('admissions');
  const { field } = useLocale();
  const criteria = admissionsData.eligibility || [];

  return (
    <div className="md:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-outline-variant flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">verified</span>
          <h3 className="font-headline-md text-2xl font-bold text-primary">{t('eligibility.heading')}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {criteria.map((item, idx) => (
            <div
              key={field(item, 'classLevel') || idx}
              className={`p-5 bg-surface-container rounded-xl border-l-4 ${BORDERS[idx % BORDERS.length]}`}
            >
              <h4 className="font-label-md text-base font-bold text-primary mb-2">
                {field(item, 'classLevel')}
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-2">
                {field(item, 'criteria')}
              </p>
              <dl className="font-label-sm text-xs text-ash-gray space-y-0.5">
                <div className="flex gap-1.5">
                  <dt className="font-bold">{t('eligibility.ageRange')}:</dt>
                  <dd>{field(item, 'ageRange')}</dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="font-bold">{t('eligibility.stream')}:</dt>
                  <dd>{field(item, 'stream')}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EligibilityCard;
