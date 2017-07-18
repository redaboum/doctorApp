import React, { Component } from 'react';
import { useRouterHistory, Router, Route, browserHistory, IndexRoute, Switch } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createHistory } from 'history';

import theme from './theme';
import GlobalForm from './pages/GlobalForm';
import addMolecules from './pages/addMolecules';
import Home from './pages/Home';
import Root from './pages';

class App extends Component{
  render(){
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Router history={ browserHistory }>
            <Route path="/" component={ Root }/>
            <IndexRoute component={ Home } />
            <Route path="create/pathologie" component={ GlobalForm } />
            <Route path="create/ordonnance" component={ addMolecules } />
            <Route path="search/pathologie" component={ GlobalForm } />
            <Route path="search/ordonnance" component={ GlobalForm } />
        </Router>
      </MuiThemeProvider>
      );
  }
}

export default App;
