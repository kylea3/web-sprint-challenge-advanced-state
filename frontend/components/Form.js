import React from 'react'
import { connect } from 'react-redux'
import { trueInputChange, falseInputChange, questionInputChange, postQuiz } from '../state/action-creators';

export function Form(props) {
  const { questionInputChange, trueInputChange, falseInputChange, newTrueAnswer, newFalseAnswer, newQuestion, postQuiz } = props;
  const onQuestionChange = evt => {
    questionInputChange(evt.target.value)
  }
  const onTrueChange = evt => {
    trueInputChange(evt.target.value)
  }
  const onFalseChange = evt => {
    falseInputChange(evt.target.value)
  }
  

  const onSubmit = evt => {
    evt.preventDefault()
    const newPost = {
      question_text: newQuestion, 
      true_answer_text: newTrueAnswer, 
      false_answer_text: newFalseAnswer
    }
    postQuiz(newPost)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onQuestionChange} id="newQuestion" placeholder="Enter question" value={newQuestion} />
      <input maxLength={50} onChange={onTrueChange} id="newTrueAnswer" placeholder="Enter true answer" value={newTrueAnswer} />
      <input maxLength={50} onChange={onFalseChange} id="newFalseAnswer" placeholder="Enter false answer" value={newFalseAnswer} />
      <button disabled={newFalseAnswer.trim() === '' || newTrueAnswer.trim() === '' || newQuestion.trim() === '' ? true : false} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapPropsToState = state => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer
  }
}

export default connect(mapPropsToState, { trueInputChange, falseInputChange, questionInputChange, postQuiz })(Form)
