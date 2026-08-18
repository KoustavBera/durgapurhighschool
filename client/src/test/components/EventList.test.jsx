import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EventList from '../../components/news/EventList';

describe('EventList Component', () => {
  it('toggles between upcoming and past events tabs', () => {
    render(<EventList />);

    // Default upcoming event should be visible
    expect(screen.getByText(/Bijoy Utsav 2024/i)).toBeInTheDocument();

    // Click Past Events tab
    const pastTab = screen.getByRole('button', { name: /Past Events/i });
    fireEvent.click(pastTab);

    // Past event should now be visible
    expect(screen.getByText(/78th Independence Day/i)).toBeInTheDocument();
  });
});
