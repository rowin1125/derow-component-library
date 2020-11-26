import React from 'react';
import Container from './Container';
import Card from '../Card';

export default {
  title: 'elements/Container',
  component: Container,
  argTypes: {
    as: {
      control: {
        type: 'inline-radio',
        options: ['a', 'div'],
      },
    },
  },
};

const template = args => (
  <Container {...args}>
    <Card variant='secondary'>
      <h2>RESIZE ME, I WORK, BELIEVE ME 🙂 </h2>
      <p>(Iframe is already container width</p>
    </Card>
  </Container>
);

export const RegularExample = template.bind({});
RegularExample.args = {
  as: 'div',
};
