import React from 'react';
import Breaker from './Breaker';

export default {
  title: 'layout/Breaker/Wave',
  component: Breaker,
  argTypes: {},
};

const template = args => <Breaker variant='wave' {...args} />;

export const RegularDisplay = template.bind({});
RegularDisplay.args = {
  reverseX: false,
  reverseY: false,
  svgClassName: '',
};

export const RotateXAxis = template.bind({});
RotateXAxis.args = {
  reverseX: true,
  reverseY: false,
  svgClassName: '',
};

export const RotateYAxis = template.bind({});
RotateYAxis.args = {
  reverseX: false,
  reverseY: true,
  svgClassName: '',
};

export const RotateBothAxis = template.bind({});
RotateBothAxis.args = {
  reverseX: true,
  reverseY: true,
  svgClassName: '',
};

export const CustomColor = template.bind({});
CustomColor.args = {
  reverseX: true,
  reverseY: true,
  svgClassName: 'text-brand',
};
