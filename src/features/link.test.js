import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { Link } from '../stories/link.stories';

describe('Renders NavLink component', () => {
    test('with default behavior', () => {
      const { container, getByTestId } = render(<Link />);
      expect(container).toBeTruthy();
      const link = getByTestId('link')
      expect(link).toHaveStyleRule('text-decoration', 'none');
    });
  });
