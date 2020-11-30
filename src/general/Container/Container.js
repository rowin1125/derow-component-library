import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Container = React.forwardRef(({ className, children, center, as = 'div', ...rest }, ref) => {
  const Element = as;
  return (
    <Element ref={ref} className={cn('container', { 'mx-auto': center }, className)} {...rest}>
      {children}
    </Element>
  );
});

Container.propTypes = {
  as: PropTypes.any,
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
