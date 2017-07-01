import React, { Component } from 'react';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import RaisedButton from 'material-ui/RaisedButton';

import {withRouter} from "react-router-dom";


const style = {
  margin: 15,
};

class HighForm extends Component {
	constructor(props) {
		super(props);
	}

	clickNext = ()=>{
		this.props.history.push("/ordonnance");
	};

	render() {
		return (
			<div>
					<SelectInput indicator="Spécialité"/>
					<TextInput indicator="Pathologie"/>
					<TextInput indicator="Présentation clinique"  />
					<TextInput indicator="Recommendation pour la prise en charge" style={{width: 700}} multiLine={true}/>
					<RaisedButton label="Créer une ordonnance" primary={true} style={style} onClick={this.clickNext}/>
			</div>
		);
	}
}

export default withRouter(HighForm);
