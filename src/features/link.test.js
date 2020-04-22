import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { NavLink } from '../stories/link.stories';

describe('Renders NavLink component', () => {
    test('with default behavior', () => {
      const { container, getByTestId } = render(<NavLink />);
      const link = getByTestId('link')
      link.click();
      expect(container.className).toContain("active");
    });
  });
