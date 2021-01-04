import React, { useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Breaker from '../../general/Breaker';

import { initializeGsapStickyScroll } from './stickyTextCarouselHelper';
import StickyMobile from './StickyMobile';
import StickyDesktop from './StickyDesktop';

gsap.registerPlugin(ScrollTrigger);

const StickyTextCoursel = ({ content, htmlSerializer, ...rest }) => {
  const bgBrand = content.primary.bg_brand;
  useEffect(() => {
    initializeGsapStickyScroll(gsap, ScrollTrigger, bgBrand);
  });
  return (
    <div {...rest}>
      {content.primary.show_wave && (
        <Breaker
          variant='wave'
          className={cn(bgBrand ? 'text-brand' : 'text-white')}
        />
      )}
      <StickyMobile
        bgBrand={bgBrand}
        content={content}
        htmlSerializer={htmlSerializer}
      />
      <StickyDesktop
        bgBrand={bgBrand}
        content={content}
        htmlSerializer={htmlSerializer}
      />
      {content.primary.show_diagonal && (
        <Breaker
          className={cn(bgBrand ? 'text-brand' : 'text-white')}
          reverseX
          reverseY
        />
      )}
    </div>
  );
};

StickyTextCoursel.propTypes = {
  content: PropTypes.object.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
};

export default StickyTextCoursel;
