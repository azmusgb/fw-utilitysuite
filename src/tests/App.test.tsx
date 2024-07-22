import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; // Adjust path if necessary

test('renders FormWorks Agent Service Script text', () => {
  render(<App />);
  
  // Debug: Log the rendered output to inspect its structure
  screen.debug();
  
  // Try to match the text with a function to allow for more flexible matching
  const linkElement = screen.getByText((content, element) => {
    return /FormWorks Agent Service Script/i.test(content);
  });
  
  expect(linkElement).toBeInTheDocument();
});