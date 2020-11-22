import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Button data-testid='test-Button'>hi</Button>);
    expect(getByTestId('test-Button')).toBeTruthy();
    expect(getByTestId('test-Button')).toHaveTextContent('hi');
  });
});
