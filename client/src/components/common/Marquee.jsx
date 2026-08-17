import React from 'react';
import noticesData from '../../data/notices.json';

const defaultItems = noticesData.slice(0, 6).map((notice, idx) => {
  const emojis = ['🚀', '🎓', '📁', '⚽', '💻', '📢'];
  const emoji = emojis[idx % emojis.length];
  return `${emoji} ${notice.title}`;
});

const Marquee = ({ items = defaultItems }) => {
  const tickerItems = items.length > 0 ? items : defaultItems;

  return (
    <aside
      aria-label="Latest Announcements Ticker"
      className="bg-secondary-container text-on-secondary-container py-2 flex items-center w-full z-30 relative border-b border-outline-variant overflow-hidden shadow-inner"
    >
      {/* Fixed Header Badge */}
      <div className="bg-secondary text-on-secondary font-bold px-4 sm:px-6 py-1 z-10 shadow-lg shrink-0 flex items-center gap-2 font-label-md text-label-md">
        <span className="material-symbols-outlined text-[18px] sm:text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          campaign
        </span>
        <span className="whitespace-nowrap">Latest Notices</span>
      </div>

      {/* Scrolling Content with seamless dual loop */}
      <div className="marquee-container flex-grow font-label-md text-label-md overflow-hidden">
        <div className="marquee-content px-4 flex items-center gap-8">
          {tickerItems.concat(tickerItems).map((text, index) => (
            <span key={index} className="inline-flex items-center gap-2 font-medium hover:underline cursor-pointer">
              <span>{text}</span>
              <span className="text-secondary/60 font-bold mx-2" aria-hidden="true">•</span>
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Marquee;
