import React from 'react';

const SideBarSvg = () => {
  return (
    <svg
      className='hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
    >
      <polygon points='50,0 100,0 50,100 0,100' />
    </svg>
  );
};

export default SideBarSvg;
