import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const styleDisp = {
  "display": "inline-block",
  margin: 15,
  fontFamily: "Roboto",
}

const large = {
  width: "100px",
}

export default class SelectFieldCustom extends Component {

   // handleChange = (event, index, value) => this.setState({value})

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    }
  }


  // handleChange = (event, index, value) => this.setState({value: value});

  render() {
    return (
      <div>
        <p style={styleDisp}>{this.props.indicator}</p>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
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
