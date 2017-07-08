import React, { Component } from 'react';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import RaisedButton from 'material-ui/RaisedButton';
import { postOrdonnance } from '../services/getApi';
import {withRouter} from "react-router";


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

	setSpeciality = (speciality) => {
		this.setState({speciality: speciality});
	};

	setPathology = (pathology) => {
		console.log(pathology.target.value);
		this.setState({pathology: pathology.target.value});
	};

	setClinical = (clinical) => {
		this.setState({clinical: clinical.target.value});
	};

	setRecommendation = (recommendation) => {
		this.setState({recommendation: recommendation.target.value});
	};

	clickNext = () => {
		const body = postOrdonnance(this.state.speciality,this.state.pathology,this.state.clinical,this.state.recommendation);
		console.log(body);
		this.props.history.push("/ordonnance/123");
	};

	render() {
		console.log(this.state.speciality);
		console.log(this.state.clinical);
		return (
			<div>
					<SelectInput indicator="Spécialité" setFunction={this.setSpeciality}/>
					<TextInput indicator="Pathologie" setFunction={this.setPathology} />
					<TextInput indicator="Présentation clinique" setFunction={this.setClinical} />
					<TextInput indicator="Recommendation pour la prise en charge" style={{width: 700}} multiLine={true} setFunction={this.setRecommendation} />
					<RaisedButton label="Créer une ordonnance" primary={true} style={style} onClick={this.clickNext}/>
			</div>
		);
	}
}

export default withRouter(HighForm);
