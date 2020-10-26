import React from 'react';
import HOC from './../../hoc/HOC';
import Backdrop from '../Backdrop/Backdrop';
import classes from './withErrorHandler.css';

const withErrorHandler = (WrappedComponent,instance) =>{
  return class extends React.Component{
    state ={
      error:null
    }
    componentWillMount () {
      instance.interceptors.request.use(req => {
          this.setState({error: null});
          return req;
      });
      instance.interceptors.response.use(res => res, error => {
          this.setState({error: error});
      });
  }
    errorConfirmationHandler(){
      this.setState({error:null})
    }
    render(){
      return(
      <HOC>
          {console.log(this.state.error)}
          {  this.state.error &&
            <HOC>
             <Backdrop show clicked={this.errorConfirmationHandler}/>
             <div className={classes.ErrorMsg}>
                  <h1>{this.state.error}</h1>
              </div>
            </HOC>
          }
          <WrappedComponent {...this.props}/>
          
          
      </HOC>)
    }
  }
}

export default withErrorHandler;