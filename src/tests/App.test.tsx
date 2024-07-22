import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; // Adjust path if necessary

test('renders FormWorks Agent Service Script text', () => {
  render(<App />);
  const linkElement = screen.getByText(/FormWorks Agent Service Script/i);
  expect(linkElement).toBeInTheDocument();
});