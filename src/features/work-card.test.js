import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Works } from '../stories/work-card.stories';

describe('Renders Card component', () => {
    test('card Container', () => {
      const { container, getByTestId } = render(<Works />);
      expect(container).toBeTruthy();
      const card = getByTestId('img-circle')
      expect(card).toHaveStyleRule('height', '2.5rem');
      expect(card).toHaveStyleRule('width', '2.5rem');
      expect(card).toHaveStyleRule('border-radius', '50%');
    });
  });
