import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const BuildControls = (props) => {
  const keys = Object.keys(props.ingredients)
  return (
  <div className={classes.BuildControls}>
    <p className={classes.price}>Total Price <strong>{props.price}</strong></p> 
    { 
      keys.map((item)=>
      <BuildControl 
         key={item} 
         label={item} 
         count={props.ingredients[item]} 
         quantityHandler={props.quantityHandler}/>)
    }
  </div>
  );
}

export default BuildControls;