import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FacultyFilter from '../../components/faculty/FacultyFilter';
import FacultyCard from '../../components/faculty/FacultyCard';
import FacultyGrid from '../../components/faculty/FacultyGrid';

describe('Faculty Components', () => {
  it('triggers search and department filter callbacks in FacultyFilter', () => {
    const handleSearch = vi.fn();
    const handleDept = vi.fn();
    const handleReset = vi.fn();

    render(
      <FacultyFilter
        searchTerm=""
        onSearchChange={handleSearch}
        department="All"
        onDepartmentChange={handleDept}
        onReset={handleReset}
        totalCount={12}
      />
    );

    const input = screen.getByPlaceholderText(/Search educator or subject/i);
    fireEvent.change(input, { target: { value: 'Amitava' } });
    expect(handleSearch).toHaveBeenCalledWith('Amitava');

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Science' } });
    expect(handleDept).toHaveBeenCalledWith('Science');
  });

  it('renders faculty member details, tags, and profile button in FacultyCard', () => {
    const mockFaculty = {
      id: 'f1',
      name: 'Dr. Amitava Roy',
      designation: 'Senior PGT (Physics) - H.O.D',
      department: 'Science',
      qualification: 'Ph.D. in Astrophysics, JU',
      experience: '24 Years Experience',
      photo: 'https://example.com/photo.jpg',
    };

    const handleSelect = vi.fn();

    render(<FacultyCard faculty={mockFaculty} onSelect={handleSelect} />);

    expect(screen.getByText('Dr. Amitava Roy')).toBeInTheDocument();
    expect(screen.getByText('Science Department')).toBeInTheDocument();
    expect(screen.getByText('Ph.D. in Astrophysics, JU')).toBeInTheDocument();
    expect(screen.getByText('24 Years Experience')).toBeInTheDocument();
    expect(screen.getByText('H.O.D')).toBeInTheDocument();

    const viewBtn = screen.getByRole('button', { name: /View Profile/i });
    fireEvent.click(viewBtn);
    expect(handleSelect).toHaveBeenCalledWith(mockFaculty);
  });

  it('renders empty message in FacultyGrid when no results exist', () => {
    render(<FacultyGrid facultyList={[]} />);
    expect(screen.getByText(/No faculty found/i)).toBeInTheDocument();
  });
});
