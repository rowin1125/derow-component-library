import React from 'react';

import { htmlSerializer } from '../../utils/htmlSerializer';
import { iconGenerator } from '../../utils/iconGenerator';
import { linkResolver } from '../../utils/linkResolver';
import Container from '../Container';

import LuxePriceTable from './LuxePriceTable';
import {
  content,
  contentTwo,
  contentThree,
  withDifferentAmountOfData,
} from './luxePriceTableFixture';

export default {
  title: 'elements/LuxePriceTable',
  component: LuxePriceTable,
  argTypes: {},
};

const template = args => (
  <Container>
    <LuxePriceTable
      htmlSerializer={htmlSerializer}
      iconGenerator={iconGenerator}
      linkResolver={linkResolver}
      {...args}
    />
  </Container>
);

export const SingleTable = template.bind({});
SingleTable.args = {
  content: [contentTwo],
  showPrice: true,
  showInfo: true,
};

export const MultipleTables = template.bind({});
MultipleTables.args = {
  content: [content, contentTwo, contentThree],
  showPrice: true,
  showInfo: true,
};

export const AmountOfSellingPointDifferent = template.bind({});
AmountOfSellingPointDifferent.args = {
  content: [withDifferentAmountOfData, contentTwo, contentThree],
  showPrice: true,
  showInfo: true,
};

export const WithoutPrice = template.bind({});
WithoutPrice.args = {
  content: [content, contentTwo, contentThree],
  showPrice: false,
  showInfo: true,
};

export const WithoutExtraInfo = template.bind({});
WithoutExtraInfo.args = {
  content: [content, contentTwo, contentThree],
  showPrice: false,
  showInfo: false,
};
