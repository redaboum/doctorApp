import React, { Component } from 'react';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import RaisedButton from 'material-ui/RaisedButton';
import { postOrdonnance } from '../services/getApi';
import {withRouter} from "react-router-dom";


const style = {
  margin: 15,
};

class HighForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			speciality: null,
			pathology: null,
			clinical: null,
			recommendation: null,
		}
	}

	// setSpeciality = () => {

	// }

	clickNext = () => {
		const body = postOrdonnance("test","test","test","test");
		console.log(body);
		this.props.history.push("/ordonnance/123");
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
