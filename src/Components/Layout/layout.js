import React from 'react';
import Toolbar from './../Toolbar/Toolbar';
import Aux from '../../hoc/Aux';
import classes from './layout.css';
 
const layout = (props) =>{
  console.log("at layout.js")  
  return(
     <Aux>
      <Toolbar />
      <main className={classes.Content}>
       {props.children}
      </main>
    </Aux>
 
    );
    }

export default layout;