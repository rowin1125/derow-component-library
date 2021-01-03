import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import SideBarSvg from './SideBarSvg';

const TestimonialBody = ({ content, currentIndex, htmlSerializer }) => {
  return (
    <>
      <div
        className='relative w-full md:w-2/5 h-full'
        style={{ minHeight: '26rem' }}
      >
        <img
          className='absolute inset-0 w-full h-full object-cover object-center'
          src={content.fields[currentIndex].image.url}
          alt={content.fields[currentIndex].image.alt || 'Derow'}
        />
      </div>
      <div className='w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg'>
        <div className='p-8 md:pr-16 md:pl-16 md:py-12'>
          <h3 className='text-brand'>
            {content.fields[currentIndex].person_title}
          </h3>
          <RichText
            render={content.fields[currentIndex].person_content}
            htmlSerializer={htmlSerializer}
          />
        </div>
        <SideBarSvg />
      </div>
    </>
  );
};

TestimonialBody.propTypes = {
  content: PropTypes.object.isRequired,
  currentIndex: PropTypes.number.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
};

export default TestimonialBody;
