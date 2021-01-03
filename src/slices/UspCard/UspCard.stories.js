import React from 'react';

import UspCard from './UspCard';
import {
  content,
  contentBg,
  contentOverflow,
  contentWithExtraText,
  contentSimple,
} from './UspCardFixture';
import { iconGenerator } from '../../utils/iconGenerator';
import { linkResolver } from '../../utils/linkResolver';
import { htmlSerializer } from '../../utils/htmlSerializer';

export default {
  title: 'slices/UspCard',
  component: UspCard,
  argTypes: {},
};

const template = args => (
  <UspCard
    iconGenerator={iconGenerator}
    linkResolver={linkResolver}
    htmlSerializer={htmlSerializer}
    {...args}
  />
);

const contentOne = { ...content };

export const BasicExample = template.bind({});
BasicExample.args = {
  content: contentSimple,
};

export const AsALink = template.bind({});
AsALink.args = {
  content: contentOne,
  link: 'a',
};

export const WithCustomBackground = template.bind({});
WithCustomBackground.args = {
  content: contentBg,
  link: 'a',
};

export const WithAnOverflow = template.bind({});
WithAnOverflow.args = {
  content: contentOverflow,
  link: 'a',
};

export const WithExtraText = template.bind({});
WithExtraText.args = {
  link: 'a',
  content: contentWithExtraText,
};
