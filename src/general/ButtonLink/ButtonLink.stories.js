import React from 'react';
import ButtonLink from './ButtonLink';

export default {
  title: 'elements/ButtonLink',
  component: ButtonLink,
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
    href: {
      table: {
        type: {
          summary: 'link href',
          detail: 'Define an url to where the link must go',
        },
      },
    },
    link: {
      table: {
        type: {
          summary: 'Link component',
          detail: 'Define a link component (Next/link or Router/link)',
        },
      },
    },
    children: {
      type: {
        summary: 'Text',
        detail: 'Text for inside the button',
      },
    },
  },
};

const template = (args) => <ButtonLink {...args} />;
const tertairyTemplate = (args) => (
  <div className='bg-brand p-10 flex flex-col items-center'>
    <p className='pb-10'>
      This big bluie square is just to show the white variant
    </p>
    <ButtonLink {...args} />
  </div>
);

export const ButtonLinkPrimary = template.bind({});
ButtonLinkPrimary.args = {
  children: 'Hover me',
  variant: 'primary',
};

export const ButtonLinkSecondary = template.bind({});
ButtonLinkSecondary.args = {
  children: 'Hover me',
  variant: 'secondary',
};

export const ButtonLinkTertairy = tertairyTemplate.bind({});
ButtonLinkTertairy.args = {
  children: 'Hover me',
  variant: 'tertairy',
};
