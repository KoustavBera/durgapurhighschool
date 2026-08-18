import React from 'react';
import { useTranslation } from 'react-i18next';
import admissionsData from '../../data/admissions.json';
import { useLocale } from '../../hooks/useLocale';

const DocumentChecklist = () => {
  const { t } = useTranslation('admissions');
  const { isBengali } = useLocale();

  const documents = admissionsData.requiredDocuments || [];
  const documentsBn = admissionsData.requiredDocumentsBn || [];
  // The two lists are positional siblings; fall back per item so a short or
  // missing Bengali list degrades to English instead of dropping rows.
  const list = documents.map((doc, idx) => (isBengali && documentsBn[idx]) || doc);

  return (
    <div className="md:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-outline-variant shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-secondary text-3xl">task_alt</span>
          <h3 className="font-headline-md text-xl font-bold text-on-surface">{t('documents.heading')}</h3>
        </div>
        <p className="text-xs text-ash-gray font-label-md mb-6">
          {t('documents.intro')}
        </p>

        <ul className="space-y-4">
          {list.map((doc, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-success text-[20px] flex-shrink-0 mt-0.5">
                check_circle
              </span>
              <span className="font-body-md text-sm text-on-surface leading-snug">
                {doc}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 p-4 bg-surface-container rounded-xl border border-outline-variant/60 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">verified_user</span>
        <p className="text-xs text-on-surface-variant leading-tight">
          {t('documents.privacyNote')}
        </p>
      </div>
    </div>
  );
};

export default DocumentChecklist;
