import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cn from 'classnames';

const BreakerWrapper = styled.div`
  ${props => (props.reverseX ? 'transform:  rotateX(180deg)' : '')};
  ${props => (props.reverseY ? 'transform:  rotateY(180deg)' : '')};
  ${props =>
    props.doubleReverse ? 'transform:  rotateY(180deg) rotateX(180deg)' : ''};

  top: 2px;
`;

const PageBreaker = ({ svgClassName, reverseX, reverseY, ...rest }) => (
  <BreakerWrapper
    className={cn('z-20 w-full transform relative', { reverseX }, { reverseY })}
    reverseX={reverseX}
    reverseY={reverseY}
    doubleReverse={reverseX && reverseY}
    {...rest}
  >
    <svg
      className={cn('w-full fill-current', svgClassName)}
      viewBox='0 0 1440 107'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1440 0V107L0 106L1440 0Z' />
    </svg>
  </BreakerWrapper>
);

PageBreaker.propTypes = {
  svgClassName: PropTypes.string,
  reverseY: PropTypes.bool,
  reverseX: PropTypes.bool,
};

export default PageBreaker;
