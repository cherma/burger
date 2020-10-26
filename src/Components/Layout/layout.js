import React from 'react';
import Toolbar from './../Toolbar/Toolbar';
import Hoc from '../../Hoc/Hoc';
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
        <Hoc>
           <Toolbar clicked={this.openSideDrawer}/>
           <SideDrawer show={this.state.showSideDrawer} clicked={this.hideSideDrawer}/>
           <main className={classes.Content}>
             {this.props.children}
           </main>
        </Hoc>
      );
    }
  }

export default Layout;