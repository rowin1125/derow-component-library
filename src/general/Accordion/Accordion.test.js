/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import Accordion from './Accordion';

describe('Accordion', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <Accordion data-testid='test-Accordion' title='Heading here'>
        LALALALA
      </Accordion>,
    );
    expect(getByTestId('test-Accordion')).toBeTruthy();
    expect(getByTestId('test-Accordion').classList.contains('accordion')).toBe(
      true,
    );
  });

  test('renders the header correct', () => {
    const title = 'title here';
    const { getByTestId } = render(
      <Accordion
        headerWrapperProps={{ 'data-testid': 'test-Accordion' }}
        title={title}
      />,
    );
    expect(getByTestId('test-Accordion')).toHaveTextContent(title);
  });
});
