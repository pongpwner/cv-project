import React, { Component } from "react";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";

class InputForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <form action="/" className="input-form">
        <GeneralInfo change={this.props.changePI}></GeneralInfo>
        {this.props.education.map((edu) => {
          return (
            <Education
              key={edu.id}
              id={edu.id}
              change={this.props.changeE}
              add={this.props.addEdu}
            ></Education>
          );
        })}

        {this.props.experience.map((ex) => {
          return (
            <Experience
              key={ex.id}
              id={ex.id}
              change={this.props.changeEx}
              add={this.props.addEx}
            ></Experience>
          );
        })}

        <button type="submit"> Create CV</button>
      </form>
    );
  }
}

export default InputForm;
