import "./App.css";
import React, { Component } from "react";
import InputForm from "./components/InputForm/InputForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {},
      education: [{ id: 0 }],
      experience: [{ id: 0 }],
    };
    this.changePersonalInfo = this.changePersonalInfo.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.changeExperience = this.changeExperience.bind(this);
  }
  addEducation = () => {
    console.log("add ed");
    this.setState((prevState) => ({
      education: [...prevState.education, { id: prevState.education.length }],
    }));
    console.log(this.state);
  };
  addExperience = () => {
    console.log("add ex");
    this.setState((prevState) => ({
      experience: [
        ...prevState.experience,
        { id: prevState.experience.length },
      ],
    }));
    console.log(this.state);
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
  changeExperience = (target, id) => {
    let exCopy = this.state.experience;
    let item = { ...exCopy[id] };
    item[target.name] = target.value;
    exCopy[id] = item;
    console.log(this.state.experience);
    this.setState({ experience: exCopy });
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
          addEx={this.addExperience}
        ></InputForm>
      </div>
    );
  }
}

export default App;
