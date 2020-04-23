import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';


import LinkGroup from '../components/molecules/link-group'

const history = createBrowserHistory();

describe('Renders link layout', () => {
    test('default behavior', () => {
      const { container, getByTestId } = render(<Router history={history}><LinkGroup /></Router>);
      expect(container).toBeTruthy();
      const group = getByTestId('link-group-container')
      expect(group).toHaveStyleRule('display', 'flex');
      expect(group).toHaveStyleRule('position', 'relative');
    });
  });
