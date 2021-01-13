import React from 'react';
import GridCards from './GridCards';
import {
  content,
  conentWithBgBrand,
  contentWithSecCards,
} from './GridCardsFixture';

import { htmlSerializer } from '../../utils/htmlSerializer';
import { linkResolver } from '../../utils/linkResolver';
import { iconGenerator } from '../../utils/iconGenerator';

export default {
  title: 'slices/GridCards',
  component: GridCards,
  argTypes: {},
};

const template = args => (
  <GridCards
    htmlSerializer={htmlSerializer}
    linkResolver={linkResolver}
    iconGenerator={iconGenerator}
    {...args}
  />
);

export const RegularExample = template.bind({});
RegularExample.args = {
  content: content,
};

export const WithBgBrand = template.bind({});
WithBgBrand.args = {
  content: conentWithBgBrand,
};

export const WithSecondaryCards = template.bind({});
WithSecondaryCards.args = {
  content: contentWithSecCards,
};
