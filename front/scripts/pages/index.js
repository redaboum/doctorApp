import React, { Component } from 'react';
import Navbar from '../components/Navbar';

export default class Root extends Component {
  render() {
    return (
      <Navbar>
        {this.props.children}
      </Navbar>
    );
  }
}
