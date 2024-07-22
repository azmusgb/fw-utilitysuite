import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header'; // Adjust path if necessary

test('renders FormWorks Agent Service Script header', () => {
  render(<Header />);
  const headerElement = screen.getByText(/FormWorks Agent Service Script/i);
  expect(headerElement).toBeInTheDocument();
});