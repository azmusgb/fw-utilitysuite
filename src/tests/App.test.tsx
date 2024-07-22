import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; // Ensure this path is correct
import Header from '../components/Header'; // Ensure this path is correct

test('renders FormWorks Agent Service Script text', () => {
  render(<App />);
  const linkElement = screen.getByText(/FormWorks Agent Service Script/i);
  expect(linkElement).toBeInTheDocument();
});