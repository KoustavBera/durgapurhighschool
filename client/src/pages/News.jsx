import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import FeaturedNews from '../components/news/FeaturedNews';
import EventList from '../components/news/EventList';
import NewsletterCTA from '../components/news/NewsletterCTA';

const News = () => {
  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: 'News & Events' }]} />

      {/* Section Header */}
      <div className="mb-8">
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-primary font-bold mb-2 border-l-4 border-secondary pl-4 flex flex-col">
          <span>Latest Updates & Campus Happenings</span>
          <span lang="bn" className="font-bengali-body text-sm text-on-surface-variant font-normal">
            সংবাদ ও ঘটনাবলী
          </span>
        </h1>
        <p className="text-ash-gray font-body-md text-sm sm:text-base max-w-3xl leading-relaxed">
          Stay connected with institutional milestones, student awards, departmental workshops, and upcoming cultural festivals.
        </p>
      </div>

      {/* Featured News Hero & Trending Updates */}
      <FeaturedNews />

      {/* School Calendar & Events (Tabbed) */}
      <EventList />

      {/* Digital Newsletter Subscription Banner */}
      <NewsletterCTA />
    </div>
  );
};

export default News;
