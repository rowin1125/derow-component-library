import React from 'react';
import Button from './Button';

export default {
  title: 'elements/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertairy'],
      },
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          summary: 'Variant of Button',
          detail: 'Select which varaint you prefer to use',
        },
      },
    },
    children: {
      type: {
        summary: 'Text',
        detail: 'Text for inside the button',
      },
    },
    fixedWidth: {
      table: {
        type: {
          summary: 'Fix width',
          detail: 'Fix width for lg + screens',
        },
      },
    },
    href: {
      table: {
        type: {
          summary: 'link href',
          detail: 'Define an url to where the link must go',
        },
      },
    },
    as: {
      table: {
        type: {
          summary: 'Html element',
          detail: 'Specify which html you like the button to be',
        },
      },
    },
  },
};

const template = (args) => <Button {...args} />;

export const ButtonPrimary = template.bind({});
ButtonPrimary.args = {
  children: 'Im a button',
  variant: 'primary',
};

export const ButtonSecondary = template.bind({});
ButtonSecondary.args = {
  children: 'Byeeeee',
  variant: 'secondary',
};

export const ButtonTertairy = template.bind({});
ButtonTertairy.args = {
  children: 'Byeeeee',
  variant: 'tertairy',
};
