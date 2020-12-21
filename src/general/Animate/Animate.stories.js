import React from 'react';
import Animate from './Animate';
import Card from '../Card';

export default {
  title: 'utils/Animate',
  component: Animate,
  argTypes: {
    origin: {
      control: {
        type: 'select',
        options: ['bottom', 'top', 'left'],
      },
      defaultValue: { summary: 'Required ✅' },
      table: {
        type: {
          summary: 'Animate from',
          detail: 'Define the origin from the animation',
        },
      },
    },
    duration: {
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: '1 sec' },
        type: {
          summary: 'Specify duration',
          detail: 'Define the duration the animation has to take',
        },
      },
    },
    children: {
      type: {
        summary: 'Content',
        detail: 'Content inside the Animation',
      },
    },
  },
};

const template = args => <Animate {...args} />;

export const AnimateFromBottom = template.bind({});
AnimateFromBottom.args = {
  origin: 'bottom',
  children: (
    <Card variant='primary'>
      <h1>Hi there</h1>
      <p>I animate from the bottom</p>
    </Card>
  ),
};

export const AnimateFromLeft = template.bind({});
AnimateFromLeft.args = {
  origin: 'left',
  children: (
    <Card variant='primary'>
      <h1>Hi there</h1>
      <p>I animate from the left</p>
    </Card>
  ),
};

export const AnimateWithCustomDuration = template.bind({});
AnimateWithCustomDuration.args = {
  origin: 'left',
  duration: 4,
  children: (
    <Card variant='primary'>
      <h1>Hi there</h1>
      <p>This animation takes 4sec</p>
    </Card>
  ),
};
