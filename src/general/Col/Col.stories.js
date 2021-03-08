import React from 'react';
import Col, { WidthProperties } from './Col';

const colWidth = Object.keys(WidthProperties);

const template = args => (
  <Col className='bg-brand text-color-light h-16' xs={12} {...args} />
);

export const FullWidth = template.bind({});
FullWidth.args = {
  children: 'hallo',
};

export const ResponsiveWidth = template.bind({});
ResponsiveWidth.args = {
  children: 'Resize to see a responsive col',
  xs: 12,
  sm: 10,
  md: 8,
  lg: 3,
};

export const ContentHorizontalCenter = template.bind({});
ContentHorizontalCenter.args = {
  children: 'Resize to see a responsive col -> lg:w-8/12',
  xs: 12,
  lg: 8,
  centerX: true,
};
export const ContentVerticalCenter = template.bind({});
ContentVerticalCenter.args = {
  children: 'Resize to see a responsive col -> lg:w-8/12',
  xs: 12,
  lg: 8,
  centerY: true,
};

export const CompletlyCentered = template.bind({});
CompletlyCentered.args = {
  children: 'Resize to see a responsive col -> lg:w-10/12',
  xs: 12,
  lg: 10,
  centerY: true,
  centerX: true,
};

const argTypes = {
  className: {
    table: {
      type: {
        summary: 'Styling classes',
        detail: 'Pass extra styling classes to the Col',
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
  column: {
    control: {
      type: 'boolean',
    },
    table: {
      defaultValue: { summary: false },
      type: {
        summary: 'Flex col',
        detail: 'Makes the col `flex-direction: column`',
      },
    },
  },
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
  children: {
    table: {
      type: {
        summary: 'Cols',
        detail: 'Content <Row> must be the <Col> component',
      },
    },
  },
  xs: {
    control: {
      type: 'select',
      options: colWidth,
    },
    table: {
      type: {
        summary: 'Columns xs',
        detail: 'Amount of Cols this component should take at xs',
      },
    },
  },
  sm: {
    control: {
      type: 'select',
      options: colWidth,
    },
    table: {
      type: {
        summary: 'Columns sm',
        detail: 'Amount of Cols this component should take at sm',
      },
    },
  },
  md: {
    control: {
      type: 'select',
      options: colWidth,
    },
    table: {
      type: {
        summary: 'Columns sm',
        detail: 'Amount of Cols this component should take at sm',
      },
    },
  },
  lg: {
    control: {
      type: 'select',
      options: colWidth,
    },
    table: {
      type: {
        summary: 'Columns sm',
        detail: 'Amount of Cols this component should take at sm',
      },
    },
  },
};

export default {
  title: 'layout/Col',
  component: Col,
  argTypes,
};
