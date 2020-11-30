import { render } from '@testing-library/react';
import React from 'react';
import Container from './Container';

describe('Container', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Container data-testid='test-Container'>hi</Container>);
    expect(getByTestId('test-Container')).toBeTruthy();
    expect(getByTestId('test-Container')).toHaveTextContent('hi');
    expect(getByTestId('test-Container')).toHaveClass('container');
  });

  test('should have class mx-auto when prop marginX is passed', () => {
    const { getByTestId } = render(
      <div>
        <Container data-testid='test-Container' center>
          Joee
        </Container>
      </div>,
    );
    expect(getByTestId('test-Container')).toHaveClass('mx-auto');
  });

  test('should change html element when using "element" prop', () => {
    const { container } = render(
      <div>
        <Container data-testid='test-Container' as='a'>
          Joee
        </Container>
      </div>,
    );
    const element = container.querySelector('a');
    expect(element).toBeTruthy();
  });
});
