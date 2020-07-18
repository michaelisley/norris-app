import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Loading categories', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});