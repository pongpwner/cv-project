import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="input-section-container">
        <h1>Education</h1>
        <input
          type="text"
          placeholder="level of education"
          name="eduLevel"
          onChange={(e) => this.props.change(e.target, this.props.id)}
        />
        <input
          type="text"
          placeholder="university?"
          name="university"
          onChange={(e) => this.props.change(e.target, this.props.id)}
        />
        <label htmlFor="from">From:</label>
        <input
          type="date"
          id="from"
          placeholder="from"
          name="dateFrom"
          onChange={(e) => this.props.change(e.target, this.props.id)}
        />
        <label htmlFor="to">To:</label>
        <input
          type="date"
          id="to"
          placeholder="to"
          name="dateTo"
          onChange={(e) => this.props.change(e.target, this.props.id)}
        />
        <button type="button" onClick={this.props.add}>
          Add Education
        </button>
      </div>
    );
  }
}
//todo add a button to create another experience section
export default Education;
