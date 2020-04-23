import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Small, Medium, Large } from '../stories/title.stories';

describe('Renders Title component', () => {
    test('with default behavior', () => {
      const { container, getByTestId } = render(<Medium />);
      expect(container).toBeTruthy();
      const title = getByTestId('medium-title')
      expect(title).toHaveStyleRule('font-size', '20px');
    });

    test('with a small size', () => {
        const { container, getByTestId } = render(<Small />);
        expect(container).toBeTruthy();
        const title = getByTestId('small-title')
        expect(title).toHaveStyleRule('font-size', '16px');
    });

    test('with a large size', () => {
        const { container, getByTestId } = render(<Large />);
        expect(container).toBeTruthy();
        const title = getByTestId('large-title')
      expect(title).toHaveStyleRule('font-size', '24px');
    });
  });
