import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Breadcrumb from '../../components/common/Breadcrumb';

describe('Breadcrumb Component', () => {
  it('renders home link and current trail items', () => {
    render(
      <BrowserRouter>
        <Breadcrumb
          items={[
            { label: 'Academics', href: '/academics' },
            { label: 'Faculty Directory' },
          ]}
        />
      </BrowserRouter>
    );

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Academics/i })).toBeInTheDocument();
    expect(screen.getByText('Faculty Directory')).toBeInTheDocument();
  });
});
