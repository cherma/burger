import React from 'react';
import img from './../../Assets/Logo/burger-logo.png';
import NavigationItems from './../NavigationItems/NavigationItems';
import Backdrop from './../Backdrop/Backdrop'; 
import Aux from '../../hoc/Aux';
import classes from './SideDrawer.css';

const SideDrawer = (props) =>{
   let attachedClass = props.show ? [classes.SideDrawer,classes.Open] : [classes.SideDrawer,classes.Close];
    return(
     <Aux>
       <Backdrop show={props.show} clicked={props.clicked}/>
       <div  className ={attachedClass.join(' ')} >
         <img src={img} alt='logo' style={{height:'11%',marginBottom:'18px',marginLeft:'75px'}}/>
         <NavigationItems/>
       </div> 
     </Aux>
  
);
}
export default SideDrawer;