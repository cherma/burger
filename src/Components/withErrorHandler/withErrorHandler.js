import React from 'react';
import Hoc from './../../Hoc/Hoc';
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
      <Hoc>
          {console.log(this.state.error)}
          {  this.state.error &&
            <Hoc>
             <Backdrop show clicked={this.errorConfirmationHandler}/>
             <div className={classes.ErrorMsg}>
                  <h1>{this.state.error}</h1>
              </div>
            </Hoc>
          }
          <WrappedComponent {...this.props}/>
          
          
      </Hoc>)
    }
  }
}

export default withErrorHandler;