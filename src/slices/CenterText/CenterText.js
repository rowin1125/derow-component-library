import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import BgOverflow from '../../general/BgOverflow';
import Container from '../../general/Container';
import Card from '../../general/Card';

const CenterText = ({
  content,
  htmlSerializer,
  containerProps,
  cardProps,
  ...rest
}) => (
  <BgOverflow
    className={cn({ 'bg-brand': content.primary?.bg_brand })}
    type={content.primary?.overflow}
    {...rest}
  >
    <Container {...containerProps}>
      <Card variant='transparent' {...cardProps}>
        <div className='my-20'>
          {content.primary?.center_title && (
            <h2
              className={cn(
                content.primary?.bg_brand && 'text-white',
                content.primary?.overflow === 'from_brand' && 'text-white',
                'lg:text-center',
              )}
            >
              {content.primary?.center_title}
            </h2>
          )}
          <div
            className={cn(
              content.primary?.bg_brand && 'text-white',
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
    </Container>
  </BgOverflow>
);

CenterText.propTypes = {
  content: PropTypes.object.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
  cardProps: PropTypes.object,
  containerProps: PropTypes.object,
};

export default CenterText;
