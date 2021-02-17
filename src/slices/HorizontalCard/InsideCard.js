import React from 'react';
import cn from 'classnames';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';

import Row from '../../general/Row';
import Col from '../../general/Col';
import Card from '../../general/Card';
import Button from '../../general/Button';

const InsideCard = ({
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
    <Card variant={card.variant} content={content} noMarginBottom>
      <Row>
        <Col
          column
          xs={12}
          lg={8}
          centerX
          className='mt-10 lg:mt-0 text-current'
        >
          <h2>{card.title}</h2>
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
        </Col>
        <Col
          xs={12}
          lg={4}
          centerX
          centerY
          className={cn({
            'order-first mb-0 lg:mb-0 lg:mr-5': card.img_first,
            'lg:mr-10 lg:ml-10': card.full_width && !card.img_first,
            'mt-10 lg:mt-0': card.variant !== 'transparent' && !card.img_first,
          })}
        >
          <div
            className={cn('relative h-64 w-64 flex items-center', {
              'rounded-full': card.round_image,
            })}
          >
            <Image
              className={cn('object-cover', {
                'rounded-full': card.round_image,
                'h-64 w-64': card.round_image && !ImageComponent,
                'order-first mb-0 lg:mb-0 lg:mr-5':
                  card.img_first && !ImageComponent,
                'lg:mr-10 lg:ml-10':
                  card.full_width && !card.img_first && !ImageComponent,
              })}
              src={card.img.url}
              alt={card.img.alt || 'Derow'}
              {...imageProps}
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

InsideCard.propTypes = {
  buttonProps: PropTypes.object,
  card: PropTypes.object.isRequired,
  content: PropTypes.object,
  htmlSerializer: PropTypes.func.isRequired,
  imageComponent: PropTypes.any,
  imageProps: PropTypes.object,
  link: PropTypes.any,
  linkResolver: PropTypes.func.isRequired,
};

export default InsideCard;
