import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItems.css'

const NavigationItems = () => (
  <div className={classes.NavigationItems}>
      <NavLink to='/' exact activeClassName={classes.active}>BurgerBuilder</NavLink>
      <NavLink to='/orders' activeClassName={classes.active}>Orders</NavLink>
  </div>
);

export default NavigationItems; 