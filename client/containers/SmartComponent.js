import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStarted } from '../actions';
import TextInput from '../components/formComponents/TextInput';
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

class SmartComponent extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(getStarted());
	}

	render() {
		return (
			<div style={center} >
					<TextInput indicator="Spécialité"/>
					<TextInput indicator="Pathologie"/>
					<TextInput indicator="Présentation clinique"  />
					<TextInput indicator="Recommendation pour la prise en charge" style={{width: 700}} multiLine={true}/>
				<RaisedButton label="Créer une ordonnance" primary={true} style={style}/>
			</div>
		);
	}
}

export default connect(state => state)(SmartComponent);