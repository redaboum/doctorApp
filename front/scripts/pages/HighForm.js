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
		this.setState({pathology: pathology.target.value});
	};

	setClinical = (clinical) => {
		this.setState({clinical: clinical.target.value});
	};

	setRecommendation = (recommendation) => {
		this.setState({recommendation: recommendation.target.value});
	};

	clickNext = () => {
		console.log(this.state.speciality);
		postOrdonnance(
			this.state.speciality,
			this.state.pathology,
			this.state.clinical,
			this.state.recommendation);
	};

	render() {
		return (
			<div>
					<SelectInput indicator="Spécialité" setFunction={this.setSpeciality} elements={this.props.specialities}/>
					<TextInput indicator="Pathologie" setFunction={this.setPathology} />
					<TextInput indicator="Présentation clinique" setFunction={this.setClinical} />
					<TextInput indicator="Recommendation pour la prise en charge" style={{width: 700}} multiLine={true} setFunction={this.setRecommendation} />
					<RaisedButton label="Créer une ordonnance" primary={true} style={style} onClick={this.clickNext}/>
			</div>
		);
	}
}

export default withRouter(HighForm);
