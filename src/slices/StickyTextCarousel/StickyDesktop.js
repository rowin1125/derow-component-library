import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Row from '../../general/Row';
import Col from '../../general/Col';
import Container from '../../general/Container';
import { RichText } from 'prismic-reactjs';

const StickyDesktop = ({ content, htmlSerializer, bgBrand }) => {
  return (
    <div className='hidden lg:block'>
      <div className={cn('h-full', bgBrand ? 'bg-brand' : 'bg-white')}>
        <Container
          className={cn('pt-20 pb-20', bgBrand ? 'text-white' : 'text-brand')}
        >
          {content.primary.sticky_title && (
            <h2 className='text-center'>{content.primary.sticky_title}</h2>
          )}
          <Row className='relative h-full '>
            <Col xs={4} column>
              <div
                className={cn(
                  'sticky',
                  bgBrand ? 'text-secondary' : 'text-blue-100',
                )}
                style={{ top: '150px' }}
              >
                {content.fields.map((pitch, index) => (
                  <div
                    key={pitch.item_title + index}
                    className={`my-10 text-container-${index} transform transition-all ease-in-out duration-500`}
                  >
                    <h4 className='font-bold text-2xl'>{pitch.item_title}</h4>
                    <RichText
                      render={pitch.item_content}
                      htmlSerializer={htmlSerializer}
                    />
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={8} column>
              {content.fields.map((pitch, index) => (
                <div
                  key={pitch.sticky_image.url + index}
                  className='relative h-screen-1/2 flex justify-center items-end image my-10'
                >
                  <img
                    className='w-auto h-full'
                    src={pitch.sticky_image.url}
                    alt={pitch.sticky_image.alt || 'Derow'}
                  />
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

StickyDesktop.propTypes = {
  bgBrand: PropTypes.bool,
  content: PropTypes.object.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
};

export default StickyDesktop;
