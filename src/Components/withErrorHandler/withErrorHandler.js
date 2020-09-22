import React from 'react';
import Aux from './../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './withErrorHandler.css';

const withErrorHandler = (WrappedComponent, instance) =>{
  return class extends React.Component{
    state ={
      error:null
    }
    componentDidMount(){
      instance.interceptors.response.use()
    }
    
    render(){
      return(
      <Aux>
          <Backdrop show/>
          <div className={classes.ErrorMsg}>
           <p>Something Didnt work</p> 
          </div>
          <WrappedComponent {...this.props}/>
      </Aux>)
    }
  }
}

export default withErrorHandler;