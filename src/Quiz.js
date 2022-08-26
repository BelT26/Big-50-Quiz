import React, { Component } from "react";
import questionList from "./questionList";
import Question from "./Question";
import Score from "./Score";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0,
      roundIdx: 0,
      qIdx: 0,
      result: "",
    };
    this.incrementScore = this.incrementScore.bind(this);
    this.incrementRoundIdx = this.incrementRoundIdx.bind(this);
    this.incrementQIdx = this.incrementQIdx.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  incrementScore() {
    this.setState((st) => ({ currentScore: st.currentScore + 1 }));
  }

  incrementRoundIdx() {
    this.setState((st) => ({ roundIdx: st.roundIdx + 1 }));
  }

  incrementQIdx() {
    this.setState((st) => ({ qIdx: st.qIdx + 1 }));
  }

  checkAnswer(e) {
    const currQuestion = questionList[this.state.roundIdx].qs[this.state.qIdx];
    if (e.target.id === currQuestion.correct) {
      this.setState({ result: "Correct" });
    } else {
      this.setState({ result: "incorrect" });
    }
  }

  //   currentQuestion = questionList[this.state.roundIdx].qs[this.state.qIdx];

  render() {
    const currentQuestion =
      questionList[this.state.roundIdx].qs[this.state.qIdx];
    const questionText = currentQuestion.qtext;
    const answerA = currentQuestion.answerA;
    const answerB = currentQuestion.answerB;
    const answerC = currentQuestion.answerC;
    const answerD = currentQuestion.answerD;

    return (
      <div>
        <h1>The Big 50 Quiz</h1>
        <Question
          text={questionText}
          A={answerA}
          B={answerB}
          C={answerC}
          D={answerD}
          checkAnswer={this.checkAnswer}
          result={this.state.result}
        />
        <Score
          score={this.state.currentScore}
          incrementScore={this.incrementScore}
        />
        <p>Round Index {this.state.roundIdx}</p>
        <p>Question Index {this.state.qIdx}</p>
        <button onClick={this.incrementScore}>Increase Score</button>
        <button onClick={this.incrementRoundIdx}>Next Round</button>
        <button onClick={this.incrementQIdx}>Next Question</button>
      </div>
    );
  }
}

export default Quiz;
