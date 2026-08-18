import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import UtilityBar from '../../components/common/UtilityBar';

describe('UtilityBar Component', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-font-size');
    document.documentElement.classList.remove('high-contrast');
  });

  it('renders accessibility links, language toggle, and font controls', () => {
    render(<UtilityBar />);
    expect(screen.getByText(/Screen Reader Access/i)).toBeInTheDocument();
    expect(screen.getByText(/English \/ বাংলা/i)).toBeInTheDocument();
    expect(screen.getByText('A-')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('A+')).toBeInTheDocument();
  });

  it('adjusts data-font-size attribute on font button clicks', () => {
    render(<UtilityBar />);
    const increaseBtn = screen.getByLabelText(/Increase Font Size/i);
    fireEvent.click(increaseBtn);
    expect(document.documentElement.getAttribute('data-font-size')).toBe('large');

    const decreaseBtn = screen.getByLabelText(/Decrease Font Size/i);
    fireEvent.click(decreaseBtn);
    expect(document.documentElement.getAttribute('data-font-size')).toBe('normal');

    fireEvent.click(decreaseBtn);
    expect(document.documentElement.getAttribute('data-font-size')).toBe('small');

    const resetBtn = screen.getByLabelText(/Reset Font Size to Default/i);
    fireEvent.click(resetBtn);
    expect(document.documentElement.getAttribute('data-font-size')).toBe('normal');
  });

  it('toggles high contrast mode when contrast button is clicked', () => {
    render(<UtilityBar />);
    const contrastBtn = screen.getByLabelText(/Toggle High Contrast View/i);
    expect(contrastBtn).toBeInTheDocument();

    fireEvent.click(contrastBtn);
    expect(document.documentElement.classList.contains('high-contrast')).toBe(true);

    fireEvent.click(contrastBtn);
    expect(document.documentElement.classList.contains('high-contrast')).toBe(false);
  });
});
