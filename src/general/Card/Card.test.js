/* eslint-disable max-len */
/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import Card from './Card';

describe('Card', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Card data-testid='test-Card'>hi</Card>);
    expect(getByTestId('test-Card')).toBeTruthy();
    expect(getByTestId('test-Card')).toHaveTextContent('hi');
    expect(getByTestId('test-Card').classList.contains('Card')).toBe(true);
  });

  test('can accept chidlren and display them', () => {
    const { getByText } = render(
      <Card>
        <h2>Rowin</h2>
      </Card>,
    );
    expect(getByText('Rowin')).toBeTruthy();
  });

  test('accept card primary', () => {
    const { getByTestId } = render(
      <Card data-testid='test-Card' variant='primary' />,
    );
    expect(getByTestId('test-Card').classList.contains('primary')).toBe(true);
  });
  test('accept card secondary', () => {
    const { getByTestId } = render(
      <Card data-testid='test-Card' variant='secondary' />,
    );
    expect(getByTestId('test-Card')).toHaveClass('secondary');
  });

  test('is by default primary', () => {
    const { getByTestId } = render(<Card data-testid='test-Card'>hi</Card>);
    expect(getByTestId('test-Card')).toHaveClass('primary');
  });

  test('should display a img', () => {
    const { getByTestId } = render(
      <Card
        data-testid='test-Card'
        imageWrapperProps={{
          'data-testid': 'card-image',
          className: 'card-image',
        }}
        image='https://aparthotelsberwang.at/wp-content/uploads/2016/02/meer-berwang-uitzicht-bergen-tirol-oostenrijk-zugspitz-arena-zomervakantie-600x400.jpg'
      >
        hi
      </Card>,
    );
    expect(getByTestId('card-image')).toHaveClass('card-image');
  });

  test('should img and a title', () => {
    const { getByTestId } = render(
      <Card
        data-testid='test-Card'
        cardTitleWrapperProps={{
          'data-testid': 'title-here',
          className: 'title-here',
        }}
        title='Rowin here'
        image='https://aparthotelsberwang.at/wp-content/uploads/2016/02/meer-berwang-uitzicht-bergen-tirol-oostenrijk-zugspitz-arena-zomervakantie-600x400.jpg'
      >
        hi
      </Card>,
    );
    expect(getByTestId('title-here')).toHaveClass('title-here');
    expect(getByTestId('title-here')).toHaveTextContent('Rowin here');
  });
});
