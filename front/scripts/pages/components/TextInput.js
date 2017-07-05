import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const styleDisp = {
  "display": "inline-block",
  margin: 15,
  fontFamily: "Roboto",
}

const large = {
  width: "100px",
}

class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  test = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <p style={styleDisp}>{this.props.indicator}</p>
        <TextField hintText={this.props.indicator} style={this.props.style} multiLine={this.props.multiLine} onChange={this.props.setFunction}/>
      </div>
    );
  }
}

export default TextInput;
