import React from 'react';
import { useTranslation } from 'react-i18next';
import admissionsData from '../../data/admissions.json';
import { useLocale } from '../../hooks/useLocale';

const FAQAccordion = () => {
  const { t } = useTranslation('admissions');
  const { field } = useLocale();
  const faqs = admissionsData.faqs || [];

  return (
    <div className="md:col-span-12 mt-8 md:mt-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="font-headline-md text-2xl font-bold text-primary mb-2">
          {t('faq.heading')}
        </h3>
        <p className="text-ash-gray font-body-md text-sm">
          {t('faq.subheading')}
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((item, idx) => (
          <details
            key={idx}
            className="group border border-outline-variant rounded-xl bg-white overflow-hidden shadow-sm transition-all"
          >
            <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer hover:bg-surface-container-low transition-colors select-none font-bold text-sm sm:text-base text-primary">
              <span>{field(item, 'question')}</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-ash-gray flex-shrink-0 ml-4">
                expand_more
              </span>
            </summary>
            <div className="p-4 sm:p-5 bg-surface-container-lowest font-body-md text-sm text-on-surface-variant border-t border-outline-variant/60 leading-relaxed">
              {field(item, 'answer')}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
