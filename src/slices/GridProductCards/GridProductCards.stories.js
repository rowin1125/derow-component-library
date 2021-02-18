import React from 'react';
import GridProductCards from './GridProductCards';
import { content } from './GridProductCardsFixture';

import { htmlSerializer } from '../../utils/htmlSerializer';
import { linkResolver } from '../../utils/linkResolver';
import { iconGenerator } from '../../utils/iconGenerator';

export default {
  title: 'slices/GridProductCards',
  component: GridProductCards,
  argTypes: {},
};

const template = args => (
  <GridProductCards
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
