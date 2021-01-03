import React from 'react';

import CenterText from './CenterText';
import { content, contentBg, contentSmall } from './CenterTextFixture';
import { htmlSerializer } from '../../utils/htmlSerializer';

export default {
  title: 'slices/CenterText',
  component: CenterText,
  argTypes: {},
};

const template = args => (
  <CenterText htmlSerializer={htmlSerializer} {...args} />
);

export const SimpleExample = template.bind({});
SimpleExample.args = {
  content,
};

export const WithBgBrand = template.bind({});
WithBgBrand.args = {
  content: contentBg,
};

export const SmallExample = template.bind({});
SmallExample.args = {
  content: contentSmall,
};
