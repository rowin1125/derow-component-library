import React from 'react';
import ButtonLink from './ButtonLink';

export default {
  title: 'elements/ButtonLink',
  component: ButtonLink,
  argTypes: {},
};

const template = args => <ButtonLink {...args} />;
const tertairyTemplate = args => (
  <div className='bg-brand p-10 flex flex-col items-center'>
    <p className='pb-10'>This big bluie square is just to show the white variant</p>
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
