/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import Row from './Row';

describe('Row', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Row data-testid='test-Row'>hi</Row>);
    expect(getByTestId('test-Row')).toBeTruthy();
    expect(getByTestId('test-Row')).toHaveTextContent('hi');
    expect(getByTestId('test-Row').classList.contains('Row')).toBe(true);
  });

  test('should change html element when using "as" prop', () => {
    const { container } = render(<Row as='a'>Joee</Row>);
    const element = container.querySelector('a');
    expect(element).toBeTruthy();
  });

  test('receive correct class for centerX and centerY reverse & wrap', () => {
    const { getByTestId } = render(
      <Row data-testid='test-Row' centerX centerY wrap reverse>
        hi
      </Row>,
    );
    expect(getByTestId('test-Row')).toBeTruthy();
    expect(getByTestId('test-Row')).toHaveTextContent('hi');
    expect(getByTestId('test-Row').classList.contains('justify-center')).toBe(
      true,
    );
    expect(getByTestId('test-Row').classList.contains('items-center')).toBe(
      true,
    );
    expect(getByTestId('test-Row').classList.contains('flex-row-reverse')).toBe(
      true,
    );
    expect(getByTestId('test-Row').classList.contains('flex-wrap')).toBe(true);
  });

  test('receive a different width proppery', () => {
    const { getByTestId } = render(
      <Row data-testid='test-Row' width='w-6/12'>
        hi
      </Row>,
    );
    expect(getByTestId('test-Row').classList.contains('w-6/12')).toBe(true);
  });
});
