import React from 'react';
import Accordion from './Accordion';
import { FaAddressBook } from 'react-icons/fa';

export default {
  title: 'elements/Accordion',
  component: Accordion,
  argTypes: {
    index: {
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'Start index',
          detail: 'You can give a specific number to use for example as faq',
        },
      },
    },
    accordionCounter: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'Icon component',
          detail: 'Pass an Icon',
        },
      },
    },
    accordionButtonProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to accordionButton elemenet',
        },
      },
    },
    accordionTextContainerProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to accordionTextContainer elemenet',
        },
      },
    },
    accordionCounterProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to accordionCounter elemenet',
        },
      },
    },
    accordionCounterIconProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to accordionCounterIcon elemenet',
        },
      },
    },
    accordionHeaderProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to accordionHeader elemenet',
        },
      },
    },
    accordionIconProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to accordionIcon elemenet',
        },
      },
    },
    accordionContentContainerProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to accordionContentContainer elemenet',
        },
      },
    },
    accordionContentTextProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to accordionContentText elemenet',
        },
      },
    },
    heading: {
      table: {
        type: {
          summary: 'Heading',
          detail: 'Pass a string element as header',
        },
      },
    },
    content: {
      table: {
        type: {
          summary: 'Contentn',
          detail: 'Pass a string of content',
        },
      },
    },
  },
};

const template = (args) => <Accordion {...args} />;

export const RegularExample = template.bind({});
RegularExample.args = {
  heading: 'lalala',
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio maiores odio magni quod exercitationem dolor quas nostrum reprehenderit? Maxime reprehenderit aspernatur consequuntur laboriosam provident amet minus ea temporibus, suscipit dolores?',
};

export const WithCustomIcon = template.bind({});
WithCustomIcon.args = {
  heading: 'lalala',
  accordionCounter: FaAddressBook,
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio maiores odio magni quod exercitationem dolor quas nostrum reprehenderit? Maxime reprehenderit aspernatur consequuntur laboriosam provident amet minus ea temporibus, suscipit dolores?',
};
