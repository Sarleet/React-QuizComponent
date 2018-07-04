import React, {Component} from 'react'

class QuizEnd extends Component {
  render () {
    return (
      <div>
        <p>Thanks for playing!</p>
        <br />
        <a className='btn btn-primary' href='' onClick={this.handleResetClick.bind(this)} >Reset Quiz</a>
      </div>
    )
  }
  handleResetClick () {
    this.props.resetClickHandler()
  }
}

export default QuizEnd
