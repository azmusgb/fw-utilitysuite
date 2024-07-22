import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/common/Header';

test('renders Header component', () => {
  render(<Header />);
  const headerElement = screen.getByText(/FormWorks Agent Service Script/i);
  expect(headerElement).toBeInTheDocument();
});
