import "./App.css";
import React, { Component } from "react";
import InputForm from "./components/InputForm/InputForm";
import Cv from "./components/Cv/Cv";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCV: false,
      personalInfo: {},
      education: [{ id: 0 }],
      experience: [{ id: 0 }],
    };
    this.changePersonalInfo = this.changePersonalInfo.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.changeExperience = this.changeExperience.bind(this);
  }
  toggleCV = (e) => {
    e.preventDefault();
    this.setState({ showCV: !this.state.showCV });
  };
  addEducation = () => {
    //need new way to generate id to prevent collision when deleteing and adding new ids
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
  deleteEducation = (id) => {
    console.log(id);
    let eduFiltered = this.state.education.filter((edu) => edu.id !== id);
    this.setState({ education: eduFiltered });

    console.log(this.state.education);
  };
  deleteExperience = (id) => {
    console.log(id);
    let exFiltered = this.state.experience.filter((ex) => ex.id !== id);
    this.setState({ experience: exFiltered });

    console.log(this.state.experience);
  };

  render() {
    return (
      <div className="App">
        <InputForm
          toggleCV={this.toggleCV}
          personalInfo={this.state.personalInfo}
          education={this.state.education}
          experience={this.state.experience}
          changePI={this.changePersonalInfo}
          changeE={this.changeEducation}
          changeEx={this.changeExperience}
          addEdu={this.addEducation}
          addEx={this.addExperience}
          deleteEducation={this.deleteEducation}
          deleteExperience={this.deleteExperience}
        ></InputForm>
        <Cv
          showCV={this.state.showCV}
          personalInfo={this.state.personalInfo}
          education={this.state.education}
          experience={this.state.experience}
        ></Cv>
      </div>
    );
  }
}

export default App;
