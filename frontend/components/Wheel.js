import React from 'react'
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

const Wheel= (props) => {
  const { wheelNumber, moveClockwise, moveCounterClockwise } = props;
  
  const onClickClockwise = () => {
    moveClockwise()
  } 
  
  const onClickCounterClockwise = () => {
    moveCounterClockwise()
  }
  return (
    <div id="wrapper">
      {console.log(props.wheelNumber)}
      <div id="wheel">
        <div className={wheelNumber === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{wheelNumber === 0 ? 'B' : ''}</div>
        <div className={wheelNumber === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}>{wheelNumber === 1 ? 'B' : ''}</div>
        <div className={wheelNumber === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}>{wheelNumber === 2 ? 'B' : ''}</div>
        <div className={wheelNumber === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>{wheelNumber === 3 ? 'B' : ''}</div>
        <div className={wheelNumber === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>{wheelNumber === 4 ? 'B' : ''}</div>
        <div className={wheelNumber === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>{wheelNumber === 5 ? 'B' : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={onClickCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={onClickClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
  wheelNumber: state.wheel.wheelNumber
  }
}


export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel);