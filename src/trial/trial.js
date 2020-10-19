import React from 'react';
import OtpPg from './OtpPg';
import classes from './trail.css';

class Trail extends React.Component{
  state = {
    ph:'',
    clicked:false
  }
  handleChange=(event)=>{
    this.setState({ph:event.target.value})
  }
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
    console.log(this.state.ph)
    let attachedClass = !this.state.clicked ? [classes.Trail,classes.Open] : [classes.Trail,classes.Close];

    return(
       <div className={attachedClass.join(' ')}>
         <input  value={this.state.ph} onChange={this.handleChange}></input>
         <button onClick={this.handleClick}>Get</button>
         <OtpPg clicked={this.handleClick} show={this.state.clicked}/>
       </div>
    );
  }
}

export default Trail;