import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Default } from '../stories/card.stories';

describe('Renders Card component', () => {
    test('card Container', () => {
      const { container, getByTestId } = render(<Default />);
      expect(container).toBeTruthy();
      const card = getByTestId('card-container')
      expect(card).toHaveStyleRule('background', 'white');
      expect(card).toHaveStyleRule('box-shadow', '1px 3px 37px -10px rgba(0,0,0,0.75)');
    });
  });
