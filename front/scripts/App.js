import React, { Component } from 'react';
import { useRouterHistory, Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createHistory } from 'history';

import CreatePathology from './pages/CreatePathology';
import CreateOrdonnance from './pages/CreateOrdonnance';
import Home from './pages/Home';
import Root from './pages';
import theme from './theme';

class App extends Component{
  render(){
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Router history={ hashHistory }>
            <Route path="/" component={ Root }>
              <IndexRoute component={ Home } />
              <Route path="create/pathologie" component={ CreatePathology } />
              <Route path="create/ordonnance" component={ CreateOrdonnance } />
              <Route path="search/pathologie" component={ CreatePathology } />
              <Route path="search/ordonnance" component={ CreatePathology } />
            </Route>
        </Router>
      </MuiThemeProvider>
      );
  }
}

export default App;
