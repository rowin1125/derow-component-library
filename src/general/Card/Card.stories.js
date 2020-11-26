/* eslint-disable max-len */
import React from 'react';
import Card from './Card';

export default {
  title: 'elements/Card',
  component: Card,
  argTypes: {
    as: {
      control: {
        type: 'inline-radio',
        options: ['a', 'div'],
      },
    },
    centerX: {
      control: {
        type: 'boolean',
      },
    },
    textCenter: {
      control: {
        type: 'boolean',
      },
    },
    centerY: {
      control: {
        type: 'boolean',
      },
    },
    hover: {
      control: {
        type: 'boolean',
      },
    },
    noGutter: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const template = args => <Card {...args} />;

export const DefaultCard = template.bind({});
DefaultCard.args = {
  children: 'Im a default (variant: "transparent") transparant Card 💳',
};

export const CardPrimary = template.bind({});
CardPrimary.args = {
  variant: 'primary',
  children: 'Im a Primary Card 💳',
};

export const CardSecondary = template.bind({});
CardSecondary.args = {
  variant: 'secondary',
  children: 'Im a Primary Card 💳',
};

export const CardTransparent = template.bind({});
CardTransparent.args = {
  variant: 'transparent',
  children: 'Im a Transparent Card 💳',
};

export const CardWithOpacity = template.bind({});
CardWithOpacity.args = {
  variant: 'secondary',
  opacity: 50,
  children: 'Im 50% visible :)',
};

const imageUrl =
  'https://aparthotelsberwang.at/wp-content/uploads/2016/02/meer-berwang-uitzicht-bergen-tirol-oostenrijk-zugspitz-arena-zomervakantie-600x400.jpg';

export const CardWithImage = template.bind({});
CardWithImage.args = {
  variant: 'primary',
  image: imageUrl,
  children: (
    <div>
      <h2>Im a Card with a Img Header</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem tempore harum corporis expedita!
        Non, magni reiciendis! Sint hic voluptate recusandae doloribus illum voluptatem facere, eveniet laboriosam
        dolore expedita a.
      </p>{' '}
    </div>
  ),
};

export const CardWithTitle = template.bind({});
CardWithTitle.args = {
  variant: 'primary',
  title: 'Title here',
  image: imageUrl,
  children: (
    <div>
      <h2>Im a Card with a Img Header and title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem tempore harum corporis expedita!
        Non, magni reiciendis! Sint hic voluptate recusandae doloribus illum voluptatem facere, eveniet laboriosam
        dolore expedita a.
      </p>{' '}
    </div>
  ),
};

export const CardWithAuthorDetails = template.bind({});
CardWithAuthorDetails.args = {
  variant: 'primary',
  textCenter: true,
  image: imageUrl,
  author: {
    name: 'Rowin',
    picture: {
      url:
        'https://images.prismic.io/derow/b2db1c61-34c4-4453-a5f8-1528fb2f1097_rowin.jpg?auto=compress,format&rect=466,0,1000,1000&w=250&h=250',
    },
  },
  children: (
    <div>
      <h2>Im a Card with a author details</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem tempore harum corporis expedita!
        Non, magni reiciendis! Sint hic voluptate recusandae doloribus illum voluptatem facere, eveniet laboriosam
        dolore expedita a.
      </p>{' '}
    </div>
  ),
};
