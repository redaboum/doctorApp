import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStarted } from '../actions';
import TextInput from '../components/formComponents/TextInput';
// import SelectInput from '../components/formComponents/SelectInput';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';

const style = {
  margin: 12,
};

const center={
  // "display": "flex",
  // flexDirection: "column",
  // justifyContent: "center",
}

const sonStyle = {
  "justifyContent": "center",
}

class HighForm extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getStarted());
  }

  render() {
    return (
      <div style={center} >
          <TextInput indicator="Titre"/>
          <div style={{display: "flex"}}>
            <TextInput indicator="Pathologie"/>
            <TextInput indicator="Présentation clinique"  />
            <TextInput indicator="Pathologie"/>
          </div>
          <div style={{display: "flex"}}>
            <TextInput indicator="Pathologie"/>
            <TextInput indicator="Présentation clinique"  />
            <TextInput indicator="Pathologie"/>
          </div>
          <TextInput indicator="Commentaire"/>
          <RaisedButton label="Ajouter une molécule" primary={true} style={style}/>
      </div>
    );
  }
}

export default connect(state => state)(HighForm);