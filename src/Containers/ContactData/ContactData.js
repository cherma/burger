import React from 'react';
import Button from './../../Components/CustomButton/Button';
import classes from './ContactData.css';
import  Spinner from '../../Components/Spinner/Spinner';
import instance from './../../Axios/axios-orders';
import Input from '../../Components/CustomInput/Input';

class ContactData extends React.Component{
  state = {
   orderForm: {
    name: {
      elementConfig: {
        inputtype: 'input',
        type: 'text',
        placeholder: 'Name'
      },  
      value: '',
      label: 'Name'
    },
    phone: {
      elementConfig: {
        inputtype: 'input',
        type: 'text',
        placeholder: 'Phone'
      },  
      value: '',
      label: 'Phone'
    },
    doorNo: {
      elementConfig: {
        inputtype: 'input',
        type: 'text',
        placeholder: 'Door No.'
      },  
      value: '',
      label: 'Door No.'
    },
    locality: {
      elementConfig: {
        inputtype: 'input',
        type: 'text',
        placeholder: 'Locality'
      },  
      value: '',
      label: 'Locality'
    },
    street: {
      elementConfig: {
        inputtype: 'input',
        type: 'text',
        placeholder: 'Street'
      },  
      value: '',
      label: 'Street'
     },
     deliveryMethod: {
      elementConfig: {
        inputtype: 'select',
        options: [
         'Fastest',
         'Cheapest'
        ] 
      }  ,
      value: 'Fastest',
      label: 'Delivery Method'
     },
     loading: false
  }
  }
  continueOrder = (event) =>{
     event.preventDefault();
     this.setState({loading: true})
     let orderData = {}
     for(let key in this.state.orderForm){
       orderData[key]=this.state.orderForm[key].value;
     }  
     instance.post('/orders.json',orderData)
             .then(res => {
               this.setState({loading:false})
               this.props.history.push('/')
              }).catch( error => {
                this.setState( { loading: false} );
            } );
  }
  onChangeHandler = (event,name) =>{
    const updatedOrderForm = {...this.state.orderForm};
    const updatedFormElement = {...updatedOrderForm[name]};
    updatedFormElement.value = event.target.value;
    updatedOrderForm[name] = updatedFormElement;
    this.setState({orderForm:updatedOrderForm}); 
    console.log(this.state.orderForm)
  }
  
  render(){
    const formArrayElements = []
    for(let key in this.state.orderForm)
    formArrayElements.push({
      id: key,  
      elements: this.state.orderForm[key]
    })
     let formInputs = (
      formArrayElements.map((element)=>(
        <Input
           key={element.id}
           label={element.elements.label}
           elementConfig={{...element.elements.elementConfig}}
           changed={(event)=>this.onChangeHandler(event,element.id)}/>
      ))
    )
    let form = (
    <form onSubmit={this.continueOrder}>
      <h4>Enter Your Contact Data</h4>
      {formInputs}
      <Button btntype='Success'>PLACE ORDER!</Button>
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