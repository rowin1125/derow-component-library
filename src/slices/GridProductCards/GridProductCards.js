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
  linkResolver,
  imageComponent: Image = 'img',
  imageProps,
  ...rest
}) => {
  useEffect(() => {
    if (content.fields.length > 4 || content.fields.length < 2)
      alert('Please provide at least 2 and max 4 cards');
  });
  const needsGrayBg = ['left', 'right'].includes(content.primary.show_gray_box);
  const bgLeft = content.primary.show_gray_box === 'left';

  return (
    <BgOverflow
      className={cn({ 'bg-brand': content.primary?.bg_brand })}
      type={content.primary?.overflow}
      {...rest}
    >
      <Container className='py-8 lg:py-16 w-full relative'>
        {content.primary.product_grid_title && (
          <Row centerX wrap>
            <Col xs={12} lg={12}>
              <Card
                className='z-10'
                noMarginBottom
                content={content}
                variant='transparent'
                cardBodyClass='flex flex-col'
              >
                {content.primary.product_grid_title && (
                  <h2
                    className={cn({
                      'mb-20': needsGrayBg,
                      'text-center': content.primary.product_grid_title_center,
                    })}
                  >
                    {content.primary.product_grid_title}
                  </h2>
                )}
              </Card>
            </Col>
          </Row>
        )}
        {needsGrayBg && (
          <div
            className={cn(
              'hidden lg:block absolute bg-secondary w-6/12 h-64 my-10 top-0 transform translate-y-24',
              bgLeft ? 'left-0 -translate-x-16' : 'right-0 translate-x-16',
            )}
          ></div>
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
                  className='relative my-6 lg:my-0 w-full h-full rounded-t-lg transform ease-in-out duration-300 lg:mx-5 lg:hover:scale-105'
                  link={Link}
                  href={linkResolver(card.product_link._meta)}
                >
                  <div className='relative h-100 w-full'>
                    <Image
                      className='object-cover w-full h-full'
                      src={card.product_image.url}
                      {...imageProps}
                    />
                  </div>
                  {card.product_title && (
                    <div className='flex w-full justify-center mt-4'>
                      <h3>{card.product_title}</h3>
                    </div>
                  )}
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
  imageComponent: PropTypes.any,
  imageProps: PropTypes.object,
  link: PropTypes.any,
  linkResolver: PropTypes.func.isRequired,
};

export default GridProductCards;
