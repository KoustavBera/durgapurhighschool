import React from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../components/common/Breadcrumb';
import PageHero from '../components/common/PageHero';
import CurriculumCard from '../components/academics/CurriculumCard';
import ResourcesCard from '../components/academics/ResourcesCard';
import DepartmentCards from '../components/academics/DepartmentCards';
import AcademicCalendar from '../components/academics/AcademicCalendar';
import ExamResultsCards from '../components/academics/ExamResultsCards';
import FacultyLinkBanner from '../components/academics/FacultyLinkBanner';

const Academics = () => {
  const { t } = useTranslation('academics');

  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      {/* Breadcrumbs */}
      <Breadcrumb items={[{ labelKey: 'nav.academics' }]} />

      {/* Hero Banner */}
      <div className="mb-12 md:mb-16">
        <PageHero
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          tag={t('hero.tag')}
          align="center"
          bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDH9rFF6gf7s5RY7h-ujJmQcy03O3pA5j4CWOzT06Ae6zfwuUhE2Ig9k63HSesCrq310LkV2fsx3HqFjmedEX2CAefjGvUckC6pRlm7hWerTfO6Yu9zL2pM4S9Zc_Ngyk5Yr2LBWriqhbXWs0A14loqU2kkb5OAiA_aO594Ssbq5O77RMoAD0ZBNIzRpa1Xe0xEtV_YjA__6CCjv8UwEvtTvGXgXkH7ZEPru2BYakW34rVMfsoPqG8Mhw"
        />
      </div>

      {/* Academics 12-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min mb-12">
        {/* 1. Curriculum Overview (8 cols) */}
        <CurriculumCard />

        {/* 2. Syllabus & Resources (4 cols) */}
        <ResourcesCard />

        {/* 3. Academic Departments (12 cols) */}
        <DepartmentCards />

        {/* 4. Academic Calendar Timeline (7 cols) */}
        <AcademicCalendar />

        {/* 5. Exam Rules & Results Portal (5 cols) */}
        <ExamResultsCards />
      </div>

      {/* Faculty CTA Banner (Full width) */}
      <FacultyLinkBanner />
    </div>
  );
};

export default Academics;
