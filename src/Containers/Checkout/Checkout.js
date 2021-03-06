import React from 'react';
import {Route} from 'react-router-dom';
import ContactData from '../ContactData/ContactData';
import CheckoutSummary from './../../Components/CheckoutSummary/checkoutSummary';

class Checkout extends React.Component{
 state = {
   ingredients: null,
   totalPrice:0
 }
 componentWillMount(){
  const ingredients={} 
  let price = 0
  const query = new URLSearchParams(this.props.location.search)
   for( let params of query.entries()){
     //params['bacon','0']
     if(params[0]==='price')
       price = +params[1]
      else 
       ingredients[params[0]] = +params[1]
   }
   this.setState({ingredients: ingredients, totalPrice: price})
 }
 checkoutCancelHandler = () => {
   this.props.history.goBack();
 }
 checkoutContinueHandler = () => {
   this.props.history.replace('/checkout/contact-data')
 }
  render(){
    return(
     <div>
       <CheckoutSummary 
           ingredients={this.state.ingredients}
           checkoutContinue={this.checkoutContinueHandler}
           checkoutCancel={this.checkoutCancelHandler}/>
        <Route path={this.props.match.path + '/contact-data'} render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>}/>   
     </div>
  );
 }
} 

export default Checkout;