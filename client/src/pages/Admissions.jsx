import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import PageHero from '../components/common/PageHero';
import admissionsData from '../data/admissions.json';

const Admissions = () => {
  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      <Breadcrumb items={[{ label: 'Admissions' }]} />
      <PageHero
        title="Admissions 2025-26"
        subtitle="Join our tradition of educational distinction. Applications are invited for Class V, IX, and XI Science, Commerce & Arts streams."
        tag="Admissions Open"
        bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCbMIJvXY9xuZdJPVOp38Cxrao7ApBo5VY2-dBye2YWKPDxllN8WDkWSWZxx_tho1uuvvZxK_LXS8cmbMK1xdZHD2KgqZv5s6tljMA0zSM4jVufnJYUmudOf5t63przH1Wq6zxu5nT4HMCZJFMn5VdmJygZNw0eiWPH9ZWYpod6sUJnqiCQpl3yR3zvN5qmaVo7NpEY5UpRPJj0N2LbzmPeqdiNEHrgS1RJtRcC0u41HVVmSn_Rs4MsRQ"
      >
        <button className="bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary font-bold px-8 py-3.5 rounded-lg flex items-center gap-2 shadow-lg transition-all active:scale-95">
          <span>Apply Online Now</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </PageHero>
    </div>
  );
};

export default Admissions;
