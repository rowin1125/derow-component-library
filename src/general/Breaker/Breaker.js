import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Diagonal from './variants/Diagonal';
import Wave from './variants/Wave';

const BreakerWrapper = styled.div`
  ${props => (props.reverseX ? 'transform:  rotateX(180deg)' : '')};
  ${props => (props.reverseY ? 'transform:  rotateY(180deg)' : '')};
  ${props =>
    props.doubleReverse ? 'transform:  rotateY(180deg) rotateX(180deg)' : ''};

  top: 0px;
`;

const SVG_VARIANTS = {
  diagonal: Diagonal,
  wave: Wave,
};

const Breaker = ({
  variant = 'diagonal',
  svgClassName,
  reverseX,
  reverseY,
  ...rest
}) => {
  let SvgElement = SVG_VARIANTS[variant];
  return (
    <BreakerWrapper
      className={cn(
        'z-20 w-full transform relative',
        { reverseX },
        { reverseY },
      )}
      reverseX={reverseX}
      reverseY={reverseY}
      doubleReverse={reverseX && reverseY}
      {...rest}
    >
      <SvgElement className={svgClassName} />
    </BreakerWrapper>
  );
};

Breaker.propTypes = {
  variant: PropTypes.oneOf(['wave', 'diagonal']),
  svgClassName: PropTypes.string,
  reverseY: PropTypes.bool,
  reverseX: PropTypes.bool,
};

export default Breaker;
