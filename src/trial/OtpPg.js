import React from 'react';
import classes from './OtpPg.css';
import OtpInput from 'react-otp-input';

class OtpPg extends React.Component{
  state = { otp: '' };
  handleChange = otp => this.setState({ otp });
  render(){
  let attachedClass =  [classes.OtpPg,classes.Open] 
  return(
   <div className={attachedClass.join(' ')}>
     <OtpInput value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span>-</span>} />
     <button onClick={this.props.clicked}>Go back</button>
       
   </div>
  );
}
}
export default OtpPg;