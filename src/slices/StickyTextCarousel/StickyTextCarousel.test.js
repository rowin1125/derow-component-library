/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';

import { htmlSerializer } from '../../utils/htmlSerializer';

import StickyTextCarousel from './StickyTextCarousel';
import {
  content,
  contentWithWaveBreaker,
  contentWithDiagonalBreaker,
} from './stickyTextCarouselFixture';

describe('StickyTextCarousel', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <StickyTextCarousel
        htmlSerializer={htmlSerializer}
        data-testid='test-StickyTextCarousel'
        className='StickyTextCarousel'
        content={content}
      />,
    );
    expect(
      getByTestId('test-StickyTextCarousel').classList.contains(
        'StickyTextCarousel',
      ),
    ).toBe(true);
  });

  test('doesnt render any breakers by default', () => {
    const { container } = render(
      <StickyTextCarousel
        htmlSerializer={htmlSerializer}
        data-testid='test-StickyTextCarousel'
        className='StickyTextCarousel'
        content={content}
      />,
    );
    const diagonalSvg = container.querySelector('#breaker-diagonal');
    const waveSvg = container.querySelector('#breaker-wave');

    expect(diagonalSvg).toBeNull();
    expect(waveSvg).toBeNull();
  });

  test('shows wave breaker when prop is provided', () => {
    const { container } = render(
      <StickyTextCarousel
        htmlSerializer={htmlSerializer}
        data-testid='test-StickyTextCarousel'
        className='StickyTextCarousel'
        content={contentWithWaveBreaker}
      />,
    );

    const waveSvg = container.querySelector('#breaker-wave');
    expect(waveSvg).toBeTruthy();
  });

  test('shows diagonal breaker when prop is provided', () => {
    const { container } = render(
      <StickyTextCarousel
        htmlSerializer={htmlSerializer}
        data-testid='test-StickyTextCarousel'
        className='StickyTextCarousel'
        content={contentWithDiagonalBreaker}
      />,
    );

    const diagonalSvg = container.querySelector('#breaker-diagonal');
    expect(diagonalSvg).toBeTruthy();
  });

  test('renders correct fields by the content prop', () => {
    const { getAllByText } = render(
      <StickyTextCarousel
        htmlSerializer={htmlSerializer}
        data-testid='test-StickyTextCarousel'
        className='StickyTextCarousel'
        content={content}
      />,
    );
    const text = content.fields[1].item_title;
    const element = getAllByText(text);
    expect(element[0].innerHTML).toEqual(text);

    const text2 = content.fields[2].item_title;
    const element2 = getAllByText(text2);
    expect(element2[0].innerHTML).toEqual(text2);
  });
});
