import React, { Component } from 'react';
import HighForm from './HighForm'
import LowForm from './LowForm'
import RaisedButton from 'material-ui/RaisedButton';
import specialities from '../assets/data/specialities'



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
        <HighForm specialities={specialities} />
      </div>
    );
  }
}

export default GlobalForm;
