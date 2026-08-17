import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import PageHeader from '../components/common/PageHeader';
import newsData from '../data/news.json';

const News = () => {
  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      <Breadcrumb items={[{ label: 'Student Corner', href: '/notices' }, { label: 'News & Events' }]} />
      <PageHeader
        title="News & Events"
        titleBn="সংবাদ ও সাম্প্রতিক ঘটনাবলী"
        subtitle="Stay updated with achievements, workshops, sports victories, and cultural celebrations at Durgapur High School."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item) => (
          <article
            key={item.id}
            className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="h-48 overflow-hidden bg-surface-container relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-secondary text-on-secondary px-3 py-0.5 rounded-full text-xs font-bold shadow-sm">
                {item.category}
              </span>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <span className="text-ash-gray text-xs font-bold uppercase tracking-wider mb-2">
                {item.date} • {item.readTime}
              </span>
              <h2 className="font-headline-md text-lg font-bold text-primary mb-2 leading-snug">
                {item.title}
              </h2>
              <p className="text-on-surface-variant font-body-md text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                {item.excerpt}
              </p>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="text-xs text-ash-gray">{item.author}</span>
                <span className="text-primary text-sm font-bold flex items-center gap-1 hover:underline cursor-pointer">
                  Read More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
