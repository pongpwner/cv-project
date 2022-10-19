import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div>
        <h1>Experience</h1>
        <input
          type="text"
          placeholder="job title"
          name="jobTitle"
          onChange={(e) => this.props.change(e.target, this.props.id)}
        />
        <input
          type="text"
          placeholder="employer"
          name="employer"
          onChange={(e) => this.props.change(e.target, this.props.id)}
        />
        <input
          type="text"
          placeholder="resposibilities"
          onChange={(e) => this.props.change(e.target, this.props.id)}
        />
        <label htmlFor="from">From:</label>
        <input
          type="date"
          id="from"
          placeholder="from"
          name="dateFromE"
          onChange={(e) => this.props.change(e.target, this.props.id)}
        />
        <label htmlFor="to">To:</label>
        <input
          type="date"
          id="to"
          placeholder="to"
          name="dateToE"
          onChange={(e) => this.props.change(e.target, this.props.id)}
        />
        {this.props.id ===
        this.props.experience[this.props.experience.length - 1].id ? (
          <button type="button" onClick={this.props.add}>
            Add Experience
          </button>
        ) : (
          <button
            onClick={() => this.props.delete(this.props.id)}
            type="button"
          >
            Delete
          </button>
        )}
      </div>
    );
  }
}

export default Experience;
