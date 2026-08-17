import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Lightbox = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  description,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft' && onPrev) onPrev();
      else if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !imageSrc) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Media Lightbox Preview'}
    >
      {/* Top Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary-fixed z-20"
        title="Close Lightbox (Esc)"
        aria-label="Close Lightbox"
      >
        <span className="material-symbols-outlined text-3xl">close</span>
      </button>

      {/* Navigation Arrows */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary-fixed z-20"
          title="Previous Image (Left Arrow)"
          aria-label="Previous Image"
        >
          <span className="material-symbols-outlined text-3xl sm:text-4xl">chevron_left</span>
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary-fixed z-20"
          title="Next Image (Right Arrow)"
          aria-label="Next Image"
        >
          <span className="material-symbols-outlined text-3xl sm:text-4xl">chevron_right</span>
        </button>
      )}

      {/* Main Image Container */}
      <div
        className="max-w-5xl w-full h-[65vh] sm:h-[75vh] flex items-center justify-center relative p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={title || 'Enlarged gallery view'}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scaleUp"
        />
      </div>

      {/* Caption & Title */}
      {(title || description) && (
        <div
          className="mt-4 text-center max-w-2xl px-4 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {title && (
            <h2 className="text-white font-headline-md text-[18px] sm:text-headline-md mb-1 font-bold">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-white/70 font-body-md text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
    </div>,
    document.body
  );
};

export default Lightbox;
