import React from 'react';
import admissionsData from '../../data/admissions.json';

const EligibilityCard = () => {
  const criteria = admissionsData.eligibilityCriteria || [
    {
      title: 'Age Requirement',
      desc: 'Candidates must be between 5 to 16 years of age as of April 1st of the academic admission session.',
      border: 'border-primary',
    },
    {
      title: 'Academic Record',
      desc: 'Minimum 60% aggregate in the previous qualifying examination from a recognized education board.',
      border: 'border-secondary',
    },
    {
      title: 'Residency Priority',
      desc: 'Priority given to bonafide residents of Durgapur subdivision and surrounding Paschim Bardhaman regions.',
      border: 'border-info',
    },
    {
      title: 'Reservation Norms',
      desc: 'Statutory reservations apply for SC / ST / OBC-A / OBC-B and PwD candidates as per Govt. of West Bengal orders.',
      border: 'border-success',
    },
  ];

  return (
    <div className="md:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-outline-variant flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">verified</span>
          <h3 className="font-headline-md text-2xl font-bold text-primary">Eligibility Criteria</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 bg-surface-container rounded-xl border-l-4 ${item.border || 'border-primary'}`}
            >
              <h4 className="font-label-md text-base font-bold text-primary mb-2">
                {item.title}
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EligibilityCard;
