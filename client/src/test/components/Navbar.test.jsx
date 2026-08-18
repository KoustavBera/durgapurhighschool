import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from '../../components/common/Navbar';

describe('Navbar Component', () => {
  it('renders official school branding and navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText(/Durgapur High School/i)).toBeInTheDocument();
    expect(screen.getByText(/দুর্গাপুর উচ্চ বিদ্যালয়/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Academics/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Admissions/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Faculty/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Gallery/i })).toBeInTheDocument();
  });

  it('opens mobile navigation drawer when mobile menu button is clicked', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const hamburgerBtn = screen.getByLabelText(/Open mobile menu/i);
    expect(hamburgerBtn).toBeInTheDocument();
    fireEvent.click(hamburgerBtn);

    // MobileMenu drawer should now be open
    expect(screen.getByLabelText(/Mobile Navigation/i)).toBeInTheDocument();
  });
});
