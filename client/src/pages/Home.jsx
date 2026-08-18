import React from 'react';
import Marquee from '../components/common/Marquee';
import HeroSection from '../components/home/HeroSection';
import QuickAccessGrid from '../components/home/QuickAccessGrid';
import NoticeBoardHome from '../components/home/NoticeBoardHome';
import NewsEventsBento from '../components/home/NewsEventsBento';
import GalleryStrip from '../components/home/GalleryStrip';

const Home = () => {
  return (
    <div className="w-full">
      {/* Announcements Marquee */}
      <Marquee />

      {/* Hero Banner with Principal Snippet */}
      <HeroSection />

      {/* 4 Quick Access Navigation Cards */}
      <QuickAccessGrid />

      {/* Notice Board & Excellence Statistics */}
      <NoticeBoardHome />

      {/* News & Upcoming Events Bento Layout */}
      <NewsEventsBento />

      {/* Visual Showcase Gallery Strip */}
      <GalleryStrip />
    </div>
  );
};

export default Home;
