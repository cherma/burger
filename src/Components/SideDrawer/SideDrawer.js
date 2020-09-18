import React from 'react';
import img from './../../Assets/Logo/burger-logo.png';
import NavigationItems from './../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const SideDrawer = (props) =>(
   <div  className ={classes.SideDrawer} >
     <img src={img} alt='logo' style={{height:'11%',marginBottom:'18px',marginLeft:'75px'}}/>
     <NavigationItems/>
   </div>
);

export default SideDrawer;