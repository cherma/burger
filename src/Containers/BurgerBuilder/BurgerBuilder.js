import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/BuildControls/BuildControls';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';

const INGREDIENT_PRICE  = [15,40,25,40]//[cheese,bacon,salad,meat]

class BurgerBuilder extends React.Component{
  state = { 
    ingredients : {
    Cheese : 0,
    Bacon : 0,
    Salad : 0,
    Meat : 0 
    } ,
    totalPrice : 40,
    purchasing : false
  }
  
  quantityHandler = (src,count) =>{
    const newState = {...this.state.ingredients}
    newState[src] = count;
    let price = 0
    const keys = Object.keys(newState)
    keys.map((item,i) =>  price=price+(newState[item]*INGREDIENT_PRICE[i]))
    this.setState({totalPrice:40+price,ingredients:newState})
  }
  showOrderSummary = () =>{
     this.setState({purchasing : true})
  }
  render(){
    return(
      <Aux>
        {  this.state.purchasing && <OrderSummary ingredients={this.state.ingredients}/> };
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
           ingredients={this.state.ingredients} 
           quantityHandler={this.quantityHandler}
           price={this.state.totalPrice}
           ordered={this.showOrderSummary}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;