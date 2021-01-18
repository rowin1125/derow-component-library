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

const Hero = ({ children, image, blur, showWave, slim, ...rest }) => (
  <div className='relative w-full h-120 flex items-center'>
    <HeroWrapepr
      blur={blur}
      image={image}
      showWave={showWave}
      className='Hero inset-0 absolute flex bg-cover bg-center'
      data-testid='hero-component'
      {...rest}
    ></HeroWrapepr>
    {showWave && <HeroWaves />}
    <Container className={cn(slim && 'lg:px-64')}>
      <Card
        variant='primary'
        opacity={80}
        noMarginBottom
        cardBodyClass='text-center'
      >
        {children}
      </Card>
    </Container>
  </div>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  blur: PropTypes.bool,
  showWave: PropTypes.bool,
  slim: PropTypes.bool,
};

export default Hero;
