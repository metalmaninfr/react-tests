import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Small, Medium, Large } from '../stories/input.stories';

describe('Renders Title component', () => {
    let spy;

    beforeEach(() => {
      spy = jest.fn();
    });

    test('with default behavior', () => {
      const { container, getByTestId } = render(<Medium onChange={spy} />);
      expect(container).toBeTruthy();
      const input = getByTestId('medium-input');
      fireEvent.change(input, {target: {value: 'a'}})
    });

    test('with a small size', () => {
        const { container, getByTestId } = render(<Small onChange={spy} />);
        expect(container).toBeTruthy();
        const input = getByTestId('small-input');
        fireEvent.change(input, {target: {value: 'a'}});
    });

    test('with a large size', () => {
        const { container, getByTestId } = render(<Large onChange={spy} />);
        expect(container).toBeTruthy();
        const input = getByTestId('large-input')
        fireEvent.change(input, {target: {value: 'a'}});
    });
  });
