import React, { Component } from 'react';

import $ from "jquery";
import Header from '../../pages/header.js';
import Footer from '../footer.js';
import arrow from '../../images/arrow.png'
import toyo from '../../images/toyo.png'
import progress from '../../images/progress.png'
import claimbutn from '../../images/claimbutn.png';
import Tabs from '../Tabs/Tabs.js';





class Stake extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentDidMount = () => {



    }

    render() {
        return (
            <div>
                <div className='mainbg-claimtoken'>
                    <Header />

                    <section id='banner'>
                        <div className='stakebnr-main-wrap'>
                            <div className='container-fluid'>
                                <div className='stakebnr-wrap'>
                                    <div className='stakehding'>
                                        <h3>Stake or farm your SFUND to join
                                            initialgame offerings and earn $SNFTS
                                        </h3>
                                        <p>Check medium to learn more about SNFTS</p>
                                    </div>
                                    <div className='stakebutn-wrap'>
                                    <div className='bnr-butn-one'>
                                    <a href='#'>
												<div className='pancakebutn2'>
													<p>Buy on pancakeswap</p>
												</div>
											</a>
											<a href='#'>
												<div className='Applybutn2'>
													<p>Apply as a projext</p>
												</div>
											</a>
											<a href='#'>
												<div className='Applybutn2'>
													<p>Apply as a projext</p>
												</div>
											</a>
										</div>
                                    </div>
                                </div>
                          <div className='tab-main-wrap'>
                          <Tabs />
                          </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        );
    }

}
export default Stake;