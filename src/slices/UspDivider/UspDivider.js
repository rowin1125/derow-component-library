import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import cn from 'classnames';

import Container from '../../general/Container';
import Row from '../../general/Row';

import Col from '../../general/Col';
import Card from '../../general/Card';
import Breaker from '../../general/Breaker';

const UspDivider = ({ content, htmlSerializer, iconGenerator, ...rest }) => {
  const bgBrand = content.primary.bg_brand;
  return (
    <div className='w-full usp-divider' {...rest}>
      <Breaker className={cn(bgBrand ? 'text-brand' : 'text-white')} />
      <div className={cn('relative', bgBrand ? 'bg-brand' : 'bg-white')}>
        <Container className='w-full h-full text-gray-100 py-6'>
          <Row centerX>
            {content.fields.map(usp => {
              const Icon = iconGenerator(usp.usp_devider_icon);
              return (
                <Col
                  className='items-start'
                  xs={12}
                  lg={4}
                  key={usp.usp_content[0].text}
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
                            bgBrand ? 'text-brand' : 'text-white',
                          )}
                        />
                      </div>
                    </div>
                    <RichText
                      htmlSerializer={htmlSerializer}
                      render={usp.usp_content}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Breaker
        reverseX
        reverseY
        className={cn(bgBrand ? 'text-brand' : 'text-white')}
      />
    </div>
  );
};

UspDivider.propTypes = {
  content: PropTypes.object.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
  iconGenerator: PropTypes.func.isRequired,
};

export default UspDivider;
