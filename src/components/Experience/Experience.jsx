import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div>
        <h1>Experience</h1>
        <input type="text" placeholder="job title" />
        <input type="text" placeholder="employer" />
        <input type="text" placeholder="resposibilities" />
        <label htmlFor="from">From:</label>
        <input
          type="date"
          id="from"
          placeholder="from"
          name="dateFromE"
          onChange={(e) => this.props.change(e.target)}
        />
        <label htmlFor="to">To:</label>
        <input
          type="date"
          id="to"
          placeholder="to"
          name="dateToE"
          onChange={(e) => this.props.change(e.target)}
        />
      </div>
    );
  }
}

export default Experience;
