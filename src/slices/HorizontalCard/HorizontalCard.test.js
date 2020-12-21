/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import HorizontalCard from './HorizontalCard';

import data from './HorizontalCardFakeData.json';
import { linkResolver } from '../../utils/linkResolver';
import { htmlSerializer } from '../../utils/htmlSerializer';

describe('HorizontalCard', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <HorizontalCard
        className='HorizontalCard'
        linkResolver={linkResolver}
        htmlSerializer={htmlSerializer}
        data-testid='test-HorizontalCard'
        content={data}
      />,
    );
    expect(getByTestId('test-HorizontalCard')).toBeTruthy();

    expect(
      getByTestId('test-HorizontalCard').classList.contains('HorizontalCard'),
    ).toBe(true);
  });

  test('should have the content from prismic', () => {
    const { findByText } = render(
      <HorizontalCard
        className='HorizontalCard'
        linkResolver={linkResolver}
        htmlSerializer={htmlSerializer}
        data-testid='test-HorizontalCard'
        content={data}
      />,
    );
    expect(findByText('Website laten maken, hoe werkt dat?')).toBeTruthy();
    expect(findByText('heading intro here')).toBeTruthy();
    expect(
      findByText(
        'Hoe wij dit doen? Dit doen we uiteraard door onze unieke kwaliteiten zoals hierboven beschreven terug te laten komen in de website. Is dat alles...? Nee, wij gaat een stapje verder door naar alle details te kijken en proberen samen met jou het maximale te bereiken.',
      ),
    ).toBeTruthy();
  });
});
