import { render } from '@testing-library/react';
import React from 'react';
import Breaker from './Breaker';

describe('Breaker', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <Breaker data-testid='test-Breaker' className='Breaker' />,
    );
    expect(getByTestId('test-Breaker')).toBeTruthy();
    expect(getByTestId('test-Breaker').classList.contains('Breaker')).toBe(
      true,
    );
  });

  test('should change html element when using "as" prop', () => {
    const { container } = render(<Breaker as='a' />);
    const element = container.querySelector('a');
    expect(element).toBeTruthy();
  });

  test('has the correct classes when X-axis prop is passed', () => {
    const { getByTestId } = render(
      <Breaker data-testid='test-Breaker' reverseX />,
    );
    expect(getByTestId('test-Breaker')).toBeTruthy();
    expect(getByTestId('test-Breaker').classList.contains('reverseX'));
  });

  test('has the correct classes when Y-axis prop is passed', () => {
    const { getByTestId } = render(
      <Breaker data-testid='test-Breaker' reverseY />,
    );
    expect(getByTestId('test-Breaker')).toBeTruthy();
    expect(getByTestId('test-Breaker').classList.contains('reverseY'));
  });
});
