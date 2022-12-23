import axios from 'axios';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchQuiz, setQuiz, selectAnswer } from '../state/action-creators';

const Quiz = (props) => {
  const { quizState, fetchQuiz, setQuiz, selectAnswer, selectedAnswer } = props;
  useEffect(() => {
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => setQuiz(res.data))
      .catch(err => console.log(err))
    }, []);

  const onSelectedAnswer = (evt) => {
    selectAnswer(evt.target.id)
  }
  const onSubmit = (evt) => {
    evt.preventDefault
    fetchQuiz()
  }
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quizState ? (
          <>
            <h2>{quizState.question}</h2>

            <div id="quizAnswers">
              <div className={selectedAnswer === quizState.answers[0].answer_id ? "answer selected" : 'answer'}>
                {quizState ? quizState.answers[0].text : ''}
                <button id={quizState.answers[0].answer_id} onClick={onSelectedAnswer}>
                {selectedAnswer === quizState.answers[0].answer_id ? "SELECTED" : 'Select'}
                </button>
              </div>

              <div className={selectedAnswer === quizState.answers[1].answer_id ? "answer selected" : 'answer'}>
              {quizState ? quizState.answers[1].text : ''}
                <button id={quizState.answers[1].answer_id} onClick={onSelectedAnswer}>
                {selectedAnswer === quizState.answers[1].answer_id ? "SELECTED" : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={onSubmit}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quizState: state.quiz.quizState,
    selectedAnswer: state.selectedAnswer.selectedAnswer
  }
}


export default connect(mapStateToProps, { fetchQuiz, setQuiz, selectAnswer })(Quiz);