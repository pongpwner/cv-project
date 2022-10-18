import React, { Component } from "react";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import Education from "../Education/Education";
class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form action="/" className="input-form">
        <GeneralInfo change={this.props.changePI}></GeneralInfo>
        <Education change={this.props.changeE}></Education>
        <button type="submit"> Create CV</button>
      </form>
    );
  }
}

export default InputForm;