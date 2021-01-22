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
  ${props =>
    props.image && !props.ImageComponent
      ? `background-image: url('${props.image}')`
      : ''};
  background-position: center;
  background-size: cover;
  filter: blur(3px);
`;

const UspDivider = ({
  content,
  htmlSerializer,
  iconGenerator,
  className,
  imageComponent: ImageComponent,
  ...rest
}) => {
  const bgBrand = content.primary.bg_brand;
  const image = content.primary?.usp_devider_image?.url;
  return (
    <div
      className={cn(
        'w-full usp-divider pt-32 pb-16',
        content.primary.all_bg_brand && 'bg-brand',
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          'relative transform -skew-x-3 -rotate-3 py-14 shadow-3xl',
          bgBrand ? 'bg-brand' : 'bg-white',
        )}
      >
        <UspDividerImageOverlay
          imageComponent={ImageComponent}
          className='inset-0 w-full h-full absolute'
          image={image}
        >
          {ImageComponent && (
            <ImageComponent
              src={image}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          )}
        </UspDividerImageOverlay>
        <div
          className={cn(
            'opacity-20 z-10 absolute inset-0 w-full h-full',
            bgBrand ? 'bg-brand' : 'bg-white',
          )}
        ></div>
        <Container className='w-full h-full text-gray-100 py-6 rotate-3 skew-x-3 transform relative z-max'>
          <Row centerX>
            {content.fields.map(usp => {
              const Icon = iconGenerator(usp.usp_devider_icon);
              return (
                <Col
                  className='items-start'
                  xs={12}
                  lg={4}
                  key={`usp-${usp.usp_devider_icon}`}
                >
                  <Card
                    content={content}
                    variant='transparent'
                    cardBodyClass='text-center'
                    centerX
                    centerY
                    noMarginBottom
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
  className: PropTypes.string,
  content: PropTypes.object.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
  iconGenerator: PropTypes.func.isRequired,
  imageComponent: PropTypes.any,
};

export default UspDivider;
