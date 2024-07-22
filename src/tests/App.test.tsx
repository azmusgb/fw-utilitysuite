import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders App component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  expect(screen.getByText(/FW Utility Suite/i)).toBeInTheDocument();
});
