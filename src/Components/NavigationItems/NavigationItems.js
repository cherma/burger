import React from 'react';
import classes from './NavigationItems.css'

const NavigationItems = () => (
  <div className={classes.NavigationItems}>
      <a href='/' className={classes.active}>BurgerBuilder</a>
      <a href='/'>Checkout</a>
  </div>
);

export default NavigationItems; 