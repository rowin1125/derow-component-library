import React from 'react';
import HorizontalCard from './HorizontalCard';
import data from './HorizontalCardFakeData.json';

import { linkResolver } from '../../utils/linkResolver';
import { htmlSerializer } from '../../utils/htmlSerializer';

export default {
  title: 'slices/HorizontalCard',
  component: HorizontalCard,
  argTypes: {
    htmlSerializer: {
      table: {
        defaultValue: { summary: 'Required ✅' },
        type: {
          summary: 'Provide your own html serializer ',
          detail:
            'Provide your own html serializer for converting your data to html',
        },
      },
    },
    linkResolver: {
      table: {
        defaultValue: { summary: 'Required ✅' },
        type: {
          summary: 'Provide your onw link resolver',
          detail:
            'Provide your own link resolver for converting your data to html',
        },
      },
    },
    content: {
      table: {
        defaultValue: { summary: 'Required ✅' },
        type: {
          summary: 'Slice json object',
          detail:
            'This slice object can be found in Prismic graphql playground 🥳',
        },
      },
    },
  },
};
console.log('data', data);

const template = args => (
  <HorizontalCard
    linkResolver={linkResolver}
    htmlSerializer={htmlSerializer}
    content={data}
    {...args}
  />
);

export const HorizontalSlice = template.bind({});
HorizontalSlice.args = {
  content: data,
};
