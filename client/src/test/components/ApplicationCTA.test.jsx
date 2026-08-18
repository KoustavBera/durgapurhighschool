import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ApplicationCTA from '../../components/admissions/ApplicationCTA';

describe('ApplicationCTA Component', () => {
  it('renders form inputs and handles submission', () => {
    render(<ApplicationCTA />);

    expect(screen.getByText(/Application Preview & Inquiry/i)).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText(/As per Birth Certificate/i);
    const dobInput = screen.getByLabelText(/Date of Birth/i);
    const guardianInput = screen.getByPlaceholderText(/Father \/ Mother \/ Guardian/i);
    const classSelect = screen.getByRole('combobox');
    const termsCheckbox = screen.getByRole('checkbox');
    const submitBtn = screen.getByRole('button', { name: /Submit Initial Inquiry/i });

    // Fill form
    fireEvent.change(nameInput, { target: { value: 'Koustav Bera' } });
    fireEvent.change(dobInput, { target: { value: '2008-05-15' } });
    fireEvent.change(guardianInput, { target: { value: 'B. Bera' } });
    fireEvent.change(classSelect, { target: { value: 'Class XI - Science' } });
    fireEvent.click(termsCheckbox);

    fireEvent.click(submitBtn);

    // Should show success state
    expect(screen.getByText(/Inquiry Submitted!/i)).toBeInTheDocument();
    expect(screen.getByText(/Thank you, Koustav Bera/i)).toBeInTheDocument();
  });
});
