import React from 'react';

const steps = [
  {
    step: 1,
    title: 'Online Registration',
    desc: 'Fill out candidate particulars and generate an application acknowledgement number.',
  },
  {
    step: 2,
    title: 'Document Upload',
    desc: 'Upload self-attested digital copies of birth certificate, marks sheet, and photo ID.',
  },
  {
    step: 3,
    title: 'Fee Payment',
    desc: 'Pay nominal processing fee online through integrated WBIFMS payment gateway.',
  },
  {
    step: 4,
    title: 'Physical Verification',
    desc: 'Present original certificates for document scrutiny on assigned campus dates.',
  },
];

const AdmissionSteps = () => {
  return (
    <div className="md:col-span-12 py-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-secondary text-xs uppercase font-bold tracking-widest block mb-1">
          Simple & Transparent
        </span>
        <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary">
          Step-by-Step Admission Process
        </h3>
        <p className="font-body-md text-sm sm:text-base text-ash-gray mt-2">
          Admissions are conducted strictly on merit and statutory guidelines. Follow these four simple steps:
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start relative">
        {/* Step Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-10 left-12 right-12 h-1 bg-surface-container-high -z-10" />

        {steps.map((item) => (
          <div key={item.step} className="flex-1 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xl mb-4 border-4 border-surface ring-4 ring-primary/20 shadow-md">
              {item.step}
            </div>
            <h4 className="font-label-md text-base font-bold text-primary mb-2">
              {item.title}
            </h4>
            <p className="font-label-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-xs">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionSteps;
