/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Button data-testid='test-Button'>hi</Button>);
    expect(getByTestId('test-Button')).toBeTruthy();
    expect(getByTestId('test-Button')).toHaveTextContent('hi');
  });

  const variants = ['primary', 'secondary', 'tertairy'];
  variants.forEach(variant => {
    test(`should be variant: ${variant}`, () => {
      const { getByTestId } = render(
        <Button data-testid='test-Button' variant={variant}>
          hi
        </Button>,
      );
      expect(getByTestId('test-Button').classList.contains(variant)).toBe(true);
    });
  });

  test('should transform to a Link component', () => {
    // eslint-disable-next-line react/prop-types
    const FakeLink = ({ children }) => <div className='fake_link'>{children}</div>;
    const { getByTestId } = render(
      <Button data-testid='test-Button' link={FakeLink}>
        hi
      </Button>,
    );
    expect(getByTestId('test-Button').parentElement.classList.contains('fake_link')).toBe(true);
  });

  test('should act as regular external link when passing a href', () => {
    const { container, getByTestId } = render(
      <Button as='a' data-testid='test-Button' href='https://derow.nl/'>
        hi
      </Button>,
    );
    expect(getByTestId('test-Button')).toHaveProperty('href', 'https://derow.nl/');
    const element = container.querySelector('a');
    expect(element).toBeTruthy();
  });

  test('should change html element when using "as" prop', () => {
    const { container } = render(
      <div>
        <Button as='a'>Joee</Button>
      </div>,
    );
    const element = container.querySelector('a');
    expect(element).toBeTruthy();
  });
});
