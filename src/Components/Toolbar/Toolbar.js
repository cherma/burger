import React from 'react';
import classes from './Toolbar.css'; 
import image from './../../Assets/Logo/burger-logo.png';

const Toolbar = () =>(
    <div className={classes.Toolbar}>
      <div>Menu</div>
      <div className={classes.Logo}><img src={image} alt='logo'/></div>
      <nav>
        ...
      </nav>
    </div>
);

export default Toolbar;