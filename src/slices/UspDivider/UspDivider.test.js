/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';

import UspDivider from './UspDivider';
import { content, contentWithExtraText } from './uspDividerFixture';
import { htmlSerializer } from '../../utils/htmlSerializer';
import { iconGenerator } from '../../utils/iconGenerator';

const UspDividerTestComponent = ({ ...args }) => (
  <UspDivider
    htmlSerializer={htmlSerializer}
    iconGenerator={iconGenerator}
    data-testid='test-UspDivider'
    {...args}
  />
);

describe('UspDivider', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <UspDividerTestComponent className='UspDivider' content={content} />,
    );
    expect(getByTestId('test-UspDivider')).toBeTruthy();
    expect(
      getByTestId('test-UspDivider').classList.contains('UspDivider'),
    ).toBe(true);
  });

  test('should find the correct usp when being rendered', () => {
    const { getAllByText } = render(
      <UspDividerTestComponent content={contentWithExtraText} />,
    );
    const text = contentWithExtraText.fields[0].usp_content[0].text;
    const element = getAllByText(text);
    expect(element[0].innerHTML).toEqual(text);

    const text2 = contentWithExtraText.fields[1].usp_content[0].text;
    const element2 = getAllByText(text2);
    expect(element2[0].innerHTML).toEqual(text2);
  });
});
