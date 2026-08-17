import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';

// Common Infrastructure Components
import UtilityBar from './components/common/UtilityBar';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Notices from './pages/Notices';
import NotFound from './pages/NotFound';

function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* GIGW 3.0 Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to Main Content / মূল বিষয়বস্তুতে যান
      </a>

      {/* Top Accessibility & Utility Toolbar */}
      <UtilityBar />

      {/* Primary Fixed Government Header & Navigation */}
      <Navbar />

      {/* Fixed Header Spacer */}
      <div className="h-24 sm:h-28 md:h-36" aria-hidden="true" />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Outlet />
      </main>

      {/* 4-Column RTI & Government Compliant Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}