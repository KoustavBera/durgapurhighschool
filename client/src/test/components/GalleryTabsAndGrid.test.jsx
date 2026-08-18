import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import GalleryTabs from '../../components/gallery/GalleryTabs';
import PhotoGrid from '../../components/gallery/PhotoGrid';

describe('Gallery Components', () => {
  it('switches categories when pill buttons are clicked in GalleryTabs', () => {
    const handleCategoryChange = vi.fn();
    render(
      <GalleryTabs
        activeCategory="all"
        onCategoryChange={handleCategoryChange}
      />
    );

    const sportsBtn = screen.getByRole('button', { name: /Sports/i });
    fireEvent.click(sportsBtn);
    // Tabs emit the category slug used in gallery.json, not the visible label.
    expect(handleCategoryChange).toHaveBeenCalledWith('sports');
  });

  it('renders photo items and triggers onPhotoClick in PhotoGrid', () => {
    const mockPhotos = [
      { id: '1', title: 'Main Campus Building', url: 'https://example.com/p1.jpg', category: 'Infrastructure' },
      { id: '2', title: 'Physics Laboratory', url: 'https://example.com/p2.jpg', category: 'Laboratories' },
    ];
    const handleClick = vi.fn();

    render(<PhotoGrid photos={mockPhotos} onPhotoClick={handleClick} />);

    expect(screen.getByText('Main Campus Building')).toBeInTheDocument();
    expect(screen.getByText('Physics Laboratory')).toBeInTheDocument();

    const photoCard = screen.getByText('Main Campus Building');
    fireEvent.click(photoCard);
    expect(handleClick).toHaveBeenCalledWith(mockPhotos[0]);
  });
});
