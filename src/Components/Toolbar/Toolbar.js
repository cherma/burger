import React from 'react';
import classes from './Toolbar.css'; 
import NavigationItems from './../NavigationItems/NavigationItems';
import image from './../../Assets/Logo/burger-logo.png';

const Toolbar = () =>(
    <div className={classes.Toolbar}>
      <div className={classes.Menu}>Menu</div>
      <div className={classes.Logo}><img src={image}  alt='logo'/></div>
      <div className={classes.DesktopOnly}><NavigationItems/></div> 
    </div>
);

export default Toolbar;