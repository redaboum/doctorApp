import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStarted } from '../actions';
import TextInput from '../components/formComponents/TextInput';
import SelectInput from '../components/formComponents/SelectInput';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';

const style = {
  margin: 12,
};

class HighForm extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getStarted());
  }

  render() {
    return (
      <div>
          <TextInput indicator="Titre"/>
          <div style={{display: "flex"}}>
            <SelectInput indicator="DCI"/>
            <TextInput indicator="Dose"  />
            <SelectInput indicator="Forme Galiénique"/>
          </div>
          <div style={{display: "flex"}}>
            <TextInput indicator="Nombre"/>
            <SelectInput indicator="Forme galiénique"  />
            <TextInput indicator="Nombre de prise"/>
            <TextInput indicator="Durée en jour"/>
          </div>
          <TextInput indicator="Commentaire"/>
          <RaisedButton label="Ajouter une molécule" primary={true} style={style}/>
      </div>
    );
  }
}

export default connect(state => state)(HighForm);
