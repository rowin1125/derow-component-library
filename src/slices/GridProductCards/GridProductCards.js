/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Row from '../../general/Row';
import Container from '../../general/Container';
import Col from '../../general/Col';
import Card from '../../general/Card';
import BgOverflow from '../../general/BgOverflow';
import { calculateCols } from './helpers';
import LinkHandler from '../UspCard/LinkHandler';

const GridProductCards = ({
  content,
  link: Link = 'a',
  htmlSerializer,
  iconGenerator,
  linkResolver,
  imageComponent: Image = 'img',
  imageProps,
  ...rest
}) => {
  useEffect(() => {
    if (content.fields.length > 4 || content.fields.length < 2)
      alert('Please provide at least 2 and max 4 cards');
  });

  return (
    <BgOverflow
      className={cn({ 'bg-brand': content.primary?.bg_brand })}
      type={content.primary?.overflow}
      {...rest}
    >
      <Container className='py-8 lg:py-16 w-full'>
        {content.primary.product_grid_title && (
          <Row centerX className={cn('my-10')} wrap>
            <Col xs={12} lg={12}>
              <Card
                noMarginBottom
                content={content}
                variant='transparent'
                cardBodyClass='flex flex-col'
              >
                {content.primary.product_grid_title && (
                  <h2
                    className={cn(
                      content.primary.product_grid_title_center &&
                        'text-center',
                    )}
                  >
                    {content.primary.product_grid_title}
                  </h2>
                )}
              </Card>
            </Col>
          </Row>
        )}
        <Row>
          {content?.fields.map((card, i) => {
            return (
              <Col
                xs={12}
                lg={calculateCols(content?.fields)}
                key={card.product_title}
                className='mb-10 lg:my-0'
              >
                <LinkHandler
                  className='relative my-6 lg:my-0 w-full h-100 rounded-t-lg transform ease-in-out duration-300 lg:mx-5 lg:hover:scale-105'
                  link={Link}
                  href={linkResolver(card.product_link._meta)}
                >
                  <Image
                    className='object-cover w-full h-full'
                    src={card.product_image.url}
                    {...imageProps}
                  />
                  <div className='flex w-full justify-center mt-4'>
                    <h3>{card.product_title}</h3>
                  </div>
                </LinkHandler>
              </Col>
            );
          })}
        </Row>
      </Container>
    </BgOverflow>
  );
};

GridProductCards.propTypes = {
  content: PropTypes.object.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
  iconGenerator: PropTypes.func.isRequired,
  imageComponent: PropTypes.any,
  imageProps: PropTypes.object,
  link: PropTypes.any,
  linkResolver: PropTypes.func.isRequired,
};

export default GridProductCards;
