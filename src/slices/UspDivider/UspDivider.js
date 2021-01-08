import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import cn from 'classnames';

import Container from '../../general/Container';
import Row from '../../general/Row';

import Col from '../../general/Col';
import Card from '../../general/Card';
import styled from 'styled-components';

const UspDividerImageOverlay = styled.div`
  ${props => (props.image ? `background-image: url('${props.image}')` : '')};
  background-position: center;
  background-size: cover;
  filter: blur(3px);
`;

const UspDivider = ({ content, htmlSerializer, iconGenerator, ...rest }) => {
  const bgBrand = content.primary.bg_brand;
  const image = content.primary?.usp_devider_image?.url;
  return (
    <div className='w-full usp-divider mt-32 mb-20' {...rest}>
      <div
        className={cn(
          'relative transform -skew-x-3 -rotate-3 py-14 shadow-3xl',
          bgBrand ? 'bg-brand' : 'bg-white',
        )}
      >
        <UspDividerImageOverlay
          className='inset-0 w-full h-full absolute'
          image={image}
        />
        <div
          className={cn(
            'opacity-20 z-10 absolute inset-0 w-full h-full',
            bgBrand ? 'bg-brand' : 'bg-white',
          )}
        ></div>
        <Container className='w-full h-full text-gray-100 py-6 rotate-3 skew-x-3 transform relative z-max mt-4'>
          <Row centerX>
            {content.fields.map(usp => {
              const Icon = iconGenerator(usp.usp_devider_icon);
              return (
                <Col
                  className='items-start'
                  xs={12}
                  lg={4}
                  key={`usp-${usp.usp_content[0].text}`}
                >
                  <Card
                    content={content}
                    variant='transparent'
                    cardBodyClass='px-10 text-center'
                    centerX
                    centerY
                  >
                    <div className='flex justify-center items-center'>
                      <div
                        className={cn(
                          'flex justify-center items-center h-24 w-24 rounded-full',
                          bgBrand ? 'bg-white' : 'bg-brand',
                        )}
                      >
                        <Icon
                          className={cn(
                            'text-6xl',
                            bgBrand ? 'text-brand' : 'text-gray-100',
                          )}
                        />
                      </div>
                    </div>
                    <div
                      className={cn(bgBrand ? 'text-gray-100' : 'text-brand')}
                    >
                      <RichText
                        htmlSerializer={htmlSerializer}
                        render={usp.usp_content}
                      />
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

UspDivider.propTypes = {
  content: PropTypes.object.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
  iconGenerator: PropTypes.func.isRequired,
};

export default UspDivider;
