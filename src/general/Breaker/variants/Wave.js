import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Wave = ({ className, ...rest }) => {
  return (
    <svg
      className={cn('w-full h-12 lg:h-16 fill-current relative', className)}
      viewBox='0 0 1695 57'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
      {...rest}
    >
      <path
        d='M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z'
        fillRule='evenodd'
      />
    </svg>
  );
};

Wave.propTypes = {
  className: PropTypes.string,
};

export default Wave;
