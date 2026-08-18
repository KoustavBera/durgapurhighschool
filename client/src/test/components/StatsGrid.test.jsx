import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StatsGrid from '../../components/common/StatsGrid';

describe('StatsGrid Component', () => {
  it('renders student, faculty, lab, and smart class metrics', () => {
    render(<StatsGrid />);

    expect(screen.getByText('2500+')).toBeInTheDocument();
    expect(screen.getByText(/Students Enrolled/i)).toBeInTheDocument();
    expect(screen.getByText('85+')).toBeInTheDocument();
    expect(screen.getByText(/Expert Teachers & Staff/i)).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText(/Modern Laboratories & ICT/i)).toBeInTheDocument();
    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText(/Smart Digital Classrooms/i)).toBeInTheDocument();
  });
});
