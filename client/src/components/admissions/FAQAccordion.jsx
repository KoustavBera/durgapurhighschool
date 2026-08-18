import React from 'react';
import admissionsData from '../../data/admissions.json';

const FAQAccordion = () => {
  const faqs = admissionsData.faq || [
    {
      q: 'What is the medium of instruction at Durgapur High School?',
      a: 'The primary medium of instruction across Secondary and Higher Secondary grades is Bengali. We also provide English-medium tutorial support and bilingual science materials as per WBCHSE specifications.',
    },
    {
      q: 'Is hostel accommodation available for outstation students?',
      a: 'Yes, Durgapur High School maintains a secure, disciplined boys hostel facility for students from Class VI to XII. Hostel admissions are strictly merit-based and prioritize students from distant districts.',
    },
    {
      q: 'Can candidates apply through offline admission counters?',
      a: 'While the online registration portal is recommended for faster verification, physical application forms can be obtained from the school administrative office between 11:00 AM and 3:00 PM on working days.',
    },
    {
      q: 'What are the cutoff criteria for Class XI Science stream intake?',
      a: 'For Class XI Science stream, candidates must achieve a minimum of 65% aggregate with at least 70% combined in Mathematics and Physical Sciences in the Madhyamik / 10th Board examination.',
    },
    {
      q: 'What fee concession schemes or government scholarships are supported?',
      a: 'Students are actively assisted in enrolling for state schemes such as Kanyashree Prakalpa (K1/K2), Shikshashree, Aikyashree minority scholarships, and Oasis SC/ST concessions.',
    },
  ];

  return (
    <div className="md:col-span-12 mt-8 md:mt-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="font-headline-md text-2xl font-bold text-primary mb-2">
          Frequently Asked Questions
        </h3>
        <p className="text-ash-gray font-body-md text-sm">
          Find answers to common queries regarding admission cycles, documents, and academic criteria.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((item, idx) => (
          <details
            key={idx}
            className="group border border-outline-variant rounded-xl bg-white overflow-hidden shadow-sm transition-all"
          >
            <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer hover:bg-surface-container-low transition-colors select-none font-bold text-sm sm:text-base text-primary">
              <span>{item.q || item.question}</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-ash-gray flex-shrink-0 ml-4">
                expand_more
              </span>
            </summary>
            <div className="p-4 sm:p-5 bg-surface-container-lowest font-body-md text-sm text-on-surface-variant border-t border-outline-variant/60 leading-relaxed">
              {item.a || item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
