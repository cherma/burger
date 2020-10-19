import React from 'react';
import Burger from './../Burger/Burger';
import Button from './../CustomButton/Button';
import classes from './checkoutSummary.css';

const CheckoutSummary = (props) => {
  return(
    <div className={classes.checkoutSummary}>
      <h3>We hope it tastes well</h3>
      <div style={{width:'100%', height:'300px', margin:'auto'}}>
         <Burger ingredients={props.ingredients}/>
      </div>
      <Button 
         btntype='Danger'
         clicked={props.checkoutCancel}>CANCEL</Button>
      <Button 
         btntype='Success'
         clicked={props.checkoutContinue}>CONTINUE</Button>
    </div>
  );
}

export default CheckoutSummary;