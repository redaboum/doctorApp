import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createBrowserHistory } from 'history'

import theme from './theme';
import GlobalForm from './pages/GlobalForm';
import LowForm from './pages/LowForm';

const history = createBrowserHistory();

class App extends Component{
  render(){
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Router history={ history }>
          <div>
            <Route exact path="/" component={ GlobalForm } />
            <Route path="/ordonnance" component={ LowForm } />
          </div>
        </Router>
      </MuiThemeProvider>
      );
  }
}

export default App;