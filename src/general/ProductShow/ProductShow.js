import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Col from '../Col';
import { calculateCols } from '../../slices/GridProductCards/helpers';
import LinkHandler from '../../slices/UspCard/LinkHandler';

const ProductShow = ({
  className,
  contentLength,
  image,
  imageComponent: Image = 'img',
  imageProps,
  index,
  link,
  fixedUrl,
  linkComponent = 'a',
  linkResolver,
  price,
  title,
  favoriteIcon: FavoriteIcon,
  ...rest
}) => {
  return (
    <Col
      xs={6}
      md={4}
      lg={calculateCols(contentLength)}
      key={title}
      className={cn('lg:mb-10 ProductShow px-2 lg:px-4', className)}
      {...rest}
    >
      <LinkHandler
        className='relative my-6 lg:my-0 w-full h-full rounded-t-lg transform ease-in-out duration-300 lg:hover:scale-105'
        link={linkComponent}
        href={fixedUrl || linkResolver(link)}
      >
        <div className='relative h-52 lg:h-60 w-full'>
          {FavoriteIcon && <FavoriteIcon />}
          <Image
            className='object-cover w-full h-full'
            src={image.url}
            alt={title || 'Derow'}
            {...imageProps}
          />
        </div>
        <div className='w-full mt-4'>
          {title && <h4>{title}</h4>}
          {price && <h4>{price}</h4>}
        </div>
      </LinkHandler>
    </Col>
  );
};

ProductShow.propTypes = {
  className: PropTypes.string,
  contentLength: PropTypes.number,
  favoriteIcon: PropTypes.any,
  fixedUrl: PropTypes.string,
  image: PropTypes.any,
  imageComponent: PropTypes.any,
  imageProps: PropTypes.object,
  index: PropTypes.number,
  link: PropTypes.object,
  linkComponent: PropTypes.any,
  linkResolver: PropTypes.func,
  price: PropTypes.string,
  title: PropTypes.string,
};

export default ProductShow;
