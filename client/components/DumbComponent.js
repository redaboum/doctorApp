import React, { Component } from 'react';
import '../public/stylesheets/boilerplate.css';

class DumbComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<p>{this.props.indicator}</p>
				<input type="text" />
			</div>
		);
	}
}

export default DumbComponent;