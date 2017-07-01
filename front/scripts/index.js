import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createHashHistory } from 'history'
import { createBrowserHistory } from 'history'


import App from './App';
import theme from './theme';

const history = createBrowserHistory();

render(
  <App />,
  document.getElementById('root')
);
