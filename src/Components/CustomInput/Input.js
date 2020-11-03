import React from 'react';
import classes from './Input.css';

const input = (props) =>{
    let inputElement = null;
    switch(props.elementConfig.inputtype){
        case ('input'):
          inputElement = <input 
             className={classes.InputElement} 
             onChange={props.changed}
             {...props.elementConfig} />
          break;
        case ('textarea'):
          inputElement = <textarea 
             className={classes.InputElement} 
             onChange={props.changed}
             {...props.elementConfig} />
          break;
        case ('select'):
          inputElement = <select 
              className={classes.InputElement}
              onChange={props.changed}>
              { props.elementConfig.options.map((option,index)=>(
                  <option key={index} value={option}>
                      {option}
                  </option> 
                  ))}
          </select>   
          break; 
        default :
          inputElement = <input className={classes.InputElement} {...props.elementConfig} />    
    }
    return(
     <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
     </div>
  );
}

export default input;