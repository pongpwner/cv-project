import React, { Component } from "react";
import CvSection from "../Cv-section/Cv-section";
import ReactDOM from "react-dom";
class Cv extends Component {
  render() {
    return this.props.showCV
      ? ReactDOM.createPortal(
          <div className="cv">
            <h2 className="cv-heading">Personal Info</h2>
            <CvSection>
              <div>
                {`${this.props.personalInfo.firstName} ${this.props.personalInfo.lastName}`}
              </div>
              <div>{`${this.props.personalInfo.email}`}</div>
              <div>{`${this.props.personalInfo.phoneNumber}`}</div>
            </CvSection>
            <h2 className="cv-heading">Education</h2>
            {this.props.education.map((edu) => {
              return (
                <CvSection>
                  <div>{`${edu.eduLevel}`}</div>
                  <div>{`${edu.university}`}</div>
                  <div>{`from: ${edu.dateFrom} - to: ${edu.dateTo}`}</div>
                </CvSection>
              );
            })}
            <h2 className="cv-heading">Experience</h2>
            {this.props.experience.map((ex) => {
              return (
                <CvSection>
                  <div>{`${ex.jobTitle}`}</div>
                  <div>{`${ex.employer}`}</div>
                  <div>{`${ex.resposibilities}`}</div>
                  <div>{`from: ${ex.dateFromE} - to: ${ex.dateToE}`}</div>
                </CvSection>
              );
            })}
          </div>,
          document.getElementById("cv")
        )
      : null;
  }
}

export default Cv;
