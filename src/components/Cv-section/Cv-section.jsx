import React, { Component } from "react";

class CvSection extends Component {
  render() {
    return <div className="cv-section">{this.props.children}</div>;
  }
}
export default CvSection;
