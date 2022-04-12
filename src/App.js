import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home.js';
import Product from './components/pages/product/Product.js';
 
import marketplace from './components/pages/marketplace/marketplace.js';
import Single from './components/pages/single/single';
import ViewProfile from './components/pages/profile/viewProfile';
import Profile from './components/pages/profile/profile';
import Buy from './components/pages/ino/Buy';
import Collection from './components/pages/explore/Collection';
import Createpresale from './components/pages/createpresale/Createpresale';
import Padchain from './components/pages/padchain/Padchain';
import Paddetails from './components/pages/padchain/Paddetails';
import Oldpaddetails from './components/pages/padchain/Oldpaddetails';
import NFTMarketplace from './components/pages/NFTMarketplace/NFTMarketplace';
import Claimtoken from './components/pages/Claimtoken/Claimtoken.js';
import Stake from './components/pages/Stake/Stake.js';


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
			<Route exact path="/iuo/list" name="Padchain Page" component = {Padchain} />
			<Route exact path="/iuo/details/:slug" component={Paddetails} />
			<Route exact path="/paddetails/:slug" component={Oldpaddetails} />
			<Route exact path="/createpresale" name="Createpresale Page" component = {Createpresale} />
			<Route exact path="/choose" name="NFTMarketplace Page" component = {NFTMarketplace} />
			<Route exact path="/ino/:address" name="ino Page" component = {Buy} />
			<Route exact path="/marketplace" name="marketplace Page" component = {marketplace} />
			<Route exact path="/collection" name="collection Page" component = {Collection} />
			<Route exact path="/product/:tradeid" name="Product Page" component = {Product} />
			<Route exact path="/single" name="marketplace Page" component = {Single} />
			<Route exact path="/profile" name="Profile Page" component = {Profile} />
			<Route exact path="/profile/view/:account" name="View Profile Page" component = {ViewProfile} />
			 
			 
			 
		</div>
	</Router>
    );
  }
}

export default App;
