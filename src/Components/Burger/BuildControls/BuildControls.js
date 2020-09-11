import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const control =[
  {label:"Cheese"},
  {label:"Salad"},
  {label:"Bacon"},
  {label:"Meat"}
]

const BuildControls =  (props) => (
  <div className={classes.BuildControls}>
    {control.map((ctrl,i)=><BuildControl key={ctrl.label+i} label={ctrl.label}/>)}
  </div>
);

export default BuildControls;