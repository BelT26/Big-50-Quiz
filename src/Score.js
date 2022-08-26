import React, { Component } from "react";

class Score extends Component {
  render() {
    return (
      <div className="Score">
        <h2>Current Score: {this.props.score}</h2>
      </div>
    );
  }
}

export default Score;
