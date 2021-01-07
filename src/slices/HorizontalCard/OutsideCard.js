import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Row from '../../general/Row';
import Col from '../../general/Col';
import Card from '../../general/Card';
import Button from '../../general/Button';

const OutsideCard = ({ card, htmlSerializer, linkResolver, link, content }) => {
  return (
    <Row>
      <Col
        xs={12}
        lg={card.round_image || card.text_large ? 8 : 6}
        centerY
        className={cn('text-current mb-10 lg:mb-0')}
      >
        <Card
          variant={card.variant}
          content={content}
          className={cn(card.img_first && 'pl-4')}
        >
          <h2 className={cn({ 'text-center': card.title_center })}>
            {card.title}
          </h2>
          <div className={cn({ 'text-center': card.text_center })}>
            <RichText render={card.body1} htmlSerializer={htmlSerializer} />
            {card.action_button_text && (
              <Button
                link={link}
                className='mt-4'
                variant={card.button_variant}
                href={linkResolver(card.call_to_action_link._meta)}
                fixedWidth
              >
                {card.action_button_text}
              </Button>
            )}
          </div>
        </Card>
      </Col>
      <Col
        xs={12}
        lg={card.round_image || card.text_large ? 4 : 6}
        className={cn(
          'text-white mb-10 lg:mb-0',
          {
            'lg:mr-10': card.full_width && !card.img_first,
            'lg:ml-10': card.full_width && !card.img_first,
          },
          card.img_first ? 'order-first' : 'order-first lg:order-last',
        )}
        centerX
        centerY
      >
        <img
          src={card.img.url}
          alt={card.img.alt || 'Derow'}
          className={cn(
            card.image_large
              ? 'w-full h-full lg:w-500 lg:h-650 object-contain'
              : 'object-cover',
            { 'rounded-full w-64 h-64': card.round_image },
          )}
        />
      </Col>
    </Row>
  );
};

OutsideCard.propTypes = {
  card: PropTypes.object.isRequired,
  content: PropTypes.object,
  htmlSerializer: PropTypes.func.isRequired,
  link: PropTypes.any,
  linkResolver: PropTypes.func.isRequired,
};

export default OutsideCard;
