import React from 'react';
import NavLink from '../components/atoms/menuLink';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const Link = props => (
  <div style={{ padding: '2rem 0' }}>
  <Router history={history}>
    <NavLink to="/" label="This is a link" testid="link" onClick={props.onClick} />
  </Router>
  </div>
);

