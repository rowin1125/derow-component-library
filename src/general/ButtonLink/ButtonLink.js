import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

const ButtonLink = React.forwardRef(
  (
    { children, variant = 'primary', className, href, link: Link, ...props },
    ref,
  ) => {
    const generalClasses = 'relative font-semibold';
    const isPrimary = variant === 'primary';
    const isSecondary = variant === 'secondary';
    const isTertairy = variant === 'tertairy';

    return Link ? (
      <Link href={href} passHref>
        <ButtonLinkElement
          ref={ref}
          className={classNames(
            'button-link',
            generalClasses,
            { 'text-brand': isPrimary },
            { 'text-secondary  ': isSecondary },
            { 'text-white': isTertairy },
            variant,
            className,
          )}
          {...props}
        >
          {children}
        </ButtonLinkElement>
      </Link>
    ) : (
      <ButtonLinkElement
        ref={ref}
        href={href}
        className={classNames(
          'button-link',
          generalClasses,
          { 'text-brand': isPrimary },
          { 'text-secondary  ': isSecondary },
          { 'text-white': isTertairy },
          variant,
          className,
        )}
        {...props}
      >
        {children}
      </ButtonLinkElement>
    );
  },
);

export const ButtonLinkElement = styled.a`
  &.primary {
    &:after {
      width: ${props => (props.noHover ? '100%' : '0%')};
      left: ${props => (props.noHover ? '0' : '')};
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }

  &.secondary {
    &:after {
      width: ${props => (props.noHover ? '100%' : '0%')};
      left: ${props => (props.noHover ? '0' : '')};
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }
  &.tertairy {
    &:after {
      width: ${props => (props.noHover ? '100%' : '0%')};
      left: ${props => (props.noHover ? '0' : '')};
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 30px;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    bottom: -2px;
    position: absolute;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
`;

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  link: PropTypes.any,
  noHover: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertairy']),
};

export default ButtonLink;
