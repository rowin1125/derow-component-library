/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import BgOverflow from './BgOverflow';

describe('BgOverflow', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <BgOverflow data-testid='test-BgOverflow'>hi</BgOverflow>,
    );
    expect(getByTestId('test-BgOverflow')).toBeTruthy();
    expect(getByTestId('test-BgOverflow')).toHaveTextContent('hi');
    expect(
      getByTestId('test-BgOverflow').classList.contains('BgOverflow'),
    ).toBe(true);
  });

  test('should change html element when using "as" prop', () => {
    const { container } = render(<BgOverflow as='a'>Joee</BgOverflow>);
    const element = container.querySelector('a');
    expect(element).toBeTruthy();
  });

  test('should use the correct type of overflow', () => {
    const { getByTestId } = render(
      <BgOverflow data-testid='test-BgOverflow' type='to_brand'>
        Joee
      </BgOverflow>,
    );
    expect(getByTestId('test-BgOverflow').classList.contains('to_brand')).toBe(
      true,
    );

    const { getByTestId: testId } = render(
      <BgOverflow data-testid='from_brand-BgOverflow' type='from_brand'>
        Joee
      </BgOverflow>,
    );
    expect(
      testId('from_brand-BgOverflow').classList.contains('from_brand'),
    ).toBe(true);
  });

  test('should change html element when using "as" prop', () => {
    const { getByTestId } = render(
      <BgOverflow data-testid='test-BgOverflow'>Joee</BgOverflow>,
    );
    expect(getByTestId('test-BgOverflow').classList.contains('to_brand')).toBe(
      false,
    );
    expect(
      getByTestId('test-BgOverflow').classList.contains('from_brand'),
    ).toBe(false);
  });
});
