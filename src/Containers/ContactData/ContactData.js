import React from 'react';
import Button from './../../Components/CustomButton/Button';
import classes from './ContactData.css';

class ContactData extends React.Component{
  constructor(props){
    super(props);
    console.log(props)
  }
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
        name: 'Roopan',
        address: {
          doorNo: '32/1',
          street: 'Teststreet',
          locality: 'testLOcality',
        },
        phone: '75xxxxxx70'
      },
      deliveryMethod: 'Fastest'
    }
    instance.post('/orders.json',order)
             .then(res => {
               this.setState({loading:false})
               this.hideOrderSummary()
              }).catch( error => {
                this.setState( { loading: false, purchasing: false } );
            } );
  }
  render(){
    return(
       <div className={classes.ContactData}>
         <form>
           <h4>Enter Your Contact Data</h4>
           <input name='name' type='text' placeholder='Enter your Name'/>
           <input name='phone' type='text' placeholder='Enter your Phone No'/>
           <input name='doorNo' type='text' placeholder='Enter your Door No'/>
           <input name='locality' type='text' placeholder='Enter your Locality'/>
           <input name='street' type='text' placeholder='Enter your Street'/>
           <Button btntype='Success' clicked={this.continueOrder.bind(this)}>PLACE ORDER!</Button>
         </form>
       </div>
    );
  }
}

export default ContactData;