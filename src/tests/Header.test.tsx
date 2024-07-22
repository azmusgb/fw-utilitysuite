import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders FormWorks Utility Suite header', () => {
  render(<Header />);
  const headerElement = screen.getByText(/FormWorks Utility Suite/i);
  expect(headerElement).toBeInTheDocument();
});