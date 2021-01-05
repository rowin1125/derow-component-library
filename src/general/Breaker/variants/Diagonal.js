import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Diagonal = ({ className, ...rest }) => {
  return (
    <svg
      id='breaker-diagonal'
      className={cn('w-full fill-current relative', className)}
      viewBox='0 0 1440 107'
      xmlns='http://www.w3.org/2000/svg'
      style={{ top: '3px' }}
      {...rest}
    >
      <path d='M1440 0V107L0 106L1440 0Z' />
    </svg>
  );
};

Diagonal.propTypes = {
  className: PropTypes.string,
};

export default Diagonal;
