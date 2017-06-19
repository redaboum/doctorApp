import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStarted } from '../actions';
import DumbComponent from '../components/DumbComponent';
import $ from 'jquery';

class SmartComponent extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.dispatch(getStarted());
	}
	cliked(){
		$.post("/api/Users/login", {username: "test", password: "test"}, function(data){console.log(data);})}
	render() {
		return (
			<div>
				<DumbComponent indicator="username" />
				<DumbComponent indicator="password" />
				<button onClick={this.cliked.bind(this)}>submit</button>
			</div>
		);
	}
}

export default connect(state => state)(SmartComponent);