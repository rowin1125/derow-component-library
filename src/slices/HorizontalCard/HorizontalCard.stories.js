import React from 'react';
import HorizontalCard from './HorizontalCard';

import {
  content,
  contentPrimaryVariant,
  contentSecondaryVariant,
  contentWithBg,
  contentWithOverflow,
  contentTransparentVariant,
  contentWitLargeText,
} from './horizontalCardFixture';

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

const template = args => (
  <HorizontalCard
    linkResolver={linkResolver}
    htmlSerializer={htmlSerializer}
    className=''
    {...args}
  />
);

export const TransparentVariant = template.bind({});
TransparentVariant.args = {
  content,
  className: 'text-brand',
};

export const PrimaryVariant = template.bind({});
PrimaryVariant.args = {
  content: contentPrimaryVariant,
  className: 'text-brand',
};

export const SecondaryVariant = template.bind({});
SecondaryVariant.args = {
  content: contentSecondaryVariant,
  className: 'text-brand',
};

export const WithLargerContent = template.bind({});
WithLargerContent.args = {
  content: contentWitLargeText,
  className: 'text-brand',
};

export const WithBgColor = template.bind({});
WithBgColor.args = {
  content: contentWithBg,
  className: 'text-brand',
};

export const WithOverflow = template.bind({});
WithOverflow.args = {
  content: contentWithOverflow,
  className: 'text-brand',
};

export const TransparentWithBg = template.bind({});
TransparentWithBg.args = {
  content: contentTransparentVariant,
  className: 'text-brand',
};
