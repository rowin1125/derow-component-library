import React from 'react';
import cn from 'classnames';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';

import Row from '../../general/Row';
import Col from '../../general/Col';
import Card from '../../general/Card';
import Button from '../../general/Button';

const InsideCard = ({ card, htmlSerializer, linkResolver, link, content }) => {
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
        </Col>
        <Col
          xs={12}
          lg={4}
          centerX
          centerY
          className={cn({
            'order-first mb-0 lg:mb-0': card.img_first,
            'lg:mr-10': card.full_width && !card.img_first,
            'lg:ml-10': card.full_width && !card.img_first,
          })}
        >
          <img
            className={cn('object-cover h-64 w-64', {
              'rounded-full': card.round_image,
            })}
            src={card.img.url}
            alt={card.img.alt || 'Derow'}
          />
        </Col>
      </Row>
    </Card>
  );
};

InsideCard.propTypes = {
  card: PropTypes.object.isRequired,
  content: PropTypes.object,
  htmlSerializer: PropTypes.func.isRequired,
  link: PropTypes.any,
  linkResolver: PropTypes.func.isRequired,
};

export default InsideCard;
