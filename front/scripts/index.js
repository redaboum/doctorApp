import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import theme from './theme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <App />,
  document.getElementById('root')
);
