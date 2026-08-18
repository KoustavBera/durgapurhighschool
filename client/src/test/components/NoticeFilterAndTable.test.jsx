import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NoticeFilter from '../../components/notices/NoticeFilter';
import NoticeTable from '../../components/notices/NoticeTable';

describe('NoticeFilter & NoticeTable Components', () => {
  it('handles search input and category changes in NoticeFilter', () => {
    const handleSearchChange = vi.fn();
    const handleCategoryChange = vi.fn();
    const handleYearChange = vi.fn();
    const handleReset = vi.fn();

    render(
      <NoticeFilter
        searchTerm="Science"
        onSearchChange={handleSearchChange}
        category="Admission"
        onCategoryChange={handleCategoryChange}
        year="2024-25"
        onYearChange={handleYearChange}
        onReset={handleReset}
      />
    );

    // Search input
    const input = screen.getByPlaceholderText(/Search by title/i);
    expect(input.value).toBe('Science');
    fireEvent.change(input, { target: { value: 'Exam' } });
    expect(handleSearchChange).toHaveBeenCalledWith('Exam');

    // Reset button should appear when filters are active
    const resetBtn = screen.getByRole('button', { name: /Reset Filters/i });
    fireEvent.click(resetBtn);
    expect(handleReset).toHaveBeenCalled();
  });

  it('renders notices, badges, and empty state in NoticeTable', () => {
    const mockNotices = [
      {
        id: 'n1',
        title: 'Class XI Science Admission List 2024',
        category: 'Admission',
        date: 'Oct 24, 2024',
        isPinned: true,
        fileSize: '1.2 MB',
      },
    ];

    const { rerender } = render(
      <NoticeTable
        notices={mockNotices}
        currentPage={1}
        totalPages={1}
        totalItems={1}
        onPageChange={vi.fn()}
      />
    );

    expect(screen.getByText('Class XI Science Admission List 2024')).toBeInTheDocument();
    expect(screen.getByText(/New/i)).toBeInTheDocument();
    expect(screen.getByText('Admission')).toBeInTheDocument();
    expect(screen.getByText(/PDF \(1.2 MB\)/i)).toBeInTheDocument();

    // Rerender with empty notices array
    rerender(
      <NoticeTable
        notices={[]}
        currentPage={1}
        totalPages={1}
        totalItems={0}
        onPageChange={vi.fn()}
      />
    );

    expect(screen.getByText(/No notices found matching your filter criteria/i)).toBeInTheDocument();
  });
});
