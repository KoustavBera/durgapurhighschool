import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../components/common/Breadcrumb';
import Lightbox from '../components/common/Lightbox';
import GalleryTabs from '../components/gallery/GalleryTabs';
import PhotoGrid from '../components/gallery/PhotoGrid';
import VideoGrid from '../components/gallery/VideoGrid';
import galleryData from '../data/gallery.json';
import { useLocale } from '../hooks/useLocale';

const Gallery = () => {
  const { t } = useTranslation('gallery');
  const { field } = useLocale();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Photos only
  const allPhotos = useMemo(() => {
    return galleryData.filter((item) => !item.isVideo);
  }, []);

  // Filtered by category slug
  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return allPhotos;
    return allPhotos.filter(
      (item) => item.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [allPhotos, activeCategory]);

  const lightboxList = selectedMedia?.isVideo
    ? galleryData.filter((item) => item.isVideo)
    : filteredPhotos;
  const currentIndex = selectedMedia
    ? lightboxList.findIndex((item) => item.id === selectedMedia.id)
    : -1;

  const step = (offset) => {
    if (currentIndex < 0 || lightboxList.length === 0) return undefined;
    return () => {
      const nextIndex = (currentIndex + offset + lightboxList.length) % lightboxList.length;
      setSelectedMedia(lightboxList[nextIndex]);
    };
  };

  return (
    <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[{ labelKey: 'nav.studentCorner' }, { labelKey: 'nav.visualShowcase' }]}
      />

      {/* Header Section */}
      <div className="mb-6">
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-primary font-bold mb-2">
          {t('page.title')}
        </h1>
        <p className="text-body-lg text-sm sm:text-base text-on-surface-variant max-w-3xl leading-relaxed">
          {t('page.intro')}
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
      <Lightbox
        isOpen={Boolean(selectedMedia)}
        imageSrc={selectedMedia?.url}
        title={field(selectedMedia, 'title')}
        description={field(selectedMedia, 'caption')}
        onClose={() => setSelectedMedia(null)}
        onPrev={lightboxList.length > 1 ? step(-1) : undefined}
        onNext={lightboxList.length > 1 ? step(1) : undefined}
      />
    </div>
  );
};

export default Gallery;
