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
  const isLeft = index % 2 === 0;
  return (
    <Col
      xs={6}
      md={4}
      lg={calculateCols(contentLength)}
      key={title}
      className={cn(
        'lg:mb-10 ProductShow ',
        isLeft ? 'pr-2 lg:pr-0' : 'pl-2 lg:pl-0',
        className,
      )}
      {...rest}
    >
      <LinkHandler
        className='relative my-6 lg:my-0 w-full h-full rounded-t-lg transform ease-in-out duration-300 lg:mx-5 lg:hover:scale-105'
        link={linkComponent}
        href={fixedUrl || linkResolver(link)}
      >
        <div className='relative h-52 lg:h-100 w-full'>
          {FavoriteIcon && <FavoriteIcon />}
          <Image
            className='object-cover w-full h-full'
            src={image.url}
            alt={title || 'Derow'}
            {...imageProps}
          />
        </div>
        <div className='w-full mt-4'>
          {title && <h3>{title}</h3>}
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
