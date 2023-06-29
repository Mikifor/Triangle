import React from 'react';
import classes from './Calculations.module.css';

const PrintCalculations = (props) => {
  const degree = props.store._state.Results[props.num][0].degree
  const word = props.store._state.Results[props.num][0].word
  const letter = props.store._state.Results[props.num][0].letter
  const minute = props.store._state.Results[props.num][0].minute
  const second = props.store._state.Results[props.num][0].second
  
  return <div>{word} {letter}: {degree}° {minute}' {second}"  </div>;
}


const Calculations = (props) => {
  return <div className={classes.main}>
    <div className={props.store.isHidden ? classes.calculations : null}>
      <PrintCalculations store={props.store} num={0}/>
      <PrintCalculations store={props.store} num={1}/>
      <PrintCalculations store={props.store} num={2}/>
    </div>
  </div>

}

export default Calculations; 