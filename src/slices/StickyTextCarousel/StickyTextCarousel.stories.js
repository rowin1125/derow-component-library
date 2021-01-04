import React from 'react';

import BgOverflow from '../../general/BgOverflow';
import { htmlSerializer } from '../../utils/htmlSerializer';

import StickyTextCarousel from './StickyTextCarousel';
import {
  content,
  contentWithBgBrand,
  contentWithBreakerBrand,
  contentWithBreakerWhite,
} from './stickyTextCarouselFixture';

export default {
  title: 'slices/StickyTextCarousel',
  component: StickyTextCarousel,
  argTypes: {},
};

const templateWithBgBrand = args => (
  <BgOverflow className='bg-brand py-20'>
    <StickyTextCarousel htmlSerializer={htmlSerializer} {...args} />
  </BgOverflow>
);

const templateWithoutBg = args => (
  <StickyTextCarousel htmlSerializer={htmlSerializer} {...args} />
);

export const RegularExample = templateWithBgBrand.bind({});
RegularExample.args = {
  content,
};

export const WithBrandBg = templateWithoutBg.bind({});
WithBrandBg.args = {
  content: contentWithBgBrand,
};

export const WithBreakersWhite = templateWithBgBrand.bind({});
WithBreakersWhite.args = {
  content: contentWithBreakerWhite,
};

export const WithBreakersBrand = templateWithoutBg.bind({});
WithBreakersBrand.args = {
  content: contentWithBreakerBrand,
};
