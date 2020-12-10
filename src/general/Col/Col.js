import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const WidthProperties = {
  1: '1/12',
  2: '2/12',
  3: '3/12',
  4: '4/12',
  5: '5/12',
  6: '6/12',
  7: '7/12',
  8: '8/12',
  9: '9/12',
  10: '10/12',
  11: '11/12',
  12: '12/12', // TODO: keep on eye on this
};

const Col = ({
  children,
  as: Element = 'div',
  className,
  centerX,
  centerY,
  column,
  xs,
  sm,
  md,
  lg,
  ...props
}) => (
  <Element
    className={classNames(
      'Col relative flex',
      centerX && 'justify-center',
      centerY && 'items-center',
      column && 'flex-col',
      xs && `w-${WidthProperties[xs]}`,
      sm && `sm:w-${WidthProperties[sm]}`,
      md && `md:w-${WidthProperties[md]}`,
      lg && `lg:w-${WidthProperties[lg]}`,
      className,
    )}
    {...props}
  >
    {children}
  </Element>
);

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  centerX: PropTypes.bool,
  centerY: PropTypes.bool,
  column: PropTypes.bool,
  as: PropTypes.string,
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).isRequired,
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

export default Col;
