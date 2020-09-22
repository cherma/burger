import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/BuildControls/BuildControls';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import Backdrop from '../../Components/Backdrop/Backdrop';
import instance from './../../Axios/axios-orders';

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
    purchasing : false,
    loading : false
  }
  
  quantityHandler = (src,count) =>{
    const newState = {...this.state.ingredients}
    newState[src] = count;
    let price = 0
    const keys = Object.keys(newState)
    keys.map((item,i) =>  price=price+(newState[item]*INGREDIENT_PRICE[i]))
    this.setState({totalPrice:40+price,ingredients:newState})
  }

  showOrderSummary = () =>{ this.setState({purchasing : true})}
  hideOrderSummary = () =>{ this.setState({purchasing : false})} 
  continueOrder = () =>{ 
    this.setState({loading: true})
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
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
              })
    
  } 
  
  render(){
    return(
      <Aux>
        <Backdrop show={this.state.purchasing} clicked={this.hideOrderSummary}/>
        <OrderSummary 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice} 
            show={this.state.purchasing} 
            continue={this.continueOrder}
            cancel={this.hideOrderSummary}
            loading={this.state.loading}/> 
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