import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-on-primary border-t-4 border-secondary-fixed mt-16">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        
        {/* Column 1: School Identity */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center border border-secondary-fixed/50">
              <span className="material-symbols-outlined text-secondary-fixed text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                account_balance
              </span>
            </div>
            <div>
              <h2 className="font-bold text-headline-md leading-none text-white">Durgapur HS</h2>
              <p className="text-[10px] text-secondary-fixed uppercase tracking-widest font-bold mt-0.5">
                Government of West Bengal
              </p>
            </div>
          </div>
          <p className="font-body-md text-on-primary/75 mb-6 text-[15px] leading-relaxed">
            Empowering students through academic rigor, character building, and digital literacy since 1952. A premier government-sponsored higher secondary institution.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="mailto:info@durgapurhighschool.edu.in"
              className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary-container text-secondary-fixed hover:text-on-secondary transition-colors"
              title="Official Email"
              aria-label="Send email to school administration"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
            <a
              href="tel:+913432546789"
              className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary-container text-secondary-fixed hover:text-on-secondary transition-colors"
              title="School Helpline Phone"
              aria-label="Call school office"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
            <a
              href="#qr-code"
              className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center hover:bg-secondary-container text-secondary-fixed hover:text-on-secondary transition-colors"
              title="Official Portal QR"
              aria-label="View official portal QR verification"
            >
              <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-5 text-secondary-fixed font-headline-md tracking-wide">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5 text-on-primary/80 font-label-md">
            <li>
              <Link to="/admissions" className="hover:text-white hover:underline decoration-secondary-fixed transition-colors">
                Online Admission
              </Link>
            </li>
            <li>
              <Link to="/notices" className="hover:text-white hover:underline decoration-secondary-fixed transition-colors">
                Circulars & Notice Board
              </Link>
            </li>
            <li>
              <Link to="/faculty" className="hover:text-white hover:underline decoration-secondary-fixed transition-colors">
                Staff & Faculty Directory
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-white hover:underline decoration-secondary-fixed transition-colors">
                Curriculum & Examination
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white hover:underline decoration-secondary-fixed transition-colors">
                Campus Media Gallery
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-white hover:underline decoration-secondary-fixed transition-colors">
                Latest News & Achievements
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Government Portals */}
        <div>
          <h4 className="font-bold text-lg mb-5 text-secondary-fixed font-headline-md tracking-wide">
            Government Portals
          </h4>
          <ul className="flex flex-col gap-2.5 text-on-primary/80 font-label-md">
            <li>
              <a
                href="https://india.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline decoration-secondary-fixed transition-colors inline-flex items-center gap-1"
              >
                <span>National Portal of India</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </li>
            <li>
              <a
                href="https://banglarshiksha.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline decoration-secondary-fixed transition-colors inline-flex items-center gap-1"
              >
                <span>Banglar Shiksha e-Portal</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </li>
            <li>
              <a
                href="https://wb.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline decoration-secondary-fixed transition-colors inline-flex items-center gap-1"
              >
                <span>Govt. of West Bengal Portal</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </li>
            <li>
              <a
                href="https://wbkanyashree.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline decoration-secondary-fixed transition-colors inline-flex items-center gap-1"
              >
                <span>Kanyashree Prakalpa</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </li>
            <li>
              <a
                href="https://wbmdfc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline decoration-secondary-fixed transition-colors inline-flex items-center gap-1"
              >
                <span>Aikyashree & Scholarships</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div id="contact">
          <h4 className="font-bold text-lg mb-5 text-secondary-fixed font-headline-md tracking-wide">
            Contact Us
          </h4>
          <address className="not-italic text-on-primary/80 font-label-md space-y-3">
            <p className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed shrink-0 mt-0.5">
                location_on
              </span>
              <span>
                Durgapur High School, GT Road,<br />
                City Centre, Durgapur,<br />
                Paschim Bardhaman, WB - 713203
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed shrink-0">
                call
              </span>
              <a href="tel:+913432546789" className="hover:text-white hover:underline">
                +91 343 254 6789 / 4201
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed shrink-0">
                mail
              </span>
              <a href="mailto:info@durgapurhighschool.edu.in" className="hover:text-white hover:underline">
                info@durgapurhighschool.edu.in
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom Compliance & Copyright Bar */}
      <div className="border-t border-white/10 py-5 px-4 sm:px-6 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-label-sm font-label-sm text-on-primary/60">
            © {currentYear} Durgapur High School. All Rights Reserved. Designed as per GIGW 3.0 Guidelines.
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-label-sm font-label-sm text-on-primary/60">
            <Link to="/notices" className="hover:text-white hover:underline">
              RTI Disclosure
            </Link>
            <span className="text-white/20">•</span>
            <a href="#privacy" className="hover:text-white hover:underline">
              Privacy Policy
            </a>
            <span className="text-white/20">•</span>
            <a href="#accessibility" className="hover:text-white hover:underline">
              Accessibility Statement
            </a>
            <span className="text-white/20">•</span>
            <span className="text-secondary-fixed/90 font-medium">Last Updated: Nov 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
