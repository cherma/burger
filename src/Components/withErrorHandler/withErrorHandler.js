import React from 'react';
import Aux from './../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './withErrorHandler.css';

const withErrorHandler = (WrappedComponent, instance) =>{
  return class extends React.Component{
    state ={
      error:null
    }
    componentWillMount(){
      instance.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
    });
    instance.interceptors.response.use(res => res, error => {
        this.setState({error: error});
    });
    }
    errorConfirmedHandler = () => {
      this.setState({error: null});
  }
    render(){
      return(
      <Aux>
          { this.state.error &&
           <Aux> 
             <Backdrop show clicked={this.errorConfirmedHandler}/>
             <div className={classes.ErrorMsg}>
               {this.state.error.message}
             </div>
            </Aux>
            }
          <WrappedComponent {...this.props}/>
          
          
      </Aux>)
    }
  }
}

export default withErrorHandler;