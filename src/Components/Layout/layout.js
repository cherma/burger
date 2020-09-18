import React from 'react';
import Toolbar from './../Toolbar/Toolbar';
import Aux from '../../hoc/Aux';
import classes from './layout.css';
import SideDrawer from '../SideDrawer/SideDrawer';

class Layout extends React.Component{
  state = {
    showSideDrawer : false
  }
  openSideDrawer = () =>{this.setState({showSideDrawer:true})}
  hideSideDrawer = () =>{this.setState({showSideDrawer:false})}
  render(){
      return(
        <Aux>
           <Toolbar clicked={this.openSideDrawer}/>
           <SideDrawer show={this.state.showSideDrawer} clicked={this.hideSideDrawer}/>
           <main className={classes.Content}>
             {this.props.children}
           </main>
        </Aux>
      );
    }
  }

export default Layout;