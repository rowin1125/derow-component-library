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
      round = true,
      href,
      link: Link,
      ...rest
    },
    ref,
  ) => {
    const generalClasses = `w-full h-12 shadow-xl inline-flex justify-center items-center
     font-bold text-xl tracking-wider px-4 py-2 cursor-pointer lg:mr-2`;
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
            { 'rounded-full': round },
            { 'bg-brand text-color-light hover:bg-brand-hover': isPrimary },
            { 'bg-secondary text-color-light hover:bg-secondary': isSecondary },
            {
              'bg-transparent text-color-base border-1 border-color-base': isTertairy,
            },
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
          { 'rounded-full': round },
          { 'bg-brand text-color-light hover:bg-brand-hover': isPrimary },
          { 'bg-secondary text-color-light hover:bg-secondary': isSecondary },
          {
            'bg-transparent text-color-base border-1 border-color-base': isTertairy,
          },
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
  round: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertairy']),
};

export default Button;
