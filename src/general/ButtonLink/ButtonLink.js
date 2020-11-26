import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import classNames from 'classnames';

const ButtonLink = ({ children, variant = 'primary', className, href, link: Link, ...props }) => {
  const generalClasses = 'relative font-semibold';
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isTertairy = variant === 'tertairy';

  return Link ? (
    <Link href={href} passHref>
      <ButtonLinkElement
        className={classNames(
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
      href={href}
      className={classNames(
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
};

export const ButtonLinkElement = styled.a`
  &.primary {
    &:after {
      ${tw`bg-brand`}
      width: ${props => (props.noHover ? '100%' : '0%')};
      left: ${props => (props.noHover ? '0' : '')};
    }
    &:hover {
      &:after {
        ${tw`bg-brand`}
        width: 100%;
        left: 0;
      }
    }
  }

  &.secondary {
    &:after {
      ${tw`bg-secondary`}
      width: ${props => (props.noHover ? '100%' : '0%')};
      left: ${props => (props.noHover ? '0' : '')};
    }
    &:hover {
      &:after {
        ${tw`bg-secondary`}
        width: 100%;
        left: 0;
      }
    }
  }
  &.tertairy {
    &:after {
      ${tw`bg-gray-200`}
      width: ${props => (props.noHover ? '100%' : '0%')};
      left: ${props => (props.noHover ? '0' : '')};
    }
    &:hover {
      &:after {
        ${tw`bg-gray-200`}
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
