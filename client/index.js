import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalForm from './containers/GlobalForm';
import configureStore from './store/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <div>
    		<GlobalForm />
      </div>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
