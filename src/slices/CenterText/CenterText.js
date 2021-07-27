import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import BgOverflow from '../../general/BgOverflow';
import Container from '../../general/Container';
import Button from '../../general/Button';
import Card from '../../general/Card';
import Row from '../../general/Row';
import Col from '../../general/Col';

const CenterText = ({
  className,
  content,
  htmlSerializer,
  linkResolver,
  containerProps,
  cardProps,
  link,
  ...rest
}) => (
  <BgOverflow
    className={cn({ 'bg-brand': content.primary?.bg_brand }, className)}
    type={content.primary?.overflow}
    {...rest}
  >
    <Container className='py-8 lg:py-16' {...containerProps}>
      <Row centerX>
        <Col xs={12} lg={content.primary.center_text_small ? 10 : 12}>
          <Card variant='transparent' {...cardProps} noMarginBottom>
            <div className=''>
              {content.primary?.center_title && (
                <h2
                  className={cn(
                    content.primary?.bg_brand && 'text-color-light',
                    content.primary?.overflow === 'from_brand' &&
                      'text-color-light',
                    'text-center',
                  )}
                >
                  {content.primary?.center_title}
                </h2>
              )}
              <div
                className={cn(
                  content.primary?.bg_brand && 'text-color-light',
                  'flex justify-center text-center flex-col',
                )}
              >
                <RichText
                  render={content.primary?.center_text}
                  htmlSerializer={htmlSerializer}
                />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      {content.fields && content.fields[0]?.center_button_text && (
        <Row centerX className='my-10'>
          <Col
            centerX
            centerY
            xs={12}
            lg={content.primary.center_text_small ? 10 : 12}
            className='flex-col lg:flex-row'
          >
            {content.fields.map(button => (
              <Button
                as='a'
                link={link}
                fixedWidth
                key={button.center_button_text}
                href={linkResolver(button.center_button_link)}
                variant={button.center_button_variant}
              >
                {button.center_button_text}
              </Button>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  </BgOverflow>
);

CenterText.propTypes = {
  className: PropTypes.string,
  content: PropTypes.object.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
  linkResolver: PropTypes.func.isRequired,
  link: PropTypes.any,
  cardProps: PropTypes.object,
  containerProps: PropTypes.object,
};

export default CenterText;
