import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStarted } from '../actions';
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
    }
  }

  componentWillMount() {
    this.props.dispatch(getStarted());
  }

  showClick(){
    console.log("coucou");
    // this.setState({show: !this.state.show});
  }

  render() {
    return (
      <div>
        <HighForm afterClick={this.showClick.bind(this)} />
        { this.state.show ? <LowForm /> : null }
      </div>
    );
  }
}

export default connect(state => state)(GlobalForm);