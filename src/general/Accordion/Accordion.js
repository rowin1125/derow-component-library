import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import QuestionMark from '../../backup/QuestionMark';
import styled from 'styled-components';

const SyledAccordion = styled.div`
  .accordion__body {
    max-height: 0;
    overflow: hidden;
  }
`;

const Accordion = React.forwardRef(
  (
    {
      index = 1,
      heading,
      content,
      accordionCounter,
      accordionButtonProps,
      accordionTextContainerProps,
      accordionCounterProps,
      accordionCounterIconProps,
      accordionHeaderProps,
      accordionIconProps,
      accordionContentContainerProps,
      accordionContentTextProps,
      ...rest
    },
    ref,
  ) => {
    const [open, toggle] = useState(false);
    const [height, setHeight] = useState('0px');
    const contentRef = useRef(null);

    const playAccordion = () => {
      toggle(!open);
      setHeight(open ? '0px' : `${contentRef.current.scrollHeight}px`);
    };
    const Icon = accordionCounter;

    return (
      <SyledAccordion
        ref={ref}
        open={open}
        id={index}
        className='accordion w-full border-1 border-gray-300 p-2'
        {...rest}
      >
        <button
          className='focus:outline-none w-full flex items-center justify-between'
          type='button'
          onClick={playAccordion}
          {...accordionButtonProps}
        >
          <div
            className='accordion__header flex items-center relative z-10 w-full'
            {...accordionTextContainerProps}
          >
            <span
              className='bg-brand p-2 rounded-full text-gray-100 w-6 h-6 lg:w-10 lg:h-10 flex justify-center items-center text-sm lg:text-xl'
              {...accordionCounterProps}
            >
              {Icon ? <Icon {...accordionCounterIconProps} /> : index}
            </span>
            <h4
              className='my-0 ml-6 font-semibold text-lg text-brand text-left w-full'
              {...accordionHeaderProps}
            >
              {heading}
            </h4>
          </div>
          <QuestionMark
            className={cn(
              'text-3xl lg:mr-10 transform transition-all duration-300 ease-in-out text-brand w-8 h-8',
              open ? 'rotate-180' : 'rotate-0',
            )}
            {...accordionIconProps}
          />
        </button>
        <div
          ref={contentRef}
          className={cn(
            'accordion__body w-full flex justify-center transform transition-all duration-300 ease-in-out pt-2',
          )}
          style={{ maxHeight: height }}
          {...accordionContentContainerProps}
        >
          <div
            className='py-12 lg:py-8 flex justify-center items-center w-full text-center'
            {...accordionContentTextProps}
          >
            <p>{content}</p>
          </div>
        </div>
      </SyledAccordion>
    );
  },
);

Accordion.propTypes = {
  index: PropTypes.number,
  accordionCounter: PropTypes.any,
  accordionButtonProps: PropTypes.object,
  accordionTextContainerProps: PropTypes.object,
  accordionCounterIconProps: PropTypes.object,
  accordionCounterProps: PropTypes.object,
  accordionHeaderProps: PropTypes.object,
  accordionIconProps: PropTypes.object,
  accordionContentContainerProps: PropTypes.object,
  accordionContentTextProps: PropTypes.object,
  heading: PropTypes.any.isRequired,
  content: PropTypes.any.isRequired,
};

export default Accordion;
