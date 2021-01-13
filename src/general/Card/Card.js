import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const VARIANT_MAP = {
  primary: 'primary',
  secondary: 'secondary',
  transparent: 'transparent',
};

const Card = React.forwardRef(
  (
    {
      as = 'div',
      author,
      cardAuthorWrapperProps,
      cardBodyClass,
      cardBodyWrapperProps,
      cardTitleWrapperProps,
      cardWrapperProps,
      centerX,
      centerY,
      children,
      className,
      hover,
      image,
      imageWrapperProps,
      noGutter,
      opacity,
      textCenter,
      title,
      variant = 'primary',
      content,
      ...rest
    },
    ref,
  ) => {
    const Element = as;
    const isPrimary = variant === 'primary';
    const isSecondary = variant === 'secondary';
    const isTransparent = variant === 'transparent';

    const hasImage = !!image || !!image;
    const opacityClass = `opacity-${opacity}`;
    const bgBrand = content && content.primary.bg_brand;
    return (
      <Element
        ref={ref}
        className={cn(
          'Card',
          !hasImage && !isTransparent && 'p-5 lg:p-10',

          {
            'shadow-2xl lg:shadow-3xl mb-5 lg:mb-10 bg-white text-brand': isPrimary,
          },
          { 'bg-brand text-gray-100 shadow-xl lg:shadow-3xl': isSecondary },
          { [opacityClass]: opacity },
          VARIANT_MAP[variant],
          'flex flex-col w-full',
          hover && 'transform hover:scale-105 ease-in-out duration-200',
          isTransparent &&
            `bg-transparent ${bgBrand ? 'text-gray-100' : 'text-brand'}`,
          { 'rounded-t-lg': !!image },
          className,
        )}
        {...cardWrapperProps}
        {...rest}
      >
        {image && (
          <div
            style={{ backgroundImage: `url('${image}')` }}
            className={cn(
              'w-full h-44 relative rounded-t-lg bg-cover bg-center',
            )}
            {...imageWrapperProps}
          >
            {title && (
              <div className='h-full relative' {...cardTitleWrapperProps}>
                <div className='bg-black opacity-25 absolute w-full h-full z-0' />
                <div className='flex justify-center items-center h-full z50 relative'>
                  <h3 className='text-gray-100 text-2xl'>{title}</h3>
                </div>
              </div>
            )}
            {author && (
              <div className='h-full relative'>
                <div className='bg-black opacity-25 absolute w-full h-full z-0' />
                <div className='flex flex-col justify-center items-center h-full z50 relative'>
                  <img
                    className='w-16 h-16 rounded-full'
                    src={author.picture.url}
                    alt={`Solid Only - ${author.name.split(' ')[0]}`}
                  />
                  <h3 className='text-gray-100 mt-4'>By: {author.name}</h3>
                </div>
              </div>
            )}
          </div>
        )}
        <div
          className={cn(
            'w-full h-auto flex flex-col flex-1',
            {
              'p-5 lg:p-10': !!image || !!title,
            },
            textCenter && 'text-center',
            centerX && 'items-center',
            centerY && 'justify-center',
            cardBodyClass,
            VARIANT_MAP[variant] === 'transparent' && !noGutter && 'px-5',
          )}
          {...cardBodyWrapperProps}
        >
          {children}
        </div>
      </Element>
    );
  },
);

Card.propTypes = {
  as: PropTypes.any,
  author: PropTypes.object,
  cardAuthorWrapperProps: PropTypes.object,
  cardBodyClass: PropTypes.string,
  cardBodyWrapperProps: PropTypes.object,
  cardTitleWrapperProps: PropTypes.object,
  cardWrapperProps: PropTypes.object,
  centerX: PropTypes.bool,
  centerY: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.object,
  className: PropTypes.string,
  hover: PropTypes.bool,
  image: PropTypes.any,
  imageWrapperProps: PropTypes.object,
  noGutter: PropTypes.bool,
  opacity: PropTypes.oneOf([25, 50, 75]),
  textCenter: PropTypes.bool,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
};

export default Card;
