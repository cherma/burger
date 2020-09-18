import React from 'react';
import Toolbar from './../Toolbar/Toolbar';
import Aux from '../../hoc/Aux';
import classes from './layout.css';
import SideDrawer from '../SideDrawer/SideDrawer';
 
const layout = (props) =>{
   
  return(
     <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>
       {props.children}
      </main>
    </Aux>
 
    );
    }

export default layout;