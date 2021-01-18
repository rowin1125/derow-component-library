/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import Hero from './Hero';

const HeroTestComponent = ({ ...args }) => (
  <Hero
    data-testid='test-Hero'
    image='https://images.prismic.io/derow/659b68f7-39f6-4b57-bc88-7f2a403eaaa3_pexels-negative-space-169573.jpg?auto=compress,format'
    {...args}
  />
);

describe('Hero', () => {
  const content = 'Rowin is hier';
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <HeroTestComponent>{content}</HeroTestComponent>,
    );
    expect(getByTestId('test-Hero')).toBeTruthy();
    expect(getByTestId('test-Hero').classList.contains('Hero')).toBe(true);
  });

  test('should change html element when using "as" prop', () => {
    const { container } = render(
      <HeroTestComponent as='a'>{content}</HeroTestComponent>,
    );
    const element = container.querySelector('a');
    expect(element).toBeTruthy();
  });

  test('should have the correct children content', async () => {
    const { findByText } = render(
      <HeroTestComponent>
        <h1>{content}</h1>
      </HeroTestComponent>,
    );
    expect(await findByText(content)).toBeTruthy();
  });

  test('should render svg when "showWave" is true', () => {
    const { container } = render(
      <HeroTestComponent showWave>
        <h1>{content}</h1>
      </HeroTestComponent>,
    );

    const element = container.querySelector('svg');
    expect(element).toBeTruthy();
  });

  test('should render a slim Card when "slim" is true', () => {
    const { container } = render(
      <HeroTestComponent slim>
        <h1>{content}</h1>
      </HeroTestComponent>,
    );

    expect(
      container.querySelector('.container').classList.contains('lg:px-64'),
    ).toEqual(true);
  });
});
