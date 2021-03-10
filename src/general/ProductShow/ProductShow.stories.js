import React from 'react';

import ProductShow from './ProductShow';
import { content } from './ProductShowFixture';

import Row from '../Row';
import Container from '../Container';
import QuestionMark from '../../backup/QuestionMark';
import { linkResolver } from '../../utils/linkResolver';

export default {
  title: 'webshop/ProductShow',
  component: ProductShow,
  argTypes: {},
};

const products = content;

const FavoriteIcon = () => (
  <div className='absolute top-2 right-2'>
    <QuestionMark
      className='w-8 h-8 text-white'
      onClick={e => {
        e.preventDefault();
        alert('wooerks');
      }}
    />
  </div>
);

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
            favoriteIcon={() => <FavoriteIcon />}
            {...args}
          />
        );
      })}
    </Row>
  </Container>
);

export const RowExample = template.bind({});
RowExample.args = {};
