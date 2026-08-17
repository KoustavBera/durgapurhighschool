import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import PageHero from '../components/common/PageHero';

const Academics = () => {
  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      <Breadcrumb items={[{ label: 'Academics' }]} />
      <PageHero
        title="Excellence in Education"
        subtitle="Providing a holistic and rigorous academic curriculum recognized by WBBSE & WBCHSE."
        tag="Academic Programs"
        align="center"
        bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDH9rFF6gf7s5RY7h-ujJmQcy03O3pA5j4CWOzT06Ae6zfwuUhE2Ig9k63HSesCrq310LkV2fsx3HqFjmedEX2CAefjGvUckC6pRlm7hWerTfO6Yu9zL2pM4S9Zc_Ngyk5Yr2LBWriqhbXWs0A14loqU2kkb5OAiA_aO594Ssbq5O77RMoAD0ZBNIzRpa1Xe0xEtV_YjA__6CCjv8UwEvtTvGXgXkH7ZEPru2BYakW34rVMfsoPqG8Mhw"
      />
    </div>
  );
};

export default Academics;
