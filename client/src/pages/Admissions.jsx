import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import PageHero from '../components/common/PageHero';
import EligibilityCard from '../components/admissions/EligibilityCard';
import ImportantDates from '../components/admissions/ImportantDates';
import AdmissionSteps from '../components/admissions/AdmissionSteps';
import DocumentChecklist from '../components/admissions/DocumentChecklist';
import ApplicationCTA from '../components/admissions/ApplicationCTA';
import FAQAccordion from '../components/admissions/FAQAccordion';

const Admissions = () => {
  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: 'Admissions' }]} />

      {/* Hero Banner */}
      <div className="mb-12 md:mb-16">
        <PageHero
          title="Admissions 2024-25"
          subtitle="Join our legacy of academic excellence and discipline. Applications are open for Primary, Secondary, and Higher Secondary streams."
          tag="Enrolment Portal"
          ctaText="Inquire Online"
          ctaLink="#apply-form"
          bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCbMIJvXY9xuZdJPVOp38Cxrao7ApBo5VY2-dBye2YWKPDxllN8WDkWSWZxx_tho1uuvvZxK_LXS8cmbMK1xdZHD2KgqZv5s6tljMA0zSM4jVufnJYUmudOf5t63przH1Wq6zxu5nT4HMCZJFMn5VdmJygZNw0eiWPH9ZWYpod6sUJnqiCQpl3yR3zvN5qmaVo7NpEY5UpRPJj0N2LbzmPeqdiNEHrgS1RJtRcC0u41HVVmSn_Rs4MsRQ"
        />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* 1. Eligibility Criteria (8 cols) */}
        <EligibilityCard />

        {/* 2. Key Deadlines (4 cols) */}
        <ImportantDates />

        {/* 3. 4-Step Process (12 cols) */}
        <AdmissionSteps />

        {/* 4. Mandatory Document Checklist (5 cols) */}
        <DocumentChecklist />

        {/* 5. Interactive Application & Inquiry Form (7 cols) */}
        <div id="apply-form" className="md:col-span-7">
          <ApplicationCTA />
        </div>

        {/* 6. FAQ Accordion (12 cols) */}
        <FAQAccordion />
      </div>
    </div>
  );
};

export default Admissions;
