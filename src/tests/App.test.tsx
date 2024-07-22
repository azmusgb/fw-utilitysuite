import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders FormWorks Agent Service Script text', () => {
  render(<App />);
  const linkElement = screen.getByText((content, element) => {
    return /FormWorks Agent Service Script/i.test(content);
  });
  expect(linkElement).toBeInTheDocument();
});