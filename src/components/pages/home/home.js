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
import Livepools from '../padchain/Livepools.js';
import Cancelledpools from '../padchain/Cancelledpools.js';
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
											<a href='https://docs.google.com/forms/d/e/1FAIpQLSftAgtBZjAUUnECrWcfmXapTaceBJ2WtIZOQjbxR2FDGeo7xg/viewform' target='_blank'>
												<div className='Applybutn'>
													<p>Apply as a project</p>
												</div>
											</a>
											<a href='#'>
												<div className='pancakebutn'>
													<p>Buy on ArthSwap</p>
												</div>
											</a>
										</div>
										<div className='bnr-butn-two'>
											<a href='#FAQ'>
												<div className='buy-s-butn'>
													<p>FAQ</p>
												</div>
											</a>
											<a href='https://blockscout.com/astar/address/0xf8bD0302E8E0b652DcD67D92CF42fbC5aFBdc127/transactions' target='_blank'>
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
					<section id='live'>
						<div className='upcoming-main-wrap'>
							<div className='container-fluid'>
								<div className='upcoming-wrap'>
									<div className='upcoming-heading'>
										<h3>LIVE Pools</h3>
									</div>

								</div>
								<Livepools />

							</div>
						</div>
					</section>
					<section id='upcoming'>
						<div className='upcoming-main-wrap'>
							<div className='container-fluid'>
								<div className='upcoming-wrap'>
									<div className='upcoming-heading'>
										<h3>UPCOMING Pools</h3>
									</div>
								</div>
								<Upcomingpool />

							</div>
						</div>
					</section>
					<section id='cancelled'>
						<div className='upcoming-main-wrap'>
							<div className='container-fluid'>
								<div className='upcoming-wrap'>
									<div className='upcoming-heading'>
										<h3>CANCELLED Pools</h3>
									</div>

								</div>
								<Cancelledpools />


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