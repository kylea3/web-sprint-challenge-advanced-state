// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios"


export function moveClockwise() {
  return {
    type: 'MOVE_CLOCKWISE', payload: 1
  }
 }

export function moveCounterClockwise() { 
  return {
    type: 'MOVE_COUNTERCLOCKWISE', payload: -1
  }
}

export function selectAnswer(data) { 
  return {
    type: 'SET_SELECTED_ANSWER', payload: data
  }
}

export function setMessage() { }

export function setQuiz(data) {
  return {
    type: 'SET_QUIZ_INTO_STATE', payload: data
  }
 }

export function questionInputChange(data) { 
  return {
    type: 'QUESTION_INPUT_CHANGE', payload: data
  }
}

export function trueInputChange(data) { 
  return {
    type: 'TRUE_INPUT_CHANGE', payload: data
  }
}
export function falseInputChange(data) { 
  return {
    type: 'FALSE_INPUT_CHANGE', payload: data
  }
}

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz(data) {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch({ type: 'SET_QUIZ_INTO_STATE', payload: null});
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => 
        dispatch({ type: 'SET_QUIZ_INTO_STATE', payload: res.data}))
      .catch(err => console.log(err))
  }
}
export function postAnswer(postData) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    dispatch({ type: 'SET_SELECTED_ANSWER', payload: null})
    axios.post('http://localhost:9000/api/quiz/answer', postData)
      .then(res => 
        dispatch({ type: 'SET_INFO_MESSAGE', payload: res.data.message}))
      .catch(err => console.error(err))
  }
}
export function postQuiz(postData) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post('http://localhost:9000/api/quiz/new', postData)
      .then(res =>
        dispatch({ type: 'SET_INFO_MESSAGE', payload: `Congrats: "${res.data.question}" is a great question!`}))
      .catch(err => console.error(err))
      dispatch({ type: 'RESET_FORM'})
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
