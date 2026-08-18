import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Marquee from '../../components/common/Marquee';

describe('Marquee Component', () => {
  it('renders marquee announcement ticker and latest notices', () => {
    render(
      <BrowserRouter>
        <Marquee />
      </BrowserRouter>
    );

    expect(screen.getByText(/Latest Notices/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Selection List for Class XI Science Stream/i).length).toBeGreaterThan(0);
  });
});
