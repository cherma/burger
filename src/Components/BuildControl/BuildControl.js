import React from 'react';
import classes from './BuildControl.css';

const BuildControl = ({label,count,quantityHandler}) => {
    const countHandler = (type) => {
         count = (type===1) ? count + 1 : count - 1
         quantityHandler(label,count)  
    }
    return (
    <div className={classes.BuildControl}>
       <div className={classes.label}>{label}</div>
       <button className={classes.less} disabled={count===0} onClick={()=>countHandler(0)}>Less</button>
       <button className={classes.more} onClick={()=>countHandler(1)}>More</button>
    </div>
);
}
export default BuildControl;
