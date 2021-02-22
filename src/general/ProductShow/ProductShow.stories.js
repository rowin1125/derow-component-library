import React from 'react';
import ProductShow from './ProductShow';

import { content } from './ProductShowFixture';

import { linkResolver } from '../../utils/linkResolver';
import Row from '../Row';
import Container from '../Container';

export default {
  title: 'webshop/ProductShow',
  component: ProductShow,
  argTypes: {},
};

const products = content;

const template = args => (
  <Container>
    <Row centerX wrap>
      {products.map(signleProduct => {
        const product = signleProduct.node;
        return (
          <ProductShow
            key={product.product_title}
            contentLength={products.length}
            image={product.product_image}
            price={product.product_price}
            link={product._meta}
            linkResolver={linkResolver}
            title={product.product_title}
            {...args}
          />
        );
      })}
    </Row>
  </Container>
);

export const RowExample = template.bind({});
RowExample.args = {};
