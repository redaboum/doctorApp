import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute, Switch } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'

import theme from './theme';
import GlobalForm from './pages/GlobalForm';
import addMolecules from './pages/addMolecules';

class App extends Component{
  render(){
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Router history={ browserHistory }>
            <Route path="/" component={ GlobalForm }/>
            <Route path="/ordonnance/:ordonnanceId/molecules" component={ addMolecules }/>
        </Router>
      </MuiThemeProvider>
      );
  }
}

export default App;
