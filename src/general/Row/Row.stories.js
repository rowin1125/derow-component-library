import React from 'react';
import Row from './Row';

export default {
  title: 'layout/Row',
  component: Row,
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['a', 'div', 'button', 'span'],
      },
      table: {
        defaultValue: { summary: 'div' },
        type: {
          summary: 'Html element',
          detail: 'Specify which html you like the button to be',
        },
      },
    },
    width: {
      control: {
        type: 'select',
        options: [
          'w-1/12',
          'w-2/12',
          'w-3/12',
          'w-4/12',
          'w-5/12',
          'w-6/12',
          'w-7/12',
          'w-8/12',
          'w-9/12',
          'w-10/12',
          'w-11/12',
          'w-12/12',
        ],
      },
      table: {
        defaultValue: { summary: 'w-full' },
        type: {
          summary: 'Width class',
          detail: 'Specify a width class of tailwind',
        },
      },
    },
    children: {
      table: {
        type: {
          summary: 'Cols',
          detail: 'Content <Row> must be the <Col> component',
        },
      },
    },
    centerX: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'Center horizontal',
          detail: 'Center the content horizontal inside the card',
        },
      },
    },
    centerY: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'Center verticaly',
          detail: 'Center the content verticaly inside the card',
        },
      },
    },
    reverse: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'Reverse element',
          detail: 'Reverse the elements in the row',
        },
      },
    },
    wrap: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'Wrap element',
          detail: 'Make the items wrap if with is to large',
        },
      },
    },
  },
};

const template = (args) => <Row {...args} />;

export const FirstExample = template.bind({});
FirstExample.args = {
  children: 'hallo',
};

export const SecondExample = template.bind({});
SecondExample.args = {
  children: 'Byeeeee',
};
