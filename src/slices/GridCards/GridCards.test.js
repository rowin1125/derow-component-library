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
    expect(await findByText(content.fields[2].grid_col_link_text)).toBeTruthy();
    expect(await findByText(content.fields[1].grid_col_link_text)).toBeTruthy();
    expect(await findByText(content.fields[0].grid_col_link_text)).toBeTruthy();
    expect(await findByText(content.primary.grid_header)).toBeTruthy();
  });
});
