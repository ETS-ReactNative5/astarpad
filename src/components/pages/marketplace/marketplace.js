import React, { Component } from 'react';

import $ from "jquery";

import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import wizaartimg  from '../../images/wizaart-img.gif';
import check from '../../images/check.png';
import acc from '../../images/acc.png';
import Explore from '../../pages/explore/Explore.js';
import TopPicks from '../../pages/explore/TopPicks.js';
import TopSellers from '../../pages/explore/TopSellers.js';
import Wolfden from '../../images/WolfdenS.png';
import Undead from '../../images/UndeadS.png';
import DarkKnight from '../../images/DarkKnightS.png';

class marketplace extends Component{ 
	constructor(props) {
	  super(props);
	  this.state = {
	  };
  
	}
	
	componentDidMount = () =>{

	 
		
				
	  }

	render(){
		return(
			<div className="marketplace-bg">
		        <Header />
                <section className="marketplace-sec2">
                    <div className="container">
                        <div className="wrp-head-marketplace">
                            <div className="head-marketchild2">
                                <h3>Top picks</h3>
                            </div>
                            
                        </div>
                        <div className="row">
                            <TopPicks />
                    </div>
                    </div>
                </section>
                <section id="featured-sec" className='mt-5'>
                    <div className="container">
                            <div className="head-marketchild2">
                                <h3>Featured Collections</h3>
                            </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <a href="/collectionview">
                                    <div className="collection-b">
                                       <div className="shadow-div">
                                            <div className="collect-content">
                                                <div className="col-box"><p>Collection</p></div>
                                                {/* <h3>Altura Penguins <img src={check} /></h3>
                                                <p>Altura Penguins are the first set of Smart NFTs to roam the blockchain.
                                                Each Penguin is located in a different city across the globe. The background
                                                of the NFT will dynamically change to fit the time of day in the Penguin's location.
                                                There are 20 unique Penguins with a supply of 100 each. </p> */}
                                                <div className="view-btn">
                                                    <a href="/collection/0xFA54B0E031148CB9dcf71c3c571441691C6FCaC8">View items on sale</a>
                                                    {/* <a href="/collection/0xFA54B0E031148CB9dcf71c3c571441691C6FCaC8" className="visit-website">Visit website</a> */}
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-6">
                                <ul className="featured-list mrt-featured">
                                    <li>
                                        <div className="wrp-featured-list">
                                            <div className="featuredlist-img">
                                             <img src={DarkKnight} />
                                            </div>
                                            <div className="featuredlist-content">
                                                <div className="ect-box">
                                                    <a href="#">Collection</a>
                                                    <p className='text-white'>Dark Knight <img src={check} className="img-check" /></p>
                                                    <div>
                                                        <a href="/collection/0x4483aF89d86114e2f8B16b15D64C84241922ed78" className="view-item">View items on sale</a>
                                                    </div>
                                                    {/* <div>
                                                        <a href="#" className="visit-web">Visit website</a>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="wrp-featured-list">
                                            <div className="featuredlist-img">
                                             <img src={Wolfden} />
                                            </div>
                                            <div className="featuredlist-content">
                                                <div className="ect-box">
                                                    <a href="#">Collection</a>
                                                    <p className='text-white'>WolfDen <img src={check} className="img-check" /></p>
                                                    <div>
                                                        <a href="/collection/0x1Fe414F05ee639F5c4c718544763BCECe739B4C5" className="view-item">View items on sale</a>
                                                    </div>
                                                    {/* <div>
                                                        <a href="#" className="visit-web">Visit website</a>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                    <TopSellers />
                 
                    <Explore />
           
            </div>
		);
	}

}
export default marketplace;