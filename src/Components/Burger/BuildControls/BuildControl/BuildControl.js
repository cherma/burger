import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
       <div className={classes.label}>{props.label}</div>
       <button className={classes.less}>Less</button>
       <button className={classes.more}>More</button>
    </div>
);
export default BuildControl;
