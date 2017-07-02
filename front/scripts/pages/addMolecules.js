import React, { Component } from 'react';
import LowForm from './LowForm';


class addMolecules extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
          <h2>  </h2>
          <LowForm />
      </div>
    );
  }
}

export default addMolecules;
