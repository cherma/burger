import React from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import Order from '../../Components/Order/Order';
import instance from '../../Axios/axios-orders';
import withErrorHandler from '../../Components/withErrorHandler/withErrorHandler';

class Orders extends React.Component{
  state = {
    orders: [],
    loading: true
  }
  componentDidMount(){
     instance.get('/orders.json')
           .then(res => {
                console.log("at orders.js",res.data)
                const fetchedOrders = [];
                for(let key in res.data){
                  fetchedOrders.push({...res.data[key], id: key})
                }           
                this.setState({loading: false, orders: fetchedOrders})
           })
           .catch(err => this.setState({loading:false}) )
  }
  render(){
    let orders = null;
    orders = (
    <div>
      {this.state.orders.map(order=> (
        <Order   
           key={order.id}
           ingredients={order.ingredients}
           price={order.price}/>
      ))}
    </div>
   )
    if(this.state.loading)
     orders = <Spinner/>
    return(
      <div>
        {orders}
      </div>
      );
  }
}

export default withErrorHandler(Orders,instance);