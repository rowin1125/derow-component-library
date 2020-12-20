/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import Accordion from './Accordion';
import QuestionMark from '../../backup/QuestionMark';

describe('Accordion', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <Accordion
        data-testid='test-Accordion'
        content='LALALALA'
        heading='Heading here'
      />,
    );
    expect(getByTestId('test-Accordion')).toBeTruthy();
    expect(getByTestId('test-Accordion').classList.contains('accordion')).toBe(
      true,
    );
  });

  test('renders the header correct', () => {
    const content = 'LALALALA';
    const heading = 'Heading here';
    const { getByTestId } = render(
      <Accordion
        accordionHeaderProps={{ 'data-testid': 'test-Accordion' }}
        content={content}
        heading={heading}
      />,
    );
    expect(getByTestId('test-Accordion')).toHaveTextContent(heading);
  });

  test('renders the content correct', () => {
    const content = 'LALALALA';
    const heading = 'Heading here';
    const { getByTestId } = render(
      <Accordion
        accordionContentTextProps={{ 'data-testid': 'test-Accordion' }}
        content={content}
        heading={heading}
      />,
    );
    expect(getByTestId('test-Accordion')).toHaveTextContent(content);
  });

  test('renders an Icon as accordionCounter', () => {
    const content = 'LALALALA';
    const heading = 'Heading here';
    const Icon = QuestionMark;
    const { getByTestId } = render(
      <Accordion
        accordionCounterIconProps={{ 'data-testid': 'test-Accordion' }}
        content={content}
        heading={heading}
        accordionCounter={Icon}
      />,
    );
    expect(getByTestId('test-Accordion')).toBeTruthy();
  });
});
