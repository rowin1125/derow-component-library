/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import Col from './Col';

describe('Col', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <Col xs={12} data-testid='test-Col'>
        hi
      </Col>,
    );
    expect(getByTestId('test-Col')).toBeTruthy();
    expect(getByTestId('test-Col')).toHaveTextContent('hi');
    expect(getByTestId('test-Col').classList.contains('Col')).toBe(true);
  });

  test('should change html element when using "as" prop', () => {
    const { container } = render(
      <Col xs={12} as='a'>
        Joee
      </Col>,
    );
    const element = container.querySelector('a');
    expect(element).toBeTruthy();
  });

  test('renders correct classes for responsive Cols', () => {
    const { getByTestId } = render(
      <Col data-testid='test-Col' xs={12} sm={10} md={8} lg={6}>
        hi
      </Col>,
    );
    expect(getByTestId('test-Col')).toHaveClass('w-12/12');
    expect(getByTestId('test-Col')).toHaveClass('sm:w-10/12');
    expect(getByTestId('test-Col')).toHaveClass('md:w-8/12');
    expect(getByTestId('test-Col')).toHaveClass('lg:w-6/12');
  });

  test('should allow all flex bools to add the correct classes', () => {
    const { getByTestId } = render(
      <Col data-testid='test-Col' xs={12} centerX centerY column>
        hi
      </Col>,
    );
    expect(getByTestId('test-Col')).toHaveClass('justify-center');
    expect(getByTestId('test-Col')).toHaveClass('items-center');
    expect(getByTestId('test-Col')).toHaveClass('flex-col');
  });
});
