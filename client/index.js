import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SmartComponent from './containers/SmartComponent';
import configureStore from './store/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
    		<SmartComponent />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
