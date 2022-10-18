import React, { Component } from "react";

class GeneralInfo extends Component {
  //   constructor(props) {
  //     super(props);

  //     // this.handleChange = this.handleChange.bind(this);
  //   }
  //   handleChange = (target) => {
  //     this.setState({
  //       [target.name]: target.value,
  //     });
  //   };

  render() {
    return (
      <div className="input-section-container">
        <h1>Personal Info</h1>
        <input
          name="firstName"
          type="text"
          placeholder="first name"
          onChange={(e) => this.props.change(e.target)}
        />
        <input
          name="lastName"
          type="text"
          placeholder="last name"
          onChange={(e) => this.props.change(e.target)}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={(e) => this.props.change(e.target)}
        />
        <input
          name="phoneNumber"
          type="text"
          placeholder="phone number"
          onChange={(e) => this.props.change(e.target)}
        />
      </div>
    );
  }
}

export default GeneralInfo;
