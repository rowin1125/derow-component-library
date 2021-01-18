import React from 'react';

import Hero from './Hero';

export default {
  title: 'layout/Hero',
  component: Hero,
  argTypes: {
    image: {
      table: {
        defaultValue: { summary: 'Required ✅' },
        type: {
          summary: 'Text',
          detail: 'Text for inside the button',
        },
      },
    },
  },
};

const ContentComponent = () => (
  <>
    <h1 className='text-center'>Hi there</h1>
    <p>How are you doing</p>
  </>
);

const template = args => (
  <Hero
    offset={false}
    image='https://images.prismic.io/derow/659b68f7-39f6-4b57-bc88-7f2a403eaaa3_pexels-negative-space-169573.jpg?auto=compress,format'
    {...args}
  >
    <ContentComponent />
  </Hero>
);

export const RegularExamle = template.bind({});
RegularExamle.args = {
  blur: false,
  showWave: false,
  slim: false,
};

export const WithBlur = template.bind({});
WithBlur.args = {
  blur: true,
  showWave: false,
  slim: false,
};

export const WithSvgWaves = template.bind({});
WithSvgWaves.args = {
  blur: true,
  showWave: true,
  slim: false,
};

export const WithSlim = template.bind({});
WithSlim.args = {
  blur: true,
  showWave: true,
  slim: true,
};
