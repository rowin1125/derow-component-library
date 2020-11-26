/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import ButtonLink from './ButtonLink';

describe('ButtonLink', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<ButtonLink data-testid='test-ButtonLink'>hi</ButtonLink>);
    expect(getByTestId('test-ButtonLink')).toBeTruthy();
    expect(getByTestId('test-ButtonLink')).toHaveTextContent('hi');
  });

  const variants = ['primary', 'secondary', 'tertairy'];
  variants.forEach(variant => {
    test(`should be variant: ${variant}`, () => {
      const { getByTestId } = render(
        <ButtonLink data-testid='test-ButtonLink' variant={variant}>
          hi
        </ButtonLink>,
      );
      expect(getByTestId('test-ButtonLink').classList.contains(variant)).toBe(true);
    });
  });

  test('should transform to a Link component', () => {
    // eslint-disable-next-line react/prop-types
    const FakeLink = ({ children }) => <div className='fake_link'>{children}</div>;
    const { getByTestId } = render(
      <ButtonLink data-testid='test-ButtonLink' link={FakeLink}>
        hi
      </ButtonLink>,
    );
    expect(getByTestId('test-ButtonLink').parentElement.classList.contains('fake_link')).toBe(true);
  });

  test('should act as regular external link when passing a href', () => {
    const { container, getByTestId } = render(
      <ButtonLink data-testid='test-ButtonLink' href='https://derow.nl/'>
        hi
      </ButtonLink>,
    );
    expect(getByTestId('test-ButtonLink')).toHaveProperty('href', 'https://derow.nl/');
    const element = container.querySelector('a');
    expect(element).toBeTruthy();
  });

  test('should change html element when using "as" prop', () => {
    const { container } = render(
      <div>
        <ButtonLink as='button'>Joee</ButtonLink>
      </div>,
    );
    const element = container.querySelector('button');
    expect(element).toBeTruthy();
  });
});
