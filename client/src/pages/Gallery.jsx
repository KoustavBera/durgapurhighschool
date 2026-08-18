import React, { useState, useMemo } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Lightbox from '../components/common/Lightbox';
import GalleryTabs from '../components/gallery/GalleryTabs';
import PhotoGrid from '../components/gallery/PhotoGrid';
import VideoGrid from '../components/gallery/VideoGrid';
import galleryData from '../data/gallery.json';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All Photos');
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Photos only
  const allPhotos = useMemo(() => {
    return galleryData.filter((item) => !item.isVideo);
  }, []);

  // Filtered by category
  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All Photos') return allPhotos;
    return allPhotos.filter(
      (item) => item.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [allPhotos, activeCategory]);

  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: 'Student Corner' }, { label: 'Visual Showcase' }]} />

      {/* Header Section */}
      <div className="mb-6">
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-primary font-bold mb-2">
          Visual Showcase & Campus Gallery
        </h1>
        <p className="text-body-lg text-sm sm:text-base text-on-surface-variant max-w-3xl leading-relaxed">
          Explore the vibrant academic life, cultural traditions, sports milestones, and state-of-the-art laboratory infrastructure at Durgapur High School.
        </p>
      </div>

      {/* Sticky Gallery Tab Bar */}
      <GalleryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Bento Photo Grid */}
      <PhotoGrid
        photos={filteredPhotos}
        onPhotoClick={(photo) => setSelectedMedia(photo)}
      />

      {/* Multimedia Video Grid */}
      <VideoGrid
        onVideoSelect={(vid) => {
          setSelectedMedia(vid);
        }}
      />

      {/* Lightbox Modal */}
      {selectedMedia && (
        <Lightbox
          item={selectedMedia}
          items={selectedMedia.isVideo ? galleryData.filter(i => i.isVideo) : filteredPhotos}
          onClose={() => setSelectedMedia(null)}
          onNavigate={(nextItem) => setSelectedMedia(nextItem)}
        />
      )}
    </div>
  );
};

export default Gallery;
