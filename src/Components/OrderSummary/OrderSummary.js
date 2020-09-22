import React from 'react';
import Button from './../CustomButton/Button';
import classes from './OrderSummary.css';
import Spinner from '../Spinner/Spinner';

const OrderSummary = (props) => {
  const ingSummary = Object.keys(props.ingredients)
            .map((igKey)=><li key={igKey}><strong>{igKey}</strong> : {props.ingredients[igKey]}</li>)
  let orderSummary = (
    <div>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients :</p>
        {ingSummary}
        <p><strong>Total price : {props.price}</strong></p>
        <p>Continue to Checkout...</p>
        <Button btntype="Danger"  clicked={props.cancel}>CANCEL</Button>
        <Button btntype="Success" clicked={props.continue} >CONTINUE</Button>
    </div>
  );
  if(props.loading)
     orderSummary = <Spinner/>
  return(
   <div className={classes.OrderSummary} style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                                 opacity: props.show ? '1' :'0' }}>
      { props.show &&
        orderSummary
      }
     
   </div>
  );
}
export default OrderSummary; 