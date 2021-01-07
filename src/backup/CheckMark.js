import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const PricingTableCheckmark = ({ children, table = true }) => (
  <li className='mt-4 flex items-start'>
    <div className='flex-shrink-0'>
      <svg
        className={cn('text-green-600', 'h-6 w-6')}
        stroke='currentColor'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='3'
          d='M5 13l4 4L19 7'
        />
      </svg>
    </div>
    <p className={cn('ml-3 leading-6 text-base')}>{children}</p>
  </li>
);

PricingTableCheckmark.propTypes = {
  children: PropTypes.node,
  table: PropTypes.bool,
};

export default PricingTableCheckmark;
