import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NewsletterCTA from '../../components/news/NewsletterCTA';

describe('NewsletterCTA Component', () => {
  it('handles email input and shows subscription success', () => {
    render(<NewsletterCTA />);

    const input = screen.getByPlaceholderText(/Enter your email address/i);
    const subscribeBtn = screen.getByRole('button', { name: /Subscribe Now/i });

    fireEvent.change(input, { target: { value: 'student@example.com' } });
    fireEvent.click(subscribeBtn);

    expect(screen.getByText(/Thank you! You have been subscribed to our bulletin/i)).toBeInTheDocument();
  });
});
