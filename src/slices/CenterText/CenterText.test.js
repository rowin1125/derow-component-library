/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';

import CenterText from './CenterText';
import { content, contentWithButtons } from './CenterTextFixture';

import { linkResolver } from '../../utils/linkResolver';
import { htmlSerializer } from '../../utils/htmlSerializer';

const CenterTextTestComponent = ({ ...args }) => (
  <CenterText
    data-testid='test-CenterText'
    linkResolver={linkResolver}
    htmlSerializer={htmlSerializer}
    {...args}
  />
);

describe('CenterText', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <CenterTextTestComponent className='CenterText' content={content} />,
    );
    expect(getByTestId('test-CenterText')).toBeTruthy();
    expect(
      getByTestId('test-CenterText').classList.contains('CenterText'),
    ).toBe(true);
  });

  test('should change html element when using "as" prop', () => {
    const { container } = render(
      <CenterTextTestComponent content={content} as='h1' />,
    );
    const element = container.querySelector('h1');
    expect(element).toBeTruthy();
  });

  test('should have buttons when fields are provided', () => {
    const { getAllByText } = render(
      <CenterTextTestComponent content={contentWithButtons} />,
    );
    const text = contentWithButtons.fields[0].center_button_text;

    const element = getAllByText(text);
    expect(element[0].innerHTML).toEqual(text);
  });
});
