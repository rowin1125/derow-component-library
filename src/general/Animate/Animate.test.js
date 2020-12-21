/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import Animate from './Animate';

describe('Animate', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <Animate data-testid='test-Animate'>hi</Animate>,
    );
    expect(getByTestId('test-Animate')).toBeTruthy();
    expect(getByTestId('test-Animate')).toHaveTextContent('hi');
  });

  test('should have correct origin  ', () => {
    const { getByTestId } = render(
      <Animate data-testid='test-Animate' origin='bottom'>
        hi
      </Animate>,
    );
    expect(getByTestId('test-Animate').classList.contains('bottom')).toBe(true);
  });

  test('should have correct duration provided  ', () => {
    const { getByTestId } = render(
      <Animate data-testid='test-Animate' origin='bottom' duration={0.5}>
        hi
      </Animate>,
    );
    expect(
      getByTestId('test-Animate').classList.contains(`custom-duration-${0.5}`),
    ).toBe(true);
  });
});
