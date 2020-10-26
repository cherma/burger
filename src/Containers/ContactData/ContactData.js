import React from 'react';
import Button from './../../Components/CustomButton/Button';
import classes from './ContactData.css';
import  Spinner from '../../Components/Spinner/Spinner';
import instance from './../../Axios/axios-orders';

class ContactData extends React.Component{
  state = {
    name: '',
    phone: '',
    address: {
      doorNo: '',
      locality: '',
      street: ''
    },
    loading: false
  }

  continueOrder = (event) =>{
     event.preventDefault();
     this.setState({loading: true})
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: this.state.name,
        address: {
          doorNo: this.state.doorNo,
          street: this.state.street,
          locality: this.state.locality,
        },
        phone: this.state.phone
      },
      deliveryMethod: 'Fastest'
    }
    instance.post('/orders.json',order)
             .then(res => {
               this.setState({loading:false})
               this.props.history.push('/')
              }).catch( error => {
                this.setState( { loading: false} );
            } );
  }
  changeHandler = (event,name) =>{
    this.setState({[name]:event.target.value})
  }
  render(){
    let form = (
    <form>
      <h4>Enter Your Contact Data</h4>
      <input name='name' value={this.state.name} onChange={(event)=>this.changeHandler(event,'name')} type='text' placeholder='Enter your Name'/>
      <input name='phone' value={this.state.phone} onChange={(event)=>this.changeHandler(event,'phone')} type='text' placeholder='Enter your Phone No'/>
      <input name='doorNo' value={this.state.doorNo} onChange={(event)=>this.changeHandler(event,'doorNo')} type='text' placeholder='Enter your Door No'/>
      <input name='locality' value={this.state.locality} onChange={(event)=>this.changeHandler(event,'locality')} type='text' placeholder='Enter your Locality'/>
      <input name='street' value={this.state.street} onChange={(event)=>this.changeHandler(event,'street')} type='text' placeholder='Enter your Street'/>
      <Button btntype='Success' clicked={this.continueOrder.bind(this)}>PLACE ORDER!</Button>
    </form>
    );
    if(this.state.loading)
      form = <Spinner/>
    return(
       <div className={classes.ContactData}>
         {form}
       </div>
    );
  }
}

export default ContactData;