import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.checkAnswer(e);
  }

  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
        <div id="answer-container">
          <button id="A" onClick={this.handleClick}>
            {this.props.A}
          </button>
          <button id="B" onClick={this.handleClick}>
            {this.props.B}
          </button>
          <button id="C" onClick={this.handleClick}>
            {this.props.C}
          </button>
          <button id="D" onClick={this.handleClick}>
            {this.props.D}
          </button>
        </div>
        <div id="result">
          <h3>{this.props.result}</h3>
        </div>
      </div>
    );
  }
}

export default Question;
