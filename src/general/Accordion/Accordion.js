import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import PropTypes from 'prop-types';
import cn from 'classnames';
import Chevron from '../../backup/Chevron';

const Accordion = ({
  children,
  contentWrapperProps,
  expanded,
  headerElement: HeaderElement = 'div',
  headingType: HeadingType = 'h3',
  headerProps,
  headerWrapperProps,
  i,
  icon: Icon,
  iconProps,
  setExpanded,
  title,
  ...rest
}) => {
  const isOpen = i === expanded;
  const headerIsDiv = HeaderElement === 'div';

  return (
    <div className={cn('w-full accordion')} {...rest}>
      <motion.div
        initial={false}
        whileHover={{
          backgroundColor: 'rgba(247, 244, 244, 1)',
        }}
        animate={{
          backgroundColor:
            isOpen && headerIsDiv
              ? 'rgba(247, 244, 244, 1)'
              : 'rgba(247, 244, 244, 0)',
        }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className={cn(
          'cursor-pointer w-full hover:bg-gray-200',
          children && 'cursor-pointer',
          i !== 0 && 'border-t border-gray-100 ',
        )}
        {...headerWrapperProps}
      >
        <HeaderElement
          className='w-full flex justify-between items-center p-6  relative'
          {...headerProps}
        >
          {Icon && <Icon className='h-4 w-4 mr-2' {...iconProps} />}
          <HeadingType className='mb-0'>{title}</HeadingType>
          {children ? (
            <Chevron
              className={cn(
                'h-4 w-4 transform ease-in-out duration-300',
                isOpen && 'rotate-180',
              )}
              {...iconProps}
            />
          ) : (
            <i></i>
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
              <div>{children}</div>
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
  headerElement: PropTypes.any,
  headerProps: PropTypes.object,
  headingType: PropTypes.any,
  headerWrapperProps: PropTypes.object,
  i: PropTypes.number,
  icon: PropTypes.any,
  iconProps: PropTypes.object,
  setExpanded: PropTypes.func,
  title: PropTypes.any,
};

export default Accordion;
