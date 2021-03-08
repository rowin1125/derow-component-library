import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Row from '../../general/Row';
import Col from '../../general/Col';
import Card from '../../general/Card';
import Button from '../../general/Button';

import { calculateWidth } from './helpers';
import ShowNextImage from './showImages/ShowNextImage';
import ShowRegularImage from './showImages/ShowRegularImage';

const OutsideCard = ({
  buttonProps,
  card,
  content,
  htmlSerializer,
  imageComponent: ImageComponent,
  imageProps,
  link,
  linkResolver,
}) => {
  const Image = ImageComponent ? ImageComponent : 'img';
  return (
    <Row>
      <Col
        xs={12}
        lg={calculateWidth(true, card.layout)}
        centerY
        className={cn('text-current mb-10 lg:mb-0')}
      >
        <Card
          noMarginBottom
          variant={card.variant || 'transparent'}
          content={content}
          className={cn(card.img_first && 'lg:pl-4')}
        >
          <h2 className={cn({ 'text-center': card.title_center })}>
            {card.title}
          </h2>
          <div className={cn({ 'text-center': card.text_center })}>
            {card.body1 && (
              <RichText render={card.body1} htmlSerializer={htmlSerializer} />
            )}
            {card.action_button_text && (
              <Button
                link={link}
                className='mt-4'
                variant={card.button_variant}
                href={linkResolver(card.call_to_action_link._meta)}
                fixedWidth
                {...buttonProps}
              >
                {card.action_button_text}
              </Button>
            )}
          </div>
        </Card>
      </Col>
      <Col
        xs={12}
        lg={calculateWidth(false, card.layout)}
        className={cn(
          'text-color-light mb-10 lg:mb-0',
          {
            'lg:mr-10': card.full_width && !card.img_first,
            'lg:ml-10': card.full_width && !card.img_first,
          },
          card.img_first ? 'order-first' : 'order-first lg:order-last',
        )}
        centerX
        centerY
      >
        <div
          className={cn(
            'relative flex items-center',
            card.round_image ? 'rounded-full w-64 h-64' : 'w-full',
            card.bg_square && !card.img_first && 'justify-end',
            card.image_large ? 'h-100 lg:h-650' : 'h-full lg:h-100',
          )}
        >
          {card.bg_square ? (
            <>
              {ImageComponent ? (
                <ShowNextImage
                  card={card}
                  image={Image}
                  imageComponent={ImageComponent}
                  {...imageProps}
                />
              ) : (
                <ShowRegularImage
                  card={card}
                  image={Image}
                  imageComponent={ImageComponent}
                  {...imageProps}
                />
              )}
            </>
          ) : (
            <Image
              className={cn('object-cover', {
                'rounded-full w-64 h-64': card.round_image,
                'w-full h-100 lg:h-650': card.image_large,
                'w-full': card.layout === 'large_image',
              })}
              src={card.img.url}
              alt={card.img.alt || 'Derow'}
              {...imageProps}
            />
          )}
        </div>
      </Col>
    </Row>
  );
};

OutsideCard.propTypes = {
  buttonProps: PropTypes.object,
  card: PropTypes.object.isRequired,
  content: PropTypes.object,
  htmlSerializer: PropTypes.func.isRequired,
  imageComponent: PropTypes.any,
  imageProps: PropTypes.object,
  link: PropTypes.any,
  linkResolver: PropTypes.func.isRequired,
};

export default OutsideCard;

{
  /* <Image
  className={cn(
    'object-cover w-full lg:w-80 h-full z-10 relative lg:mb-44',
    card.img_first ? 'lg:ml-24' : 'lg:mr-24',
    {
      'rounded-full': card.round_image,
      'h-full lg:h-650': card.image_large && !ImageComponent,
    },
  )}
  src={card.img.url}
  alt={card.img.alt || 'Derow'}
  {...imageProps}
/>
<div
  className={cn(
    'hidden lg:block absolute bg-secondary w-11/12 h-4/5 my-10 top-0',
    card.img_first ? 'left-0' : 'right-0',
  )}
></div> */
}
