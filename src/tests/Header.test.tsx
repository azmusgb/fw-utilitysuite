import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders FormWorks Utility Suite text', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/FormWorks Utility Suite/i);
  // Ensure there's at least one element with the text
  expect(linkElements.length).toBeGreaterThan(0);
  // Optionally, you can check for the exact number if known
  // expect(linkElements.length).toBe(1);
});