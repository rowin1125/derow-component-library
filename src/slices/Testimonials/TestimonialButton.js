import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TestimonialButton = ({ paginate, direction, setPage, page }) => {
  const isRight = Math.sign(direction) === 1;
  return (
    <button
      onClick={() => paginate(direction, setPage, page)}
      type='button'
      className={cn(
        `absolute z-10 top-0 mt-32 bg-white rounded-full shadow-md h-12 w-12 text-2xl
        text-brand transform ease-in-out duration-300 translate-y-0 hover:-translate-y-1
         focus:outline-none focus:shadow-outline`,
        isRight ? 'right-0 -mr-6' : 'left-0 -ml-6',
      )}
    >
      <span
        className='block'
        style={{ transform: `scale(${isRight ? 1 : -1})` }}
      >
        ➜
      </span>
    </button>
  );
};

TestimonialButton.propTypes = {
  paginate: PropTypes.func.isRequired,
  direction: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default TestimonialButton;
