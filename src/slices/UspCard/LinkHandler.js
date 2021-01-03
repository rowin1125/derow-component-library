/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const LinkHandler = ({ children, link: Link, href, className, ...rest }) => {
  const isRegular = Link === 'a';
  return (
    <>
      {isRegular ? (
        <Link href={href} className={cn(className)} {...rest}>
          {children}
        </Link>
      ) : (
        <Link href={href}>
          <a className={cn(className)} {...rest}>
            {children}
          </a>
        </Link>
      )}
    </>
  );
};

LinkHandler.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  link: PropTypes.any,
  children: PropTypes.node,
};

export default LinkHandler;
