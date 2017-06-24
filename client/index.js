import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HighForm from './containers/HighForm';
import LowForm from './containers/LowForm';
import configureStore from './store/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <div>
    		<HighForm />
        <LowForm />
      </div>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
