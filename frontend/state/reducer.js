// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE } from './action-types'
const initialWheelState = {
  wheelNumber: 0
} 
const wheel= (state = initialWheelState, action) => {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      return{
        ...state,
        wheelNumber: state.wheelNumber === 5 ? 0 : state.wheelNumber + action.payload
      }
    
    case MOVE_COUNTERCLOCKWISE:
      return{
        ...state,
        wheelNumber: state.wheelNumber === 0 ?  5 : state.wheelNumber + action.payload
      }

  
  default:
  return state
  }
}

const initialQuizState = {
        quizState: null
}
const quiz= (state = initialQuizState, action) => {
  switch(action.type) {
    case SET_QUIZ_INTO_STATE:
      return {
        ...state,
        quizState: action.payload
      }
  }
  return state
}

const initialSelectedAnswerState = {
    selectedAnswer: null
}
const selectedAnswer= (state = initialSelectedAnswerState, action) => {
  switch(action.type) {
    case SET_SELECTED_ANSWER:
      return {
        ...state,
        selectedAnswer: action.payload
      }
  }
  return state
}

const initialMessageState = {
  infoMessage: ''
}
const infoMessage = (state = initialMessageState, action) => {
  switch(action.type) {
    case SET_INFO_MESSAGE:
      return {
      ...state,
      infoMessage: action.payload
    }
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
