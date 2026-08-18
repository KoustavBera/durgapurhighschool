import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FAQAccordion from '../../components/admissions/FAQAccordion';
import admissionsData from '../../data/admissions.json';

describe('FAQAccordion Component', () => {
  it('renders admission FAQ questions and descriptions', () => {
    render(<FAQAccordion />);

    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
    expect(screen.getByText(/How can I apply for Class XI admission online/i)).toBeInTheDocument();
    expect(screen.getByText(/What is the medium of instruction/i)).toBeInTheDocument();
    expect(screen.getByText(/Is there any reservation for SC\/ST\/OBC/i)).toBeInTheDocument();
  });

  it('renders every FAQ record from admissions.json', () => {
    render(<FAQAccordion />);

    admissionsData.faqs.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
      expect(screen.getByText(faq.answer)).toBeInTheDocument();
    });
  });
});
