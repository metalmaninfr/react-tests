import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader'
import './index.css';
import App from './App';
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

WebFontLoader.load({
  google: {
    families: [
      'Roboto:300,400,900:latin-ext',
    ]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
