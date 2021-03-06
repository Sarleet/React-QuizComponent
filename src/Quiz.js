import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = { quiz_position: 1 }
  }

  showNextQuestion () {
    this.setState((state) => { quiz_position: state.quiz_position + 1 })
  }

  handleResetClick () {
    this.setState((state) => {
      quiz_position: 1
    })
  }

  render () {
    const isQuizEnd = (this.state.quiz_position - 1 === quizData.quiz_questions.length)
    return (
      <div>
        {isQuizEnd ? (
          <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
        ) : (
          <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
            showNextQuestionHandler={this.showNextQuestion.bind(this)} />
        )}
      </div>
    )
  }
  // alternative way from the snippet above, splitting up function(with logic)
  //
  // renderQuiz () {
  //   const isQuizEnd = (this.state.quiz_position - 1 === quizData.quiz_questions.length)
  //   return isQuizEnd ? (
  //     <QuizEnd />
  //   ) : (
  //     <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
  //   )
  // }
  //
  // render () {
  //   return (
  //     <div>{this.renderQuiz()}</div>
  //   )
  // }
}

export default Quiz
