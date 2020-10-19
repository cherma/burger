import React from 'react';
import CheckoutSummary from './../../Components/CheckoutSummary/checkoutSummary';

class Checkout extends React.Component{
 state = {
   ingredients: {
     Cheese: 1,
     Bacon: 1,
     Salad: 1,
     Meat: 1
   }
 }
 componentDidMount(){
  const ingredients={} 
  const query = new URLSearchParams(this.props.location.search)
   for( let params of query.entries()){
     //params['bacon','0']
     ingredients[params[0]] = +params[1]
   }
   this.setState({ingredients: ingredients})
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
     </div>
  );
 }
} 

export default Checkout;