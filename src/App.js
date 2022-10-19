import "./App.css";
import React, { Component } from "react";
import InputForm from "./components/InputForm/InputForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {},
      education: [{ id: 0 }],
      experience: {},
    };
    this.changePersonalInfo = this.changePersonalInfo.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.changeExperience = this.changeExperience.bind(this);
  }
  addEducation = () => {
    console.log("add");
    this.setState((prevState) => ({
      education: [...prevState.education, { id: prevState.education.length }],
    }));
  };

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
  changeEducation = (target, id) => {
    let eduCopy = this.state.education;
    let item = { ...eduCopy[id] };
    item[target.name] = target.value;
    eduCopy[id] = item;
    console.log("change");
    //choose by id
    console.log(this.state.education);
    this.setState({ education: eduCopy });
  };
  changeExperience = (target) => {
    this.setState((prevState) => {
      return {
        experience: {
          ...prevState.experience,
          [target.name]: target.value,
        },
      };
    });
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
          changeEx={this.changeExperience}
          addEdu={this.addEducation}
        ></InputForm>
      </div>
    );
  }
}

export default App;
