/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import CenterText from './CenterText';
import { content } from './CenterTextFixture';

describe('CenterText', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <CenterText
        data-testid='test-CenterText'
        className='CenterText'
        content={content}
        htmlSerializer={() => {}}
      />,
    );
    expect(getByTestId('test-CenterText')).toBeTruthy();
    expect(
      getByTestId('test-CenterText').classList.contains('CenterText'),
    ).toBe(true);
  });

  test('should change html element when using "as" prop', () => {
    const { container } = render(
      <CenterText content={content} htmlSerializer={() => {}} as='h1' />,
    );
    const element = container.querySelector('h1');
    expect(element).toBeTruthy();
  });
});
