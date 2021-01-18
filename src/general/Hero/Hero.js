import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';
import Card from '../Card';
import HeroWaves from './HeroWaves';

const HeroWrapepr = styled.div`
  background-image: ${p => `url(${p.image})`};
  ${p => (p.blur ? 'filter: blur(2px)' : '')};
  ${p => p.showWave && 'height: calc(100% - 4px);'}
`;

const Hero = ({
  blur,
  children,
  className,
  image,
  offset = true,
  showWave,
  slim,
  cardprops,
  containerProps,
  heroWrapperProps,
  ...rest
}) => (
  <div
    className={cn(
      'Hero relative w-full h-120 flex items-center',
      offset && 'mt-20',
      className,
    )}
    {...rest}
  >
    <HeroWrapepr
      blur={blur}
      image={image}
      showWave={showWave}
      className='inset-0 absolute flex bg-cover bg-center'
      {...heroWrapperProps}
    ></HeroWrapepr>
    {showWave && <HeroWaves />}
    <Container className={cn(slim && 'lg:px-64')} {...containerProps}>
      <Card
        variant='primary'
        opacity={80}
        noMarginBottom
        cardBodyClass='text-center'
        {...cardprops}
      >
        {children}
      </Card>
    </Container>
  </div>
);

Hero.propTypes = {
  blur: PropTypes.bool,
  cardprops: PropTypes.object,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerProps: PropTypes.object,
  heroWrapperProps: PropTypes.object,
  image: PropTypes.string.isRequired,
  offset: PropTypes.bool,
  showWave: PropTypes.bool,
  slim: PropTypes.bool,
};

export default Hero;
