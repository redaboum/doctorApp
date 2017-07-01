import React, { Component } from 'react';
import HighForm from './HighForm'
import LowForm from './LowForm'
import RaisedButton from 'material-ui/RaisedButton';



const style = {
  margin: 12,
};

class GlobalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false
    };
  }

  render() {
    return (
      <div>
        <HighForm />
      </div>
    );
  }
}

export default GlobalForm;
