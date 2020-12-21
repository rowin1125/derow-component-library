import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Container from '../../general/Container';
import Row from '../../general/Row';
import Col from '../../general/Col';
import Animate from '../../general/Animate';
import Card from '../../general/Card';
import Button from '../../general/Button';

const HorizontalCard = ({
  content,
  htmlSerializer,
  linkResolver,
  className,
  ...rest
}) => (
  <div className={cn('my-10 lg:my-20', className)} {...rest}>
    <Container className='mb-10'>
      <Row>
        <Col xs={12} centerX>
          <h2>{content.primary.title}</h2>
        </Col>
      </Row>
    </Container>
    {content.fields.map((card, i) => {
      const Element = card.full_width ? 'div' : Container;
      return (
        <Element key={card.title + i.toString()}>
          <Animate origin={card.animate_origin}>
            <Row>
              <Col
                xs={12}
                lg={6}
                centerY
                className={cn('text-gray-900 mb-10 lg:mb-0')}
              >
                <Card variant={card.variant}>
                  <h2 className={cn({ 'text-center': card.title_center })}>
                    {card.title}
                  </h2>
                  <div className={cn({ 'text-center': card.text_center })}>
                    <RichText
                      render={card.body1}
                      htmlSerializer={htmlSerializer}
                    />
                    {card.show_action_button && (
                      <Button
                        className='mt-4'
                        variant='primary'
                        href={linkResolver(card.call_to_action_link._meta)}
                      >
                        {card.action_button_text}
                      </Button>
                    )}
                  </div>
                </Card>
              </Col>
              <Col
                xs={12}
                lg={6}
                className={cn(
                  {
                    'order-first mb-10 lg:mb-0': card.img_first,
                    'lg:mr-10': card.full_width && !card.img_first,
                    'lg:ml-10': card.full_width && !card.img_first,
                  },
                  'text-white',
                )}
              >
                <img
                  src={card.img.url}
                  alt={card.img.alt || 'Teygo'}
                  className={cn(
                    card.image_large
                      ? 'w-full h-full lg:w-500 lg:h-650 object-contain'
                      : 'w-full object-cover',
                  )}
                />
              </Col>
            </Row>
          </Animate>
        </Element>
      );
    })}
  </div>
);

HorizontalCard.propTypes = {
  className: PropTypes.string,
  htmlSerializer: PropTypes.func.isRequired,
  linkResolver: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
};

export default HorizontalCard;
