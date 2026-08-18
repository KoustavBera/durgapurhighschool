import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Routing & Shell Layout Tests', () => {
  it('renders home page by default with header and footer landmarks', () => {
    window.history.pushState({}, 'Home', '/');
    render(<App />);

    // Skip to main content link
    expect(screen.getByText(/Skip to Main Content/i)).toBeInTheDocument();

    // Hero title
    expect(screen.getByText(/Shaping Minds,/i)).toBeInTheDocument();

    // Footer
    expect(screen.getAllByText(/Durgapur High School/i).length).toBeGreaterThan(0);
  });

  it('renders 404 NotFound view on non-existent route', () => {
    window.history.pushState({}, 'Page Not Found', '/non-existent-route-1234');
    render(<App />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Back to Home/i })).toBeInTheDocument();
  });
});
