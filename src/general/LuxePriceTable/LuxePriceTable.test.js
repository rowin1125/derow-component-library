/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import LuxePriceTable from './LuxePriceTable';

import { content, contentTwo } from './luxePriceTableFixture';

import { htmlSerializer } from '../../utils/htmlSerializer';
import { iconGenerator } from '../../utils/iconGenerator';
import { linkResolver } from '../../utils/linkResolver';

const LuxePriceTableTestComponent = ({ ...args }) => (
  <LuxePriceTable
    data-testid='test-LuxePriceTable'
    content={[content]}
    htmlSerializer={htmlSerializer}
    iconGenerator={iconGenerator}
    linkResolver={linkResolver}
    {...args}
  />
);

describe('LuxePriceTable', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <LuxePriceTableTestComponent className='LuxePriceTable' />,
    );
    expect(getByTestId('test-LuxePriceTable')).toBeTruthy();
    expect(
      getByTestId('test-LuxePriceTable').classList.contains('LuxePriceTable'),
    ).toBe(true);
  });

  test('should find the correct usp when being rendered', () => {
    const { getAllByText } = render(
      <LuxePriceTableTestComponent content={[content, contentTwo, content]} />,
    );
    const text = contentTwo.selling_points[0].text;
    const element = getAllByText(text);
    expect(element[0].innerHTML).toEqual(text);

    const text2 = content.selling_points[0].text;
    const element2 = getAllByText(text2);
    expect(element2[0].innerHTML).toEqual(text2);
  });

  test('Should not find any prices when noPrice is provided', () => {
    const { getAllByText } = render(
      <LuxePriceTableTestComponent
        showPrice={false}
        content={[content, contentTwo, content]}
      />,
    );
    const text = contentTwo.price;
    const element = getAllByText(text);
    expect(
      element[0].parentElement.parentElement.classList.contains('hidden'),
    ).toEqual(true);
  });
});
