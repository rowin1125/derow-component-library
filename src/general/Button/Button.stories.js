import React from 'react';
import Button from './Button';

export default {
  title: 'elements/Button',
  component: Button,
  argTypes: {},
};

const template = args => <Button {...args} />;

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
