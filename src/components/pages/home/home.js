import React, { Component } from 'react';

import $ from "jquery";
import Header from '../../pages/header.js';
import Footer from '../footer.js';
import Padchain from '../padchain/Padchain.js';
import arrow from '../../images/arrow.png'
import toyo from '../../images/toyo.png'
import progress from '../../images/progress.png'
import Upcomingpool from '../padchain/Upcomingpool.js';
import Completedpools from '../padchain/Completedpools.js';
import Faq from '../Faq/index.js';




class Home extends Component {
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
				<div className='mainbg'>
					<Header />

					<section id='banner'>
						<div className='bnr-main-wrap'>
							<div className='container-fluid'>
								<div className='bnr-wrap'>
									<div className='bnr-cont'>
										<h3>UNLOCK YOUR DOOR TO UNLIMITED POSSIBILITIES OF BLOCKCHAIN
										</h3>
									</div>
									<div className='bnr-butn'>
										<div className='bnr-butn-one'>
											<a href='https://docs.google.com/forms/d/e/1FAIpQLSftAgtBZjAUUnECrWcfmXapTaceBJ2WtIZOQjbxR2FDGeo7xg/viewform'target='_blank'>
												<div className='Applybutn'>
													<p>Apply as a projext</p>
												</div>
											</a>
											<a href='#'>
												<div className='pancakebutn'>
													<p>Buy on ArthSwap</p>
												</div>
											</a>
										</div>
										<div className='bnr-butn-two'>
											<a href='#'>
												<div className='buy-s-butn'>
													<p>FAQ</p>
												</div>
											</a>
											<a href='https://blockscout.com/astar/address/0xf8bD0302E8E0b652DcD67D92CF42fbC5aFBdc127/transactions'target='_blank'>
												<div className='buy-s-butntwo'>
													<p>Astarscan</p>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className='all-sect-bg'>
					<section id='buysomething'>
						<div className='buysomething-main-wrap'>
							<div className='container-fluid'>
								<div className='buysomething-wrap'>
									<ul className='buysomething'>
										<li>
											<div className='something-head'>
												<h5>What is Astarpad?</h5>
											</div>
											<div className='s-box-wrap'>
												<div className='somethingbox'>
													<p>Astarpad is a launchpad for unique and different types
														of projects like DeFi, blockchain gaming, NFTs, and all those
														projects which utilize blockchain for all of us.</p>
													<div className='knowmore-but mknow'>
														<a href='https://medium.com/@astarlaunchpad/what-is-astarpad-d85bd370f9d5' target='_blank'>
															<p>Know more</p>
															<img src={arrow}></img>
														</a>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div className='something-head'>
												<h5>How to Get Started with Astarpad?</h5>
											</div>
											<div className='s-box-wrap'>
												<div className='somethingbox'>
													<p>It looks like you want to start getting amazing benefits from
														Astarpad projects that’s why you are here</p>
													<div className='knowmore-but'>
														<a href='https://medium.com/@astarlaunchpad/how-to-get-started-with-astarpad-1dd7554182a8' target='_blank'>
															<p>Know more</p>
															<img src={arrow}></img>
														</a>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div className='something-head'>
												<h5>Astarpad Tier System</h5>
											</div>
											<div className='s-box-wrap'>
												<div className='somethingbox'>
													<p>Here at Astarpad, we have introduced 3 tier system.
														Each have its own allocation pools and max contribution limit
														(max contribution limit varies from project to project) and
														you’re required to hold Astarpad tokens for each tier.</p>
													<div className='knowmore-but'>
														<a href='https://medium.com/@astarlaunchpad/astarpad-tier-system-c7837058ef7d' target='_blank'>
															<p>Know more</p>
															<img src={arrow}></img>
														</a>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>

					<section id='upcoming'>
						<div className='upcoming-main-wrap'>
							<div className='container-fluid'>
								<div className='upcoming-wrap'>
									<div className='upcoming-heading'>
										<h3>UPCOMING POOLS</h3>
									</div>

								</div>
								<Upcomingpool />

								{/* <div className='u-box'>
									<div className='ubleft'>
										<div className='upcoming-box-wrap'>
											<div className='upcoming-top'>
												<div className='u-top-left'>
													<img src={toyo}></img>
												</div>
												<div className='u-top-right'>
													<div className='toyo-hding'>
														<h5>TOYOVERSE</h5>
														<p>IN 10 DAYS</p>
													</div>
													<p>Toyo starts as a play-to-earn strategic PVP/PVE blockchain
														fighting game with NFT action-figure characters, body parts,
														and item ownership.
													</p>
													<div className='fist-phase-but'>
														<a href='#'>1st Phase</a>
													</div>
												</div>
											</div>
											<div className='upcoming-bottom'>
												<ul className='u-bootom-lis'>
													<li>
														<p>Min allocation</p>
														<h5 className='large'>0.01</h5>
													</li>
													<li>
														<p>Maximum</p>
														<h5>TBA</h5>
													</li>
													<li>
														<p>Acess</p>
														<h5>Public</h5>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className='ubright'>
									<div className='upcoming-box-wrap'>
											<div className='upcoming-top'>
												<div className='u-top-left'>
													<img src={toyo}></img>
												</div>
												<div className='u-top-right'>
													<div className='toyo-hding'>
														<h5>TOYOVERSE</h5>
														<p>IN 10 DAYS</p>
													</div>
													<p>Toyo starts as a play-to-earn strategic PVP/PVE blockchain
														fighting game with NFT action-figure characters, body parts,
														and item ownership.
													</p>
													<div className='fist-phase-but'>
														<a href='#'>1st Phase</a>
													</div>
												</div>
											</div>
											<div className='upcoming-bottom'>
												<ul className='u-bootom-lis'>
													<li>
														<p>Min allocation</p>
														<h5 className='large'>0.01</h5>
													</li>
													<li>
														<p>Maximum</p>
														<h5>TBA</h5>
													</li>
													<li>
														<p>Acess</p>
														<h5>Public</h5>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div> */}
							</div>
						</div>
					</section>
					<section id='Completed Pools'>
						<div className='upcoming-main-wrap'>
							<div className='container-fluid'>
								<div className='upcoming-wrap'>
									<div className='upcoming-heading'>
										<h3>Completed Pools</h3>
									</div>
								</div>
								<Completedpools />
								{/* <div className='P-box'>
									<div className='pbleft'>
										<div className='pool-box-wrap'>
											<div className='upcoming-top'>
												<div className='u-top-left'>
													<img src={toyo}></img>
												</div>
												<div className='u-top-right'>
													<div className='toyo-hding'>
														<h5>TOYOVERSE</h5>
														<p>IN 10 DAYS</p>
													</div>
													<p>Toyo starts as a play-to-earn strategic PVP/PVE blockchain
														fighting game with NFT action-figure characters, body parts,
														and item ownership.
													</p>
													<div className='fist-phase-but'>
														<a href='#'>1st Phase</a>
													</div>
												</div>
											</div>
											<div className='pool-bottom'>
												<ul className='u-bootom-lis'>
													<li>
														<p>Total Raise</p>
														<h5 className='large'>379997.79<strong>BUSD</strong></h5>
													</li>
													<li>
														<p>Maximum</p>
														<h5>3301.57<strong>BUSD</strong></h5>
													</li>
													<li>
														<p>Acess</p>
														<h5>Public</h5>
													</li>
												</ul>
											</div>
											<div className='progress-main-wrap'>
												<div className='progress-wrap'>
													<div className='pro-l'>
													<p>Progress<strong>99.9%</strong></p>
													</div>
													<div className='pro-r'>
													<p>Max Participants - 4484</p>
													</div>
												</div>
												<img src={progress}></img>
											</div>
										</div>
									</div>
									<div className='pbright'>
									<div className='pool-box-wrap'>
											<div className='upcoming-top'>
												<div className='u-top-left'>
													<img src={toyo}></img>
												</div>
												<div className='u-top-right'>
													<div className='toyo-hding'>
														<h5>TOYOVERSE</h5>
														<p>IN 10 DAYS</p>
													</div>
													<p>Toyo starts as a play-to-earn strategic PVP/PVE blockchain
														fighting game with NFT action-figure characters, body parts,
														and item ownership.
													</p>
													<div className='fist-phase-but'>
														<a href='#'>1st Phase</a>
													</div>
												</div>
											</div>
											<div className='pool-bottom'>
												<ul className='u-bootom-lis'>
													<li>
														<p>Total Raise</p>
														<h5 className='large'>379997.79<strong>BUSD</strong></h5>
													</li>
													<li>
														<p>Maximum</p>
														<h5>3301.57<strong>BUSD</strong></h5>
													</li>
													<li>
														<p>Acess</p>
														<h5>Public</h5>
													</li>
												</ul>
											</div>
											<div className='progress-main-wrap'>
												<div className='progress-wrap'>
													<div className='pro-l'>
													<p>Progress<strong>99.9%</strong></p>
													</div>
													<div className='pro-r'>
													<p>Max Participants - 4484</p>
													</div>
												</div>
												<img src={progress}></img>
											</div>
										</div>
									</div>
								</div> */}
								{/* <div className='P-box'>
									<div className='pbleft'>
										<div className='pool-box-wrap'>
											<div className='upcoming-top'>
												<div className='u-top-left'>
													<img src={toyo}></img>
												</div>
												<div className='u-top-right'>
													<div className='toyo-hding'>
														<h5>TOYOVERSE</h5>
														<p>IN 10 DAYS</p>
													</div>
													<p>Toyo starts as a play-to-earn strategic PVP/PVE blockchain
														fighting game with NFT action-figure characters, body parts,
														and item ownership.
													</p>
													<div className='fist-phase-but'>
														<a href='#'>1st Phase</a>
													</div>
												</div>
											</div>
											<div className='pool-bottom'>
												<ul className='u-bootom-lis'>
													<li>
														<p>Total Raise</p>
														<h5 className='large'>379997.79<strong>BUSD</strong></h5>
													</li>
													<li>
														<p>Maximum</p>
														<h5>3301.57<strong>BUSD</strong></h5>
													</li>
													<li>
														<p>Acess</p>
														<h5>Public</h5>
													</li>
												</ul>
											</div>
											<div className='progress-main-wrap'>
												<div className='progress-wrap'>
													<div className='pro-l'>
													<p>Progress<strong>99.9%</strong></p>
													</div>
													<div className='pro-r'>
													<p>Max Participants - 4484</p>
													</div>
												</div>
												<img src={progress}></img>
											</div>
										</div>
									</div>
									<div className='pbright'>
									<div className='pool-box-wrap'>
											<div className='upcoming-top'>
												<div className='u-top-left'>
													<img src={toyo}></img>
												</div>
												<div className='u-top-right'>
													<div className='toyo-hding'>
														<h5>TOYOVERSE</h5>
														<p>IN 10 DAYS</p>
													</div>
													<p>Toyo starts as a play-to-earn strategic PVP/PVE blockchain
														fighting game with NFT action-figure characters, body parts,
														and item ownership.
													</p>
													<div className='fist-phase-but'>
														<a href='#'>1st Phase</a>
													</div>
												</div>
											</div>
											<div className='pool-bottom'>
												<ul className='u-bootom-lis'>
													<li>
														<p>Total Raise</p>
														<h5 className='large'>379997.79<strong>BUSD</strong></h5>
													</li>
													<li>
														<p>Maximum</p>
														<h5>3301.57<strong>BUSD</strong></h5>
													</li>
													<li>
														<p>Acess</p>
														<h5>Public</h5>
													</li>
												</ul>
											</div>
											<div className='progress-main-wrap'>
												<div className='progress-wrap'>
													<div className='pro-l'>
													<p>Progress<strong>99.9%</strong></p>
													</div>
													<div className='pro-r'>
													<p>Max Participants - 4484</p>
													</div>
												</div>
												<img src={progress}></img>
											</div>
										</div>
									</div>
								</div> */}
							</div>
						</div>
					</section>

					<section id='FAQ'>

						<div className='faq'>
							<div className='container-fluid'>
 <Faq />
							</div>
						</div>

					</section>

					<Footer />
				</div>


			</div>
		);
	}

}
export default Home;