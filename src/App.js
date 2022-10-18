import "./App.css";
import React, { Component } from "react";
import InputForm from "./components/InputForm/InputForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {},
      education: {},
      experience: {},
    };
    this.changePersonalInfo = this.changePersonalInfo.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
  }
  changePersonalInfo = (target) => {
    this.setState((prevState) => {
      return {
        personalInfo: {
          ...prevState.personalInfo,
          [target.name]: target.value,
        },
      };
    });
    console.log(this.state);
  };
  changeEducation = (target) => {
    this.setState((prevState) => {
      return {
        education: {
          ...prevState.education,
          [target.name]: target.value,
        },
      };
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <InputForm
          personalInfo={this.state.personalInfo}
          education={this.state.education}
          experience={this.state.experience}
          changePI={this.changePersonalInfo}
          changeE={this.changeEducation}
        ></InputForm>
      </div>
    );
  }
}

export default App;
