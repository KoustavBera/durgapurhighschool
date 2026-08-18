import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FAQAccordion from '../../components/admissions/FAQAccordion';

describe('FAQAccordion Component', () => {
  it('renders admission FAQ questions and descriptions', () => {
    render(<FAQAccordion />);

    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
    expect(screen.getByText(/What is the medium of instruction/i)).toBeInTheDocument();
    expect(screen.getByText(/Is hostel accommodation available/i)).toBeInTheDocument();
    expect(screen.getByText(/Can candidates apply through offline/i)).toBeInTheDocument();
  });
});
