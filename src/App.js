import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home.js';
import Claimtoken from './components/pages/Claimtoken/Claimtoken.js';
import Stake from './components/pages/Stake/Stake.js';
import Padchain from './components/pages/padchain/Padchain';
import Paddetails from './components/pages/padchain/Paddetails';
import Oldpaddetails from './components/pages/padchain/Oldpaddetails';
import Createpresale from './components/pages/createpresale/Createpresale';
 


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
	  localStorage.getItem('ACCESS_ID') != null ? <Redirect to='/' /> : <Component {...props} />
	)} />
  )
class App extends Component {

  render() {
    return (
	<Router>
		<div>	
		     			
			<Route exact path="/" name="Home Page" component = {Home} />
			<Route exact path="/Claimtoken" name="Claimtoken Page" component = {Claimtoken} />
			<Route exact path="/Stake" name="Stake Page" component = {Stake} />
			<Route exact path="/Padchain" name="Padchain Page" component = {Padchain} />
			<Route exact path="/iuo/details/:slug" component={Paddetails} />
			<Route exact path="/paddetails/:slug" component={Oldpaddetails} />
			<Route exact path="/createpresale" name="Createpresale Page" component = {Createpresale} />
			 
			 
			 
		</div>
	</Router>
    );
  }
}

export default App;
