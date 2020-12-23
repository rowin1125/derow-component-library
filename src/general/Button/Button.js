import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = React.forwardRef(
  (
    {
      className,
      children,
      variant = 'primary',
      fixedWidth,
      as: Element = 'button',
      href,
      link: Link,
      ...rest
    },
    ref,
  ) => {
    const generalClasses = `w-full h-12 shadow-xl inline-flex justify-center items-center
    rounded-full font-bold text-xl tracking-wider px-4 py-2 cursor-pointer lg:mr-2`;
    const transitionClasses =
      'transform ease-in duration-100 transition-all hover:-translate-y-1 hover:shadow-2xl';
    const isPrimary = variant === 'primary';
    const isSecondary = variant === 'secondary';
    const isTertairy = variant === 'tertairy';
    if (Link) {
      Element = 'a';
    }

    return Link ? (
      <Link href={href} passHref>
        <Element
          ref={ref}
          type={Element === 'button' ? 'button' : null}
          className={classNames(
            generalClasses,
            transitionClasses,
            { 'bg-brand text-white hover:bg-brand-hover': isPrimary },
            { 'bg-secondary text-brand hover:bg-secondary': isSecondary },
            { 'bg-gray-100 text-gray-900 hover:bg-gray-200': isTertairy },
            variant,
            fixedWidth ? 'lg:w-64' : '',
            'lg:mx-0 Button',
            className,
          )}
          {...rest}
        >
          {children}
        </Element>
      </Link>
    ) : (
      <Element
        ref={ref}
        type={Element === 'button' ? 'button' : null}
        href={href}
        className={classNames(
          generalClasses,
          transitionClasses,
          { 'bg-brand text-white hover:bg-brand-hover': isPrimary },
          { 'bg-secondary text-gray-100 hover:bg-secondary': isSecondary },
          { 'bg-gray-100 text-brand hover:bg-gray-200': isTertairy },
          variant,
          fixedWidth ? 'lg:w-64' : '',
          'lg:mx-0',
          className,
        )}
        {...rest}
      >
        {children}
      </Element>
    );
  },
);

Button.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fixedWidth: PropTypes.bool,
  href: PropTypes.string,
  link: PropTypes.any,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertairy']),
};

export default Button;
