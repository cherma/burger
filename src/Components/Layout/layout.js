import React from 'react';
import Aux from '../../hoc/Aux';
 
const layout = (props) =>{
  console.log("at layout.js")  
  return(
     <Aux>
      <div>Toolbar,sidedrawer,backdrop</div>
      <main>
       {props.children}
      </main>
    </Aux>
 
    );
    }

export default layout;