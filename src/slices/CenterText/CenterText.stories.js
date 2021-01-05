import React from 'react';

import CenterText from './CenterText';
import {
  content,
  contentBg,
  contentSmall,
  contentWithButtons,
} from './CenterTextFixture';
import { htmlSerializer } from '../../utils/htmlSerializer';
import { linkResolver } from '../../utils/linkResolver';

export default {
  title: 'slices/CenterText',
  component: CenterText,
  argTypes: {},
};

const template = args => (
  <CenterText
    htmlSerializer={htmlSerializer}
    linkResolver={linkResolver}
    {...args}
  />
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

export const WithButtons = template.bind({});
WithButtons.args = {
  content: contentWithButtons,
};
