/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import { linkResolver } from '../../utils/linkResolver';

import ProductShow from './ProductShow';
import { content } from './ProductShowFixture';

const products = content;

describe('ProductShow', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <ProductShow
        data-testid='test-ProductShow'
        key={content[0].node.product_title}
        contentLength={products.length}
        image={content[0].node.product_image}
        price={content[0].node.product_price}
        link={content[0].node._meta}
        linkResolver={linkResolver}
        title={content[0].node.product_title}
      />,
    );
    expect(getByTestId('test-ProductShow')).toBeTruthy();
    expect(
      getByTestId('test-ProductShow').classList.contains('ProductShow'),
    ).toBe(true);
  });
});
