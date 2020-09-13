import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE  = {
  cheese : 15,
  bacon : 40,
  salad : 25,
  meat : 40 }
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
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedIngredients = {...this.state.ingredients}
    const updatedCount = oldCount + 1;
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type]
    const oldPrice = this.state.totalPrice
    const updatePrice = oldPrice + priceAddition;
    this.setState({ingredients:updatedIngredients,totalPrice:updatePrice})
  };
  removeIngredientHandler = (type) => {
    conts 
  }
  render(){
    return(
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls addIngredientHandler={this.addIngredientHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;