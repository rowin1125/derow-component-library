/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-return-assign */
import React, { useEffect, useRef } from 'react';
import { Power3, gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PropTypes from 'prop-types';
import cn from 'classnames';

gsap.registerPlugin(ScrollTrigger);

const Animate = ({ origin, children, duration = 1, className, ...rest }) => {
  if (!origin)
    return (
      <div
        className={cn(origin, `custom-duration-${duration}`, className)}
        {...rest}
      >
        {children}
      </div>
    );

  let container = useRef(null);
  const isHorizontal = origin === 'left' || origin === 'right';
  const isVertical = origin === 'top' || origin === 'bottom';
  const ORIGINS = {
    top: -200,
    right: 200,
    bottom: 200,
    left: -200,
  };

  useEffect(() => {
    gsap.from(container, {
      duration,
      autoAlpha: 0,
      x: `${isHorizontal ? ORIGINS[origin] : ''}`,
      y: `${isVertical ? ORIGINS[origin] : ''}`,
      transformOrigin: '0% 100%',
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: container,
        start: 'top 900',
        toggleActions: 'play none none reverse',
      },
    });
  });

  return (
    <div
      ref={el => (container = el)}
      className={cn(origin, `custom-duration-${duration}`, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

Animate.propTypes = {
  animate: PropTypes.bool,
  duration: PropTypes.number,
  origin: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Animate;
