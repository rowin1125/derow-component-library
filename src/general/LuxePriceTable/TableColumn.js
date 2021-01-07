import React from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PricingTableCheckmark from '../../backup/CheckMark';
import Button from '../../general/Button';

const TableColumn = ({
  htmlSerializer,
  iconGenerator,
  isMiddle,
  multiple,
  linkResolver,
  showInfo,
  showPrice,
  table,
}) => {
  const Icon = iconGenerator(table.table_icon);

  return (
    <div
      className={cn(
        'w-full flex flex-col ',
        isMiddle ? 'h-full lg:h-105' : 'h-full',
      )}
    >
      <div
        className={cn(
          'flex-1 flex flex-col rounded-lg shadow-2xl bg-gradient-to-b',
          isMiddle || !multiple
            ? 'from-brand to-secondary'
            : 'from-accent to-brand',
        )}
      >
        {isMiddle && (
          <div className='absolute inset-x-0 top-0'>
            <div className='flex justify-center transform -translate-y-1/2'>
              <span className='inline-flex rounded-full bg-gold px-6 py-1 text-sm leading-8 font-semibold tracking-wider uppercase text-gray-100'>
                Best verkocht
              </span>
            </div>
          </div>
        )}
        <div className='flex flex-col justify-center items-center p-6'>
          <h2 className='mt-2 text-center text-3xl leading-9 font-semibold text-gray-100'>
            {table.title}
          </h2>
          <div className='flex justify-center items-center'>
            <Icon
              className={cn(
                'text-7xl',
                isMiddle || !multiple ? 'text-gold' : 'text-secondary',
              )}
            />
          </div>
          <div
            className={cn(
              'mt-4 flex items-center justify-center',
              !showPrice && 'hidden',
            )}
          >
            <span className='px-3 flex items-center text-6xl leading-none tracking-tight font-medium text-gray-100'>
              <span
                className={cn('text-3xl text-center', !showPrice && 'hidden')}
              >
                {table.price}
              </span>
            </span>
          </div>
          {table.description && showInfo && (
            <div className={cn('mt-4 flex items-center justify-center')}>
              <span className='text-gray-100 text-center'>
                <RichText
                  render={table.description}
                  htmlSerializer={htmlSerializer}
                />
              </span>
            </div>
          )}
        </div>
        <div className='flex-1 flex flex-col justify-between border-t-2 border-secondary p-6'>
          <ul>
            {table.selling_points.map((usp, i) => (
              <PricingTableCheckmark key={usp.text + i.toString()}>
                {usp.text}
              </PricingTableCheckmark>
            ))}
          </ul>
          {showInfo && table.button_text && (
            <div className={cn(isMiddle && 'lg:mb-10')}>
              <Button
                variant='tertairy'
                className='w-full'
                as='a'
                href={linkResolver(table.button_link._meta)}
              >
                {table.button_text}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TableColumn.propTypes = {
  htmlSerializer: PropTypes.func.isRequired,
  iconGenerator: PropTypes.func,
  linkResolver: PropTypes.func.isRequired,
  isMiddle: PropTypes.bool,
  multiple: PropTypes.bool,
  noPrice: PropTypes.bool,
  showInfo: PropTypes.bool,
  showPrice: PropTypes.bool,
  table: PropTypes.object.isRequired,
};

export default TableColumn;
