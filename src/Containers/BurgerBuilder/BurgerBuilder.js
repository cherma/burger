import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE  = [15,40,25,40]//[cheese,bacon,salad,meat]

class BurgerBuilder extends React.Component{
  state = { 
    ingredients : {
    cheese : 0,
    bacon : 0,
    salad : 0,
    meat : 0 
    } ,
    totalPrice : 40
  }
  quantityHandler = (src,count) =>{
    const newState = {...this.state.ingredients}
    newState[src] = count;
    
    let price = 0
      const keys = Object.keys(newState)
      keys.map((item,i) =>  price=price+(newState[item]*INGREDIENT_PRICE[i]))
      this.setState({totalPrice:40+price,ingredients:newState})
  }
  
  render(){
    
      
    
    return(
      <Aux>
       
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
           ingredients={this.state.ingredients} 
           quantityHandler={this.quantityHandler}
           price={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;