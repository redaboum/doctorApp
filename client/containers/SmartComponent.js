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
	// backgroundColor: "white",
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
				<div>
					<TextInput indicator="Spécialité" />
				</div>
				<div>
					<TextInput indicator="Pathologie" />
				</div>
				<div>
					<TextInput indicator="Présentation clinique" />
				</div>
				<div>
					<TextInput indicator="Recommendation pour la prise en charge" style={{width: 700}} multiLine={true}/>
				</div>
				<div>
				<RaisedButton label="Créer une ordonnance" primary={true} style={style} />
				</div>
			</div>
		);
	}
}

export default connect(state => state)(SmartComponent);