import React from 'react';
import  classes from './OrderSummary.css';

const OrderSummary = (props) => {
  const ingSummary = Object.keys(props.ingredients)
            .map((igKey)=><li><strong>{igKey}</strong> : {props.ingredients[igKey]}</li>)
  return(
   <div className={classes.OrderSummary}>
      <h3>Your Order</h3>
      <div>
         {ingSummary}
      </div>
      <p>Continue to Checkout...</p>
   </div>
  );
}
export default OrderSummary; 