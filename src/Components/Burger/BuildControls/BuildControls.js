import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const control =[
  {label:"Cheese",type:"cheese"},
  {label:"Salad" ,type:"salad"},
  {label:"Bacon" ,type:"bacon"},
  {label:"Meat",type:"meat"}
]

const BuildControls =  (props) => (
  <div className={classes.BuildControls}>
    { 
      control.map((ctrl,i)=>
      <BuildControl key={ctrl.label+i} label={ctrl.label} add={()=>props.addIngredientHandler(ctrl.type)}/>)
    }
  </div>
);

export default BuildControls;