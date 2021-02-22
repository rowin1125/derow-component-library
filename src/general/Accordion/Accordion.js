import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import PropTypes from 'prop-types';
import cn from 'classnames';
import Chevron from '../../backup/Chevron';

const Accordion = ({
  children,
  contentWrapperProps,
  expanded,
  HeaderElement = 'div',
  headerProps,
  headerWrapperProps,
  i,
  icon: Icon,
  iconProps,
  setExpanded,
  title,
  ...rest
}) => {
  console.log('rest', rest);
  const isOpen = i === expanded;

  return (
    <div
      className={cn(
        i !== 0 ? 'border-t border-gray-100 my-4' : 'mb-4',
        'w-full accordion',
      )}
      {...rest}
    >
      <motion.div
        initial={false}
        animate={{ backgroundColor: isOpen ? '#f7f4f4' : '#f7f4f400' }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className={cn(
          'bg-white cursor-pointer w-full',
          children && 'cursor-pointer',
        )}
        {...headerWrapperProps}
      >
        <HeaderElement
          className='w-full flex justify-center items-center py-4 relative'
          {...headerProps}
        >
          {Icon && <Icon className='h-4 w-4 mr-2' {...iconProps} />}
          <h3 className='mb-0'>{title}</h3>
          {children && (
            <Chevron
              className={cn(
                'h-4 w-4 absolute right-4 transform ease-in-out duration-300',
                isOpen && 'rotate-180',
              )}
              {...iconProps}
            />
          )}
        </HeaderElement>
      </motion.div>
      {children && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key='content'
              initial='collapsed'
              animate='open'
              exit='collapsed'
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              {...contentWrapperProps}
            >
              <div className='p-4'>{children}</div>
            </motion.section>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  contentWrapperProps: PropTypes.object,
  expanded: PropTypes.number,
  HeaderElement: PropTypes.any,
  headerProps: PropTypes.object,
  headerWrapperProps: PropTypes.object,
  i: PropTypes.number,
  icon: PropTypes.any,
  iconProps: PropTypes.object,
  setExpanded: PropTypes.func,
  title: PropTypes.any,
};

export default Accordion;
