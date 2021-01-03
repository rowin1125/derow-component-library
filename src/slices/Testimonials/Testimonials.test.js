/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';

import Testimonials from './Testimonials';
import {
  content,
  contentWithOverflow,
  contentWithBg,
} from './testimonialFixture';
import { htmlSerializer } from '../../utils/htmlSerializer';

describe('Testimonials', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <Testimonials
        htmlSerializer={htmlSerializer}
        data-testid='test-Testimonials'
        className='Testimonials'
        content={content}
      />,
    );
    expect(getByTestId('test-Testimonials')).toBeTruthy();
    expect(
      getByTestId('test-Testimonials').classList.contains('Testimonials'),
    ).toBe(true);
  });

  test('should change html element when using "as" prop', () => {
    const { container } = render(
      <Testimonials
        as='h1'
        content={content}
        htmlSerializer={htmlSerializer}
      />,
    );
    const element = container.querySelector('h1');
    expect(element).toBeTruthy();
  });

  test('should have a bg when a prop is provided', () => {
    const { container } = render(
      <Testimonials content={contentWithBg} htmlSerializer={htmlSerializer} />,
    );
    const element = container.querySelector('.bg-brand');
    expect(element).toBeTruthy();
  });

  test('should have a overflow when a prop is provided', () => {
    const { container } = render(
      <Testimonials
        content={contentWithOverflow}
        htmlSerializer={htmlSerializer}
      />,
    );
    const element = container.querySelector('.from_brand');
    expect(element).toBeTruthy();
  });
});
