/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';

import UspCard from './UspCard';
import { iconGenerator } from '../../utils/iconGenerator';
import { linkResolver } from '../../utils/linkResolver';
import { content, contentBg, contentOverflow } from './UspCardFixture';

describe('UspCard', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <UspCard
        className='UspCard'
        iconGenerator={iconGenerator}
        linkResolver={linkResolver}
        htmlSerializer={() => {}}
        content={content}
        data-testid='test-UspCard'
      />,
    );
    expect(getByTestId('test-UspCard')).toBeTruthy();
    expect(getByTestId('test-UspCard').classList.contains('UspCard')).toBe(
      true,
    );
  });

  test('should change html element when using "as" prop', () => {
    const { container } = render(
      <UspCard
        iconGenerator={iconGenerator}
        linkResolver={linkResolver}
        htmlSerializer={() => {}}
        content={content}
        as='h1'
      />,
    );
    const element = container.querySelector('h1');
    expect(element).toBeTruthy();
  });

  test('should be a link element when a link is provided', () => {
    const { container } = render(
      <UspCard
        iconGenerator={iconGenerator}
        linkResolver={linkResolver}
        htmlSerializer={() => {}}
        content={content}
        link='a'
      />,
    );
    const element = container.querySelector('a');
    expect(element).toHaveProperty(
      'href',
      `http://localhost${linkResolver(content.fields[0].link._meta)}`,
    );
  });

  test('should have a bg when a bg prop is provided', () => {
    const { container } = render(
      <UspCard
        iconGenerator={iconGenerator}
        linkResolver={linkResolver}
        htmlSerializer={() => {}}
        content={contentBg}
      />,
    );
    const element = container.querySelector('.bg-brand');
    expect(element).toBeTruthy();
  });

  test('should have a overflow when a prop is provided', () => {
    const { container } = render(
      <UspCard
        iconGenerator={iconGenerator}
        linkResolver={linkResolver}
        htmlSerializer={() => {}}
        content={contentOverflow}
      />,
    );
    const element = container.querySelector('.to_brand');
    expect(element).toBeTruthy();
  });
});
