import React from 'react';
import admissionsData from '../../data/admissions.json';

const DocumentChecklist = () => {
  const documents = admissionsData.requiredDocuments || [
    'Birth Certificate (Original & Self-attested copy)',
    'Transfer Certificate (TC) from previous school',
    'Mark Sheets / Progress Cards of last qualifying examinations',
    'Recent colored passport-size photographs (4 copies)',
    'Aadhar Card of Student and Guardian',
    'Caste Certificate issued by SDO / BDO (if applicable)',
    'Income Certificate for Fee Concession applications (if applicable)',
  ];

  return (
    <div className="md:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-outline-variant shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-secondary text-3xl">task_alt</span>
          <h3 className="font-headline-md text-xl font-bold text-on-surface">Required Documents</h3>
        </div>
        <p className="text-xs text-ash-gray font-label-md mb-6">
          Please keep digitized copies ready prior to initiating the online registration portal.
        </p>

        <ul className="space-y-4">
          {documents.map((doc, idx) => (
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
          All uploaded documents are verified under strict digital privacy norms.
        </p>
      </div>
    </div>
  );
};

export default DocumentChecklist;
