import React from 'react';
import classes from './Order.css';

const Order = () =>{
  return(
    <div className={classes.Order}>
      <p>Ingredients : Meat (2)</p>   
      <p>Price : <strong>Rs.120</strong></p> 
    </div>
  );
} 

export default Order; 