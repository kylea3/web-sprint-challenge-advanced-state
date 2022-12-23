import axios from 'axios';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchQuiz, setQuiz } from '../state/action-creators';

const Quiz = (props) => {
  const { quizState, fetchQuiz, setQuiz } = props;
  useEffect(() => {
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => setQuiz(res.data))
      .catch(err => console.log(err))
    }, []);
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quizState ? (
          <>
            <h2>{quizState.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {quizState.answers[0].text}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
              {quizState.answers[1].text}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quizState: state.quiz.quizState
  }
}


export default connect(mapStateToProps, { fetchQuiz, setQuiz })(Quiz);