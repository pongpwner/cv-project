import React, { Component } from "react";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
//import { ReactDOM } from "react";
//import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import Cv from "../Cv/Cv";
class InputForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  // createCv = (e) => {
  //   e.preventDefault();
  //   console.log("submit");
  //   ReactDOM.createPortal(
  //     <Cv
  //       personalInfo={this.props.personalInfo}
  //       education={this.props.education}
  //       experience={this.props.experience}
  //     ></Cv>,
  //     document.getElementById("root")
  //   );
  //   //console.log("submiteee");
  // };

  render() {
    return (
      <form
        action="/"
        className="input-form"
        onSubmit={(e) => this.props.toggleCV(e)}
      >
        <GeneralInfo change={this.props.changePI}></GeneralInfo>
        {this.props.education.map((edu) => {
          return (
            <Education
              key={edu.id}
              id={edu.id}
              change={this.props.changeE}
              add={this.props.addEdu}
              education={this.props.education}
              delete={this.props.deleteEducation}
            ></Education>
          );
        })}

        {this.props.experience.map((ex) => {
          return (
            <Experience
              key={ex.id}
              id={ex.id}
              experience={this.props.experience}
              delete={this.props.deleteExperience}
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
