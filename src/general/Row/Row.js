import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const Row = React.forwardRef(
  (
    {
      as: Element = 'div',
      className,
      width = 'w-full',
      children,
      centerX,
      centerY,
      reverse,
      wrap,
      ...props
    },
    ref,
  ) => {
    return (
      <Element
        ref={ref}
        className={classNames(
          'Row relative flex flex-col lg:flex-row h-full',
          { 'justify-center': centerX },
          { 'items-center': centerY },
          { 'flex-row-reverse lg:flex-row-reverse': reverse },
          { 'flex-wrap': wrap },
          width,
          className,
        )}
        {...props}
      >
        {children}
      </Element>
    );
  },
);

Row.propTypes = {
  as: PropTypes.any,
  className: PropTypes.string,
  centerX: PropTypes.bool,
  centerY: PropTypes.bool,
  reverse: PropTypes.bool,
  children: PropTypes.node,
  width: PropTypes.string,
  wrap: PropTypes.bool,
  element: PropTypes.string,
};

export default Row;
