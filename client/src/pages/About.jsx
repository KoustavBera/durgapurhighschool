import React from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../components/common/Breadcrumb';
import PageHero from '../components/common/PageHero';
import AboutBento from '../components/about/AboutBento';
import PrincipalMessage from '../components/about/PrincipalMessage';
import GoverningBody from '../components/about/GoverningBody';
import Infrastructure from '../components/about/Infrastructure';
import AccreditationBadges from '../components/about/AccreditationBadges';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ labelKey: 'nav.aboutUs' }]} />

      {/* Page Hero Banner */}
      <div className="mb-12 md:mb-16">
        <PageHero
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          tag={t('hero.tag')}
          bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCrGqw5C8njL92E1Xx3Cr_QqZ1D8k8CBaqAMUsvDcwOmoYiiSeeiWflBFOE4VFjmKAwSlQK1BBAUAlv9MlfROs4IngNqxYrsMnIfe2JxR3Zimr__2BD6J8HLhRNFNS2aK4wV3JOkrs6Vw2Lp7At-t4g_CZYIl2kcu98jq36JP5fj0DXFFtBc6NTIUJiGXczy-gdbV6oIO2T8J_WdQieEv2MKAwAaI7HRD1_Mt6oCaEpJXEk6UHWxXfwUw"
        />
      </div>

      {/* History, Vision, Mission Bento Grid */}
      <AboutBento />

      {/* Principal's Official Profile & Message */}
      <PrincipalMessage />

      {/* School Management Committee Table */}
      <GoverningBody />

      {/* Campus Infrastructure Highlights */}
      <Infrastructure />

      {/* Official Government Accreditation Badges */}
      <AccreditationBadges />
    </div>
  );
};

export default About;
