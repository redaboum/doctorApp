import React, { Component } from 'react';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 12,
};

class HighForm extends Component {
  constructor(props) {
    super(props);
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

export default HighForm;
