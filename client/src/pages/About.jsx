import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import PageHero from '../components/common/PageHero';
import StatsGrid from '../components/common/StatsGrid';

const About = () => {
  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      <Breadcrumb items={[{ label: 'About Us' }]} />
      <PageHero
        title="Educating Generations Since 1952"
        subtitle="A beacon of knowledge, character, and discipline in the industrial heartland of Durgapur, West Bengal."
        tag="Legacy & Heritage"
        bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCrGqw5C8njL92E1Xx3Cr_QqZ1D8k8CBaqAMUsvDcwOmoYiiSeeiWflBFOE4VFjmKAwSlQK1BBAUAlv9MlfROs4IngNqxYrsMnIfe2JxR3Zimr__2BD6J8HLhRNFNS2aK4wV3JOkrs6Vw2Lp7At-t4g_CZYIl2kcu98jq36JP5fj0DXFFtBc6NTIUJiGXczy-gdbV6oIO2T8J_WdQieEv2MKAwAaI7HRD1_Mt6oCaEpJXEk6UHWxXfwUw"
      />
      <div className="my-12">
        <StatsGrid />
      </div>
    </div>
  );
};

export default About;
