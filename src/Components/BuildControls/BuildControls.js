import React from 'react';
import BuildControl from '../BuildControl/BuildControl';
import classes from './BuildControls.css';

const BuildControls = (props) => {
  const keys = Object.keys(props.ingredients)
  return (
  <div className={classes.BuildControls}>
    <p className={classes.price}>Current Price : <strong>{props.price}</strong></p> 
    { 
      keys.map((item)=>
      <BuildControl 
         key={item} 
         label={item} 
         count={props.ingredients[item]} 
         quantityHandler={props.quantityHandler}/>)
    }
    <button disabled={props.price===40} className={classes.orderbtn} onClick={props.ordered}>ORDER NOW!</button>
  </div>
  );
}

export default BuildControls;