import React from 'react';
import { useTranslation } from 'react-i18next';
import admissionsData from '../../data/admissions.json';
import { useLocale } from '../../hooks/useLocale';

const AdmissionSteps = () => {
  const { t } = useTranslation('admissions');
  const { field, num } = useLocale();
  const steps = admissionsData.steps || [];

  return (
    <div className="md:col-span-12 py-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-secondary text-xs uppercase font-bold tracking-widest block mb-1">
          {t('steps.tag')}
        </span>
        <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary">
          {t('steps.heading')}
        </h3>
        <p className="font-body-md text-sm sm:text-base text-ash-gray mt-2">
          {t('steps.subheading')}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start relative">
        {/* Step Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-10 left-12 right-12 h-1 bg-surface-container-high -z-10" />

        {steps.map((item) => (
          <div key={item.step} className="flex-1 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xl mb-4 border-4 border-surface ring-4 ring-primary/20 shadow-md">
              {num(item.step)}
            </div>
            <h4 className="font-label-md text-base font-bold text-primary mb-2">
              {field(item, 'title')}
            </h4>
            <p className="font-label-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-xs">
              {field(item, 'description')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionSteps;
