import React from 'react';
import Card from '../Card';
import Col from '../Col';
import Row from '../Row';
import BgOverflow from './BgOverflow';

export default {
  title: 'helpers/BgOverflow',
  component: BgOverflow,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['to_brand', 'from_brand'],
      },
      table: {
        defaultValue: { summary: 'div' },
        type: {
          summary: 'Overflow type',
          detail: 'Type of overflow to use',
        },
      },
    },
  },
};

const template = args => <BgOverflow {...args} />;

export const WithOverflow = template.bind({});
WithOverflow.args = {
  type: 'to_brand',
  children: (
    <Row centerX centerY className='py-32'>
      <Col xs={6}>
        <Card variant='primary'>
          <h1>Hi there</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            impedit ratione debitis magni possimus eius adipisci beatae
            perferendis culpa quisquam, consequatur labore ullam atque expedita
            minus neque sint voluptates magnam!
          </p>
        </Card>
      </Col>
    </Row>
  ),
};

export const OverFlowReverse = template.bind({});
OverFlowReverse.args = {
  type: 'from_brand',
  children: (
    <Row centerX centerY className='py-32'>
      <Col xs={6}>
        <Card variant='primary'>
          <h1>Hi there</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            impedit ratione debitis magni possimus eius adipisci beatae
            perferendis culpa quisquam, consequatur labore ullam atque expedita
            minus neque sint voluptates magnam!
          </p>
        </Card>
      </Col>
    </Row>
  ),
};

export const NoOverflow = template.bind({});
NoOverflow.args = {
  type: 'none',
  children: (
    <Row centerX centerY className='py-32'>
      <Col xs={6}>
        <Card variant='primary'>
          <h1>Hi there</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            impedit ratione debitis magni possimus eius adipisci beatae
            perferendis culpa quisquam, consequatur labore ullam atque expedita
            minus neque sint voluptates magnam!
          </p>
        </Card>
      </Col>
    </Row>
  ),
};
