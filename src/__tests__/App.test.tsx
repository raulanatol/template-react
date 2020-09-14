import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { WithProviders } from '../tests/testUtils';

test('renders learn react link', () => {
  const { getByText } = render(<WithProviders><App /></WithProviders>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
