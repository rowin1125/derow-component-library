import React from 'react';

import UspDivider from './UspDivider';
import {
  content,
  contentWithoutBg,
  contentWithExtraText,
} from './uspDividerFixture';

import { htmlSerializer } from '../../utils/htmlSerializer';
import { iconGenerator } from '../../utils/iconGenerator';

export default {
  title: 'slices/UspDivider',
  component: UspDivider,
  argTypes: {},
};

const template = args => (
  <UspDivider
    htmlSerializer={htmlSerializer}
    iconGenerator={iconGenerator}
    {...args}
  />
);

const templateWithBg = args => (
  <div className='bg-brand w-full'>
    <UspDivider
      htmlSerializer={htmlSerializer}
      iconGenerator={iconGenerator}
      {...args}
    />
  </div>
);

export const RegularExample = template.bind({});
RegularExample.args = {
  content,
};

export const WidthBgBrandBackground = templateWithBg.bind({});
WidthBgBrandBackground.args = {
  content: contentWithoutBg,
};

export const WidthExtraContent = template.bind({});
WidthExtraContent.args = {
  content: contentWithExtraText,
};
