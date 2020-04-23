import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Main from '../components/layouts/main';
import Content from '../components/layouts/content';

describe('testing UI components', () => {
  test('Main container', () => {
      const { container, getByTestId } = render(<Main />);
      expect(container).toBeTruthy();
      const div = getByTestId('test-main')
      expect(div).toHaveStyleRule('display', 'flex');
    });

    test('Content container', () => {
      const { container, getByTestId } = render(<Content />);
      expect(container).toBeTruthy();
      const div = getByTestId('test-content')
      expect(div).toHaveStyleRule('display', 'flex');
      expect(div).toHaveStyleRule('background', '#fff');
    });

  });
