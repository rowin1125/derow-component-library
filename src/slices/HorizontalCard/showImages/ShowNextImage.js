import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const ShowNextImage = ({
  card,
  image: Image,
  imageComponent: ImageComponent,
  ...rest
}) => {
  return (
    <>
      <div
        className={cn(
          'w-full lg:w-80 h-full z-10 relative lg:mb-44',
          card.img_first ? 'lg:ml-24' : 'lg:mr-24',
          { 'h-full lg:h-650': card.image_large },
        )}
      >
        <Image
          className={cn('object-cover', {
            'rounded-full': card.round_image,
            'h-full lg:h-650': card.image_large && !ImageComponent,
          })}
          src={card.img.url}
          alt={card.img.alt || 'Derow'}
          {...rest}
        />
      </div>
      <div
        className={cn(
          'hidden lg:block absolute bg-secondary w-11/12 h-4/5 my-10 top-0',
          card.img_first ? 'left-0' : 'right-0',
        )}
      ></div>
    </>
  );
};

ShowNextImage.propTypes = {
  card: PropTypes.object.isRequired,
  image: PropTypes.any,
  imageComponent: PropTypes.any,
};

export default ShowNextImage;
