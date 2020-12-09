import React from 'react';
import Accordion from './Accordion';
import { FaAddressBook } from 'react-icons/fa';

export default {
  title: 'elements/Accordion',
  component: Accordion,
  argTypes: {},
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
