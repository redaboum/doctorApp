import React, { Component } from 'react';
import LowForm from './LowForm';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

let moleculeModel = {
        titre: null,
        DCI: null,
        dose: null,
        galieniqueForm: null,
        number: null,
        galienicForm2: null,
        numberTaken: null,
        duration: null,
        commentaire: null,
      }

class addMolecules extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: 5,
      LowFormArray: [1],
      quantity: 1,
      molecules: [
      {
        titre: null,
        DCI: null,
        dose: null,
        galieniqueForm: null,
        number: null,
        galienicForm2: null,
        numberTaken: null,
        duration: null,
        commentaire: null,
      },
    ]
    };
  }

  setObject = (i, titre) => {
    let mols = this.state.molecules;
    mols[i].titre = titre;
    this.setState({molecules: mols});
  };

  addLowForm = () => {
    let q = this.state.LowFormArray;
    let n = q.length;
    let mols = this.state.molecules;
    mols.push(Object.assign({}, moleculeModel));
    this.setState({molecules: mols});
    q.push(n+1);
    this.setState({LowFormArray: q});
  }

  render() {
    console.log(this.state.value);
    return (
      <div>
          <h2> Coucou </h2>
          { this.state.LowFormArray.map( (elt) => <LowForm key={elt} number={elt} setFunction={this.setObject}/>) }
          <RaisedButton 
            label="Ajouter une molécule" 
            primary={ true } 
            style={ style }
            onClick={ this.addLowForm }
          />
          <RaisedButton 
            label="soumettre l'ordonnance" 
            primary={ true } 
            style={ style }
          />

      </div>
    );
  }
}

export default addMolecules;
