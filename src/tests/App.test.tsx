import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders FormWorks Utility Suite text', () => {
  render(<App />);
  const linkElement = screen.getByText(/FormWorks Utility Suite/i);
  expect(linkElement).toBeInTheDocument();
});