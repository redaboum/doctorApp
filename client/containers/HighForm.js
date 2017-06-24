import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../components/formComponents/TextInput';
// import SelectInput from '../components/formComponents/SelectInput';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 15,
};

class HighForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
					<TextInput indicator="Spécialité"/>
					<TextInput indicator="Pathologie"/>
					<TextInput indicator="Présentation clinique"  />
					<TextInput indicator="Recommendation pour la prise en charge" style={{width: 700}} multiLine={true}/>
					<RaisedButton label="Créer une ordonnance" primary={true} style={style} onClick={this.props.showClick}/>
			</div>
		);
	}
}

export default connect(state => state)(HighForm);