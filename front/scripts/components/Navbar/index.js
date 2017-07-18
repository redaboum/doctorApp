import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import appStyle from '../../config/appStyle';

const styles = {
  nav: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  navTitle: {
    lineHeight: '80px',
    color: appStyle.colors.primary,
    fontWeight: 'bold',
    letterSpacing: '1px',
    flex: 'initial',
    width: '200px',
    cursor: 'pointer',
  },
  tabsStyle: {
    width: '700px',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '17px',
  },
  tabInkBarStyle: {
    height: '3px',
    marginLeft: '15px',
    width: '70px',
  },
  tabStyle: {
    color: 'white',
    fontSize: '14px',
    textTransform: 'initial',
    height: '36px',
  },
  tabButtonStyle: {
    height: '36px',
  },
};

class Navbar extends Component {
  returnHome = () => {
    this.props.router.push('/');
  };

  render() {
    return (
      <div>
        <AppBar
          style={styles.nav}
          showMenuIconButton={false}
          title="Ordonnance"
          titleStyle={styles.navTitle}
          onTitleTouchTap={this.returnHome}
        >
          <Tabs
            value={this.props.location.pathname}
            style={styles.tabsStyle}
            inkBarStyle={styles.tabInkBarStyle}
          >
            <Tab
              style={styles.tabStyle}
              buttonStyle={styles.tabButtonStyle}
              label="Créer pathologie"
              value="/create/pathologie"
              containerElement={<Link to="/create/pathologie" />}
            />
            <Tab
              style={styles.tabStyle}
              buttonStyle={styles.tabButtonStyle}
              label="Créer ordonnance"
              value="/create/ordonnance"
              containerElement={<Link to="/create/ordonnance" />}
            />
            <Tab
              style={styles.tabStyle}
              buttonStyle={styles.tabButtonStyle}
              label="Chercher pathologie"
              value="/search/pathologie"
              containerElement={<Link to="/search/pathologie" />}
            />
            <Tab
              style={styles.tabStyle}
              buttonStyle={styles.tabButtonStyle}
              label="Chercher ordonnance"
              value="/search/ordonnance"
              containerElement={<Link to="/search/ordonnance" />}
            />
          </Tabs>
        </AppBar>
        {this.props.children}
      </div>

    );
  }
}

export default withRouter(Navbar);
