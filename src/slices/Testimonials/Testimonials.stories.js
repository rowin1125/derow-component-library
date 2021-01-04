import React from 'react';
import Testimonials from './Testimonials';
import {
  content,
  contentWithTitle,
  contentWithBg,
  contentWithOverflow,
  contentWithCustomInterval,
  contentWithSlim,
} from './testimonialFixture';
import { htmlSerializer } from '../../utils/htmlSerializer';

export default {
  title: 'slices/Testimonials',
  component: Testimonials,
  argTypes: {},
};

const template = args => (
  <Testimonials htmlSerializer={htmlSerializer} {...args} />
);

export const BasicExample = template.bind({});
BasicExample.args = {
  content,
};

export const WithTitle = template.bind({});
WithTitle.args = {
  content: contentWithTitle,
};

export const WithCustomBackground = template.bind({});
WithCustomBackground.args = {
  content: contentWithBg,
};

export const WithOverflow = template.bind({});
WithOverflow.args = {
  content: contentWithOverflow,
};

export const WithCustomRotationInterval = template.bind({});
WithCustomRotationInterval.args = {
  content: contentWithCustomInterval,
};

export const WithSlimProperty = template.bind({});
WithSlimProperty.args = {
  content: contentWithSlim,
};
