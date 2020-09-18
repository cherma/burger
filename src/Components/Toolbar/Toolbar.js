import React from 'react';
import classes from './Toolbar.css'; 
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './../DrawerToggle/DrawerToggle';
import image from './../../Assets/Logo/burger-logo.png';

const Toolbar = (props) =>(
    <div className={classes.Toolbar}>
      <DrawerToggle clicked={props.clicked}/>
      <div className={classes.Logo}><img src={image}  alt='logo'/></div>
      <div className={classes.DesktopOnly}><NavigationItems/></div> 
    </div>
);

export default Toolbar;