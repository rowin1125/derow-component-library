import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';
import Card from '../Card';
import HeroWaves from './HeroWaves';

const HeroWrapepr = styled.div`
  ${p => !p.imageComponent && `background-image: url(${p.image})`};
  ${p => (p.blur ? 'filter: blur(2px)' : '')};
  ${p => p.showWave && 'height: calc(100% - 4px);'}
`;

const Hero = ({
  blur,
  children,
  className,
  imageComponent: ImageComponent,
  image,
  offset = true,
  showWave,
  cardprops,
  containerProps,
  heroWrapperProps,
  ...rest
}) => {
  return (
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
        imageComponent={ImageComponent}
        {...heroWrapperProps}
      >
        {ImageComponent && (
          <ImageComponent
            src={image}
            loading='eager'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        )}
        {showWave && <HeroWaves />}
      </HeroWrapepr>

      <Container {...containerProps}>
        <Card
          variant='primary'
          opacity={80}
          noMarginBottom
          className='relative'
          cardBodyClass='text-center'
          {...cardprops}
        >
          {children}
        </Card>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  blur: PropTypes.bool,
  cardprops: PropTypes.object,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerProps: PropTypes.object,
  heroWrapperProps: PropTypes.object,
  image: PropTypes.string.isRequired,
  imageComponent: PropTypes.any,
  offset: PropTypes.bool,
  showWave: PropTypes.bool,
};

export default Hero;
