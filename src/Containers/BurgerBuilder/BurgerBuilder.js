import React from 'react';
import HOC from '../../hoc/HOC';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/BuildControls/BuildControls';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import Backdrop from '../../Components/Backdrop/Backdrop';
import instance from './../../Axios/axios-orders';
import withErrorHandler from '../../Components/withErrorHandler/withErrorHandler';
import Spinner from '../../Components/Spinner/Spinner';

const INGREDIENT_PRICE  = [15,40,25,40]//[cheese,bacon,salad,meat]

class BurgerBuilder extends React.Component{
  state = { 
    ingredients : null,
    totalPrice : 0,
    purchasing : false,
    loading : false
  }
  
  componentDidMount(){
    instance.get('/ingredients.json').then((response=>
      this.getInitialPrice(response.data)))
      .catch(error=>{})
  }
  getInitialPrice(initialState){
    const keys = Object.keys(initialState)
    let price = 40;
    keys.map((item,i)=> price = price + (initialState[item]*INGREDIENT_PRICE[i]))
    this.setState({totalPrice:price, ingredients:initialState})
  }
  quantityHandler = (src,count) =>{
    const newState = {...this.state.ingredients}
    newState[src] = count;
    let price = 0
    const keys = Object.keys(newState)
    keys.map((item,i) =>  price=price+(newState[item]*INGREDIENT_PRICE[i]))
    this.setState({totalPrice: 40 + price, ingredients : newState})
  }

  showOrderSummary = () =>{ this.setState({purchasing : true})}
  hideOrderSummary = () =>{ this.setState({purchasing : false})} 
  continueOrder = () =>{ 
    /**/
     const queryParams = []
     for(let i in this.state.ingredients){
       queryParams.push(i + '=' + this.state.ingredients[i])
     }        
     queryParams.push('price='+this.state.totalPrice)
     const queryString = queryParams.join('&')
     this.props.history.push({
       pathname: '/checkout',
       search: '?' + queryString
      })
    
  } 
  
  render(){
    
    let orderSummary = <Spinner/>
    let burger = <Spinner/>;
    
    if(this.state.ingredients){
      orderSummary = (
            <OrderSummary 
                 ingredients={this.state.ingredients}
                 price={this.state.totalPrice} 
                 show={this.state.purchasing} 
                 continue={this.continueOrder}
                 cancel={this.hideOrderSummary}
                 loading={this.state.loading}/> )
      burger = [
            <Burger key='burger' ingredients={this.state.ingredients}/> ,
            <BuildControls 
                key='buildControls'
                ingredients={this.state.ingredients} 
                quantityHandler={this.quantityHandler}
                price={this.state.totalPrice}
               ordered={this.showOrderSummary}/>
       ]
      }
    return(
      <HOC>
        <Backdrop show={this.state.purchasing} clicked={this.hideOrderSummary}/>
        {orderSummary}
        {burger}
      </HOC>
    );
  }
}

export default withErrorHandler(BurgerBuilder,instance);