import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Lightbox from '../../components/common/Lightbox';

describe('Lightbox Component', () => {
  it('renders modal with active photo title and image when isOpen is true', () => {
    const handleClose = vi.fn();
    render(
      <Lightbox
        isOpen={true}
        imageSrc="https://example.com/img1.jpg"
        title="Main Campus Building"
        description="Historic red brick architecture"
        onClose={handleClose}
      />
    );

    expect(screen.getByText('Main Campus Building')).toBeInTheDocument();
    expect(screen.getByText('Historic red brick architecture')).toBeInTheDocument();
    expect(screen.getByAltText('Main Campus Building')).toBeInTheDocument();
  });

  it('calls onClose when close button or escape key is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Lightbox
        isOpen={true}
        imageSrc="https://example.com/img1.jpg"
        title="Main Campus Building"
        onClose={handleClose}
      />
    );

    const closeBtn = screen.getByLabelText(/Close Lightbox/i);
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(2);
  });

  it('calls onNext and onPrev when arrow buttons or keys are triggered', () => {
    const handleNext = vi.fn();
    const handlePrev = vi.fn();
    render(
      <Lightbox
        isOpen={true}
        imageSrc="https://example.com/img1.jpg"
        title="Main Campus Building"
        onClose={vi.fn()}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    );

    const nextBtn = screen.getByLabelText(/Next Image/i);
    fireEvent.click(nextBtn);
    expect(handleNext).toHaveBeenCalledTimes(1);

    const prevBtn = screen.getByLabelText(/Previous Image/i);
    fireEvent.click(prevBtn);
    expect(handlePrev).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(handleNext).toHaveBeenCalledTimes(2);

    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(handlePrev).toHaveBeenCalledTimes(2);
  });
});
