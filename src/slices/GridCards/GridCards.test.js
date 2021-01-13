/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import GridCards from './GridCards';

import { content } from './GridCardsFixture';
import { linkResolver } from '../../utils/linkResolver';
import { htmlSerializer } from '../../utils/htmlSerializer';
import { iconGenerator } from '../../utils/iconGenerator';

const GridCardsTestComponent = ({ ...args }) => (
  <GridCards
    linkResolver={linkResolver}
    htmlSerializer={htmlSerializer}
    iconGenerator={iconGenerator}
    data-testid='test-GridCards'
    {...args}
  />
);

describe('GridCards', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <GridCardsTestComponent content={content} className='GridCards' />,
    );
    expect(getByTestId('test-GridCards')).toBeTruthy();
    expect(getByTestId('test-GridCards').classList.contains('GridCards')).toBe(
      true,
    );
  });

  test('should have the content from prismic', async () => {
    const { findByText } = render(<GridCardsTestComponent content={content} />);
    expect(await findByText('Title here')).toBeTruthy();
    expect(await findByText('Neem contact op')).toBeTruthy();
    expect(await findByText('App met ons')).toBeTruthy();
    expect(
      await findByText(
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aperiam porro asperiores fuga, quibusdam reprehenderit perspiciatis sint laudantium qui hic architecto repellat ipsum inventore sequi nam. Sed amet odit aut!',
      ),
    ).toBeTruthy();
  });
});
