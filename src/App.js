import "./App.css";
import React, { Component, useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import Cv from "./components/Cv/Cv";
const App = () => {
  const [showCV, setShowCV] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([{ id: 0 }]);
  const [experience, setExperience] = useState([{ id: 0 }]);
  let toggleCV = (e) => {
    e.preventDefault();
    setShowCV(!showCV);
  };
  let addEducation = () => {
    //need new way to generate id to prevent collision when deleteing and adding new ids
    console.log("add ed");
    setEducation((prevState) => [...prevState, { id: prevState.length }]);
  };
  let addExperience = () => {
    console.log("add ex");
    setEducation((prevState) => ({
      experience: [...prevState, { id: prevState.length }],
    }));
  };

  let changePersonalInfo = (target) => {
    setPersonalInfo((prevState) => {
      return {
        ...prevState,
        [target.name]: target.value,
      };
    });
  };
  let changeEducation = (target, id) => {
    let eduCopy = education;
    let item = { ...eduCopy[id] };
    item[target.name] = target.value;
    eduCopy[id] = item;
    console.log("change");
    //choose by id
    //console.log(this.state.education);
    setEducation(eduCopy);
  };
  let changeExperience = (target, id) => {
    let exCopy = experience;
    let item = { ...exCopy[id] };
    item[target.name] = target.value;
    exCopy[id] = item;

    setExperience(exCopy);
  };
  let deleteEducation = (id) => {
    console.log(id);
    let eduFiltered = education.filter((edu) => edu.id !== id);
    setEducation(eduFiltered);
  };
  let deleteExperience = (id) => {
    console.log(id);
    let exFiltered = experience.filter((ex) => ex.id !== id);
    setExperience(exFiltered);
  };

  return (
    <div className="App">
      <InputForm
        toggleCV={toggleCV}
        personalInfo={personalInfo}
        education={education}
        experience={experience}
        changePI={changePersonalInfo}
        changeE={changeEducation}
        changeEx={changeExperience}
        addEdu={addEducation}
        addEx={addExperience}
        deleteEducation={deleteEducation}
        deleteExperience={deleteExperience}
      ></InputForm>
      <Cv
        showCV={showCV}
        personalInfo={personalInfo}
        education={education}
        experience={experience}
      ></Cv>
    </div>
  );
};

export default App;
