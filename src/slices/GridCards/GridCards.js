/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { RichText } from 'prismic-reactjs';

import Row from '../../general/Row';
import Container from '../../general/Container';
import Col from '../../general/Col';
import Card from '../../general/Card';
import Button from '../../general/Button';
import BgOverflow from '../../general/BgOverflow';

const GridCards = ({
  content,
  link,
  htmlSerializer,
  iconGenerator,
  linkResolver,
  ...rest
}) => {
  useEffect(() => {
    if (content.fields.length > 3) alert('Niet meer dan 3 cards please :)');
  });

  return (
    <BgOverflow
      className={cn({ 'bg-brand': content.primary?.bg_brand })}
      type={content.primary?.overflow}
      {...rest}
    >
      <Container className='py-8 lg:py-16'>
        <Row centerX className={cn('my-10')}>
          {(content.primary.grid_header ||
            content.primary.grid_description) && (
            <Col xs={12} lg={12} centerX>
              <Card
                noMarginBottom
                content={content}
                variant='transparent'
                cardBodyClass='flex flex-col items-center'
              >
                {content.primary.grid_header && (
                  <h2 className='text-center'>{content.primary.grid_header}</h2>
                )}
                {content.primary.grid_description && (
                  <div className='text-center'>
                    <RichText
                      render={content.primary.grid_description}
                      htmlSerializer={htmlSerializer}
                    />
                  </div>
                )}
              </Card>
            </Col>
          )}
        </Row>
        <Row>
          {content?.fields.map((card, i) => {
            const Icon = iconGenerator(card?.grid_col_icon);
            const cardVariantSecondary =
              card.grid_col_card_variant === 'secondary';
            let marginClass;
            switch (i) {
              case 0:
                marginClass = 'lg:mr-5';
                break;

              case 1:
                marginClass = 'lg:mx-5';
                break;

              case 2:
                marginClass = 'lg:ml-5';
                break;

              default:
                marginClass = 'lg:mx-5';
            }
            return (
              <Col
                xs={12}
                lg={4}
                key={card.grid_col_content[0].text}
                className='mb-10 lg:my-0'
              >
                <Card
                  size='small'
                  image={card.grid_col_img.url}
                  variant={card.grid_col_card_variant}
                  title={card.grid_col_image_title ?? null}
                  className={marginClass}
                  centerX
                  noMarginBottom
                >
                  <div className='h-full flex flex-col justify-between items-center'>
                    <div className='flex flex-col items-center'>
                      {card?.grid_col_icon && (
                        <Icon
                          className={cn(
                            cardVariantSecondary
                              ? 'text-gray-100'
                              : 'text-brand',
                            'text-6xl mb-6',
                          )}
                        />
                      )}
                      <div className='mb-6'>
                        <RichText
                          render={card.grid_col_content}
                          htmlSerializer={htmlSerializer}
                        />
                      </div>
                    </div>
                    {card.grid_col_link_text && (
                      <Button
                        as='a'
                        link={link}
                        target={card.grid_col_link?.target ?? null}
                        href={linkResolver(card.grid_col_link)}
                        className='w-full'
                        variant={card.grid_col_link_variant}
                      >
                        {card.grid_col_link_text}
                      </Button>
                    )}
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </BgOverflow>
  );
};

GridCards.propTypes = {
  content: PropTypes.object.isRequired,
  link: PropTypes.any,
  htmlSerializer: PropTypes.func.isRequired,
  iconGenerator: PropTypes.func.isRequired,
  linkResolver: PropTypes.func.isRequired,
};

export default GridCards;
