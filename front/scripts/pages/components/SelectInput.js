import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const styleDisp = {
  "display": "flex",
  flexDirection: "row",
  fontFamily: "Roboto",
}

export default class SelectFieldCustom extends Component {

   // handleChange = (event, index, value) => this.setState({value})

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    }
  }


  handleChange(event, index, value) {
    this.setState({value: value});
    this.props.setFunction(value);
  }

  render() {
    return (
      <div style={styleDisp}>
        <p style={{margin: 15}} >{this.props.indicator}</p>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          style = {{marginLeft: 15}}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
      </div>
    );
  }
}
