import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  className,
  children,
  variant = 'primary',
  fixedWidth,
  as: Element = 'a',
  href,
  disabled = false,
  link: Link,
  ...rest
}) => {
  const generalClasses = `w-full h-12 shadow-xl inline-flex justify-center items-center rounded-full
    font-bold text-xl tracking-wider px-4 py-2 cursor-pointer lg:mr-2`;
  const transitionClasses = 'transform ease-in duration-100 transition-all hover:-translate-y-1 hover:shadow-2xl';
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isTertairy = variant === 'tertairy';

  return Link ? (
    <Link href={href} passHref>
      <Element
        disabled={disabled}
        className={classNames(
          'Button',
          generalClasses,
          transitionClasses,
          { 'bg-brand text-white hover:bg-brand-hover': isPrimary },
          { 'bg-body-color text-brand hover:bg-body-color': isSecondary },
          { 'bg-black text-white hover:bg-gray-900': isTertairy },
          variant,
          fixedWidth ? 'w-full lg:w-64' : '',
          'lg:mx-0',
          className,
        )}
        {...rest}
      >
        {children}
      </Element>
    </Link>
  ) : (
    <Element
      href={href}
      disabled={disabled}
      className={classNames(
        generalClasses,
        transitionClasses,
        { 'bg-brand text-white hover:bg-brand-hover': isPrimary },
        { 'bg-body-color text-brand hover:bg-body-color': isSecondary },
        { 'bg-black text-white hover:bg-gray-900': isTertairy },
        variant,
        fixedWidth ? 'w-full lg:w-64' : 'lg:w-auto',
        'lg:mx-0',
        className,
      )}
      {...rest}
    >
      {children}
    </Element>
  );
};
Button.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fixedWidth: PropTypes.bool,
  href: PropTypes.string,
  link: PropTypes.any,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertairy']),
};
export default Button;
