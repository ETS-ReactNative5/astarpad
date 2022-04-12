import React, { Component } from 'react';

import $ from "jquery";

import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import sc1  from '../../images/sc1.png';
import sc2  from '../../images/sc2.png';
import sc3  from '../../images/sc3.png';
import sc4  from '../../images/sc4.png';
import ftm  from '../../images/ftm.png';
import character  from '../../images/character.png';
import acharactor  from '../../images/acharactor.png';
import RMape  from '../../images/RMape.png';
import tokens  from '../../images/tokens.png';
import scroll  from '../../images/scroll.png';
import web  from '../../images/web.png';
import md  from '../../images/md.png';


class NFTMarketplace extends Component{ 
	constructor(props) {
	  super(props);
	  this.state = {
	  };
  
	}
	
	componentDidMount = () =>{

	
		
				
	  }

	render(){
		return(
			<div>
			<div className="nftmarketplace">
			<Header />
			 <div className='nft-marketplace-main-wrap'>
                 <div className='container-fluid'>
                 <div className='nft-marketplace-heading'>
                     <h3>INO</h3>
                 </div>
                 <div className='nft-marketplace-wrap'>
                     <div className='nft-m-left'>
                       <div className='nft-m-but'>
                       <h3>Wolfsaw</h3>
                         <a href='/ino/0x79d2e6fB826659a1EE265355813eFfB0E05AD2C9'>Buy</a>
                       </div>
                     </div>
                     <div className='nft-m-right'>
                     <div className='nft-m-but'>
                       <h3>MiniPanther</h3>
                         <a href='/ino/0x7Ff04ac7271cA1FF9A8b687616C82E2A5668d769'>Buy</a>
                       </div> 
                     </div>
                 </div>
                 </div>
             </div>
			{/* <Footer />	 */}
			</div>
			
			</div>
		);
	}

}
export default NFTMarketplace;