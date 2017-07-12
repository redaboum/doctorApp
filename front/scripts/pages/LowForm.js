import React, { Component } from 'react';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';


class LowForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div style={{margin: 50}}>
          <TextInput setFunction={this.props.setFunction} indicator="Titre"/>
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
      </div>
    );
  }
}

export default LowForm;
