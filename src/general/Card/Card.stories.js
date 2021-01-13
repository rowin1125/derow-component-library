/* eslint-disable max-len */
import React from 'react';
import Col from '../Col';
import Row from '../Row';
import Card from './Card';

export default {
  title: 'elements/Card',
  component: Card,
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['a', 'div', 'button', 'span'],
      },
      table: {
        type: {
          summary: 'Html element',
          detail: 'Specify which html you like the button to be',
        },
      },
    },
    centerX: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'Center horizontal',
          detail: 'Center the content horizontal inside the card',
        },
      },
    },
    textCenter: {
      control: {
        type: 'boolean',
      },
      type: {
        summary: 'Text center',
        detail: 'Center the text',
      },
    },
    centerY: {
      control: {
        type: 'boolean',
      },
      type: {
        summary: 'Center verticaly',
        detail: 'Center the content verticaly inside the card',
      },
    },
    hover: {
      control: {
        type: 'boolean',
      },
      type: {
        summary: 'Activate hover',
        detail:
          'Will trigger a hover effect which will make you click (combine with as: <a>)',
      },
    },
    noGutter: {
      control: {
        type: 'boolean',
      },
      type: {
        summary: 'No gutter..',
        detail: 'No gutters for small devices to make element look more clean',
      },
    },
    opacity: {
      control: {
        type: 'select',
        options: [25, 50, 75],
      },
      type: {
        summary: 'Define opacity',
        detail: 'Select an opacity of the card (25/50/75)',
      },
    },
    children: {
      type: {
        summary: 'Content',
        detail: 'Content inside the Card',
      },
    },

    cardAuthorWrapperProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to cardAuthorWrapperProps elemenet',
        },
      },
    },
    cardBodyClass: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to cardBodyClass elemenet',
        },
      },
    },
    cardBodyWrapperProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to cardBodyWrapperProps elemenet',
        },
      },
    },
    cardTitleWrapperProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to cardTitleWrapperProps elemenet',
        },
      },
    },
    cardWrapperProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to cardWrapperProps elemenet',
        },
      },
    },
    imageWrapperProps: {
      table: {
        defaultValue: { summary: '{}' },
        type: {
          summary: 'props for element',
          detail: 'Pass properties to imageWrapperProps elemenet',
        },
      },
    },
  },
};

const template = args => (
  <Row centerX>
    <Col centerX centerY xs={12} lg={4}>
      <Card {...args} />
    </Col>
  </Row>
);

export const DefaultCard = template.bind({});
DefaultCard.args = {
  children: 'Im a default (variant: "primary") primary Card 💳',
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
        exercitationem tempore harum corporis expedita! Non, magni reiciendis!
        Sint hic voluptate recusandae doloribus illum voluptatem facere, eveniet
        laboriosam dolore expedita a.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
        exercitationem tempore harum corporis expedita! Non, magni reiciendis!
        Sint hic voluptate recusandae doloribus illum voluptatem facere, eveniet
        laboriosam dolore expedita a.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
        exercitationem tempore harum corporis expedita! Non, magni reiciendis!
        Sint hic voluptate recusandae doloribus illum voluptatem facere, eveniet
        laboriosam dolore expedita a.
      </p>{' '}
    </div>
  ),
};
