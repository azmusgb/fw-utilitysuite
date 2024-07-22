import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/common/Header';

test('renders Header component', () => {
  render(<Header />);
  expect(screen.getByText(/FW Utility Suite/i)).toBeInTheDocument();
});
