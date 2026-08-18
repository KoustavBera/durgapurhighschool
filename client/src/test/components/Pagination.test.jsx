import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Pagination from '../../components/common/Pagination';

describe('Pagination Component', () => {
  it('renders page buttons and handles page navigation', () => {
    const handlePageChange = vi.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={handlePageChange}
      />
    );

    // Page 2 should be active
    const page2Btn = screen.getByRole('button', { name: '2' });
    expect(page2Btn).toHaveAttribute('aria-current', 'page');

    // Click Next Page
    const nextBtn = screen.getByLabelText(/Next Page/i);
    fireEvent.click(nextBtn);
    expect(handlePageChange).toHaveBeenCalledWith(3);

    // Click Previous Page
    const prevBtn = screen.getByLabelText(/Previous Page/i);
    fireEvent.click(prevBtn);
    expect(handlePageChange).toHaveBeenCalledWith(1);
  });

  it('disables previous button on first page and next button on last page', () => {
    const { rerender } = render(
      <Pagination currentPage={1} totalPages={3} onPageChange={vi.fn()} />
    );
    expect(screen.getByLabelText(/Previous Page/i)).toBeDisabled();
    expect(screen.getByLabelText(/Next Page/i)).not.toBeDisabled();

    rerender(<Pagination currentPage={3} totalPages={3} onPageChange={vi.fn()} />);
    expect(screen.getByLabelText(/Previous Page/i)).not.toBeDisabled();
    expect(screen.getByLabelText(/Next Page/i)).toBeDisabled();
  });
});
