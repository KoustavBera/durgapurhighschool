import React, { useState } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import PageHeader from '../components/common/PageHeader';
import Lightbox from '../components/common/Lightbox';
import galleryData from '../data/gallery.json';

const Gallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  const openLightbox = (item) => {
    setActivePhoto(item);
  };

  const closeLightbox = () => {
    setActivePhoto(null);
  };

  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      <Breadcrumb items={[{ label: 'Student Corner', href: '/notices' }, { label: 'Gallery' }]} />
      <PageHeader
        title="Visual Showcase"
        titleBn="ছবি ও ভিডিও গ্যালারি"
        subtitle="Explore the vibrant life at Durgapur High School through our curated collection of events, academic achievements, and infrastructure."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map((item) => (
          <div
            key={item.id}
            onClick={() => openLightbox(item)}
            className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-surface-container"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={item.thumb}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
              <span className="text-secondary-fixed text-xs font-bold uppercase tracking-wider mb-1">
                {item.category}
              </span>
              <h3 className="font-headline-md text-base font-bold leading-snug">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={Boolean(activePhoto)}
        onClose={closeLightbox}
        imageSrc={activePhoto?.url}
        title={activePhoto?.title}
        description={activePhoto?.caption}
      />
    </div>
  );
};

export default Gallery;
