import React, { useState } from 'react';
import Accordion from './Accordion';
import QuestionMark from '../../backup/QuestionMark';

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

const Template = args => {
  const [expanded, setExpanded] = useState(0);
  const data = [
    {
      title: 'Lorem ipsum dolor',
      icon: QuestionMark,
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio maiores odio magni quod exercitationem dolor quas nostrum reprehenderit? Maxime reprehenderit aspernatur consequuntur laboriosam provident amet minus ea temporibus, suscipit dolores?',
    },
  ];
  return (
    <div className='block w-full'>
      {data.map((content, i) => (
        <Accordion
          icon={content.icon}
          title={content.title}
          key={i}
          i={i}
          expanded={expanded}
          setExpanded={setExpanded}
          {...args}
        >
          {content.content}
        </Accordion>
      ))}
    </div>
  );
};

export const RegularExample = Template.bind({});
RegularExample.args = {};

const MultipleTemplate = args => {
  const [expanded, setExpanded] = useState(0);
  const data = [
    {
      title: 'Lorem ipsum dolor',
      icon: QuestionMark,
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio maiores odio magni quod exercitationem dolor quas nostrum reprehenderit? Maxime reprehenderit aspernatur consequuntur laboriosam provident amet minus ea temporibus, suscipit dolores?',
    },
    {
      title: 'Lorem ipsum dolor',
      icon: QuestionMark,
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio maiores odio magni quod exercitationem dolor quas nostrum reprehenderit? Maxime reprehenderit aspernatur consequuntur laboriosam provident amet minus ea temporibus, suscipit dolores?',
    },
    {
      title: 'Lorem ipsum dolor',
      icon: QuestionMark,
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio maiores odio magni quod exercitationem dolor quas nostrum reprehenderit? Maxime reprehenderit aspernatur consequuntur laboriosam provident amet minus ea temporibus, suscipit dolores?',
    },
  ];
  return (
    <div className='block w-full shadow-md'>
      {data.map((content, i) => (
        <Accordion
          data-testid='test-Accordion'
          icon={content.icon}
          title={content.title}
          key={i}
          i={i}
          expanded={expanded}
          setExpanded={setExpanded}
          {...args}
        >
          {content.content}
        </Accordion>
      ))}
    </div>
  );
};

export const Multiple = MultipleTemplate.bind({});
Multiple.args = {};
