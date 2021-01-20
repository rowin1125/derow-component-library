import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Container from '../../general/Container';
import Row from '../../general/Row';
import Col from '../../general/Col';
import BgOverflow from '../../general/BgOverflow';
import OutsideCard from './OutsideCard';
import InsideCard from './InsideCard';

const HorizontalCard = ({
  className,
  content,
  htmlSerializer,
  imageComponent,
  imageProps,
  link,
  linkResolver,
  ...rest
}) => (
  <BgOverflow
    className={cn({ 'bg-brand': content.primary.bg_brand })}
    type={content.primary.overflow}
  >
    <div className={cn('py-8 lg:py-16 ', className)} {...rest}>
      {content.primary.title && (
        <Container className='mb-10'>
          <Row>
            <Col xs={12} centerX>
              <h2
                className={cn(
                  content.primary.bg_brand && 'text-gray-100',
                  content.primary.overflow && 'text-gray-100',
                )}
              >
                {content.primary.title}
              </h2>
            </Col>
          </Row>
        </Container>
      )}
      {content.fields.map((card, i) => {
        const Element = card.full_width ? 'div' : Container;
        return (
          <Element key={card.title + i.toString()}>
            {card.variant === 'transparent' ? (
              <OutsideCard
                content={content}
                htmlSerializer={htmlSerializer}
                linkResolver={linkResolver}
                link={link}
                card={card}
                imageComponent={imageComponent}
                imageProps={imageProps}
              />
            ) : (
              <InsideCard
                content={content}
                htmlSerializer={htmlSerializer}
                linkResolver={linkResolver}
                link={link}
                card={card}
                imageComponent={imageComponent}
                imageProps={imageProps}
              />
            )}
          </Element>
        );
      })}
    </div>
  </BgOverflow>
);

HorizontalCard.propTypes = {
  className: PropTypes.string,
  content: PropTypes.object.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
  imageComponent: PropTypes.any,
  imageProps: PropTypes.object,
  link: PropTypes.any,
  linkResolver: PropTypes.func.isRequired,
};

export default HorizontalCard;
