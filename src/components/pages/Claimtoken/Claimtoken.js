import React, { Component } from 'react';

import $ from "jquery";
import Header from '../../pages/header.js';
import Footer from '../footer.js';
import arrow from '../../images/arrow.png'
import toyo from '../../images/toyo.png'
import progress from '../../images/progress.png'
import claimbutn from '../../images/claimbutn.png';
import claimbutnrepons from '../../images/claimbutnrepons.png';






class Claimtoken extends Component {
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
						<div className='claimbnr-main-wrap'>
							<div className='container-fluid'>
								<div className='claimbnr-wrap'>
									<div className='claimbnr-cont'>
										<div className='claimhding'>
											<h3>Claim your tokens</h3>
										</div>
										<div className='claimbutn-wrap'>
											<div className='monthly-butn'><a href='#'>Monthly</a></div>
											<div className='linear-butn'><a href='#'>Linear</a></div>
										</div>
									</div>
									<div className='claim-list-wrap'>
										<ul className='claim-list'>
											<li>
												<div className='claimbox claimboxresponsive'>
													<div className='claimleft'>
														<div className='claim-l-img'>
															<img src={toyo}></img>
														</div>
														<div className='claim-l-cont'>
															<h5>Geopoly<br></br>
																Private (3rd Vesting)</h5>
														</div>
													</div>
													<div className='claimright'>
														<div className='allowcation-cont'>
															<h5>Allocation</h5>
															<p>NILL</p>
														</div>
														<div className='startdate-cont'>
															<h5>Claim start date</h5>
															<p>2022-Feb-21 22:00 UTC</p>
														</div>
														<div></div>
													</div>
												</div>
												<div className='claimbutn '>
													<a href='#'><img src={claimbutn}></img></a>
													
												</div>
												<a href='#' className='cbutnresponsive'><img src={claimbutnrepons}></img></a>
											</li>
											<li>
												<div className='claimbox claimboxresponsive'>
													<div className='claimleft'>
														<div className='claim-l-img'>
															<img src={toyo}></img>
														</div>
														<div className='claim-l-cont'>
															<h5>Geopoly<br></br>
																Private (3rd Vesting)</h5>
														</div>
													</div>
													<div className='claimright'>
														<div className='allowcation-cont'>
															<h5>Allocation</h5>
															<p>NILL</p>
														</div>
														<div className='startdate-cont'>
															<h5>Claim start date</h5>
															<p>2022-Feb-21 22:00 UTC</p>
														</div>
														<div></div>
													</div>
												</div>
												<div className='claimbutn'>
													<a href='#'><img src={claimbutn}></img></a>
												</div>
												<a href='#' className='cbutnresponsive'><img src={claimbutnrepons}></img></a>
											</li>
											<li>
												<div className='claimbox claimboxresponsive'>
													<div className='claimleft'>
														<div className='claim-l-img'>
															<img src={toyo}></img>
														</div>
														<div className='claim-l-cont'>
															<h5>Geopoly<br></br>
																Private (3rd Vesting)</h5>
														</div>
													</div>
													<div className='claimright'>
														<div className='allowcation-cont'>
															<h5>Allocation</h5>
															<p>NILL</p>
														</div>
														<div className='startdate-cont'>
															<h5>Claim start date</h5>
															<p>2022-Feb-21 22:00 UTC</p>
														</div>
														<div></div>
													</div>
												</div>
												<div className='claimbutn'>
													<a href='#'><img src={claimbutn}></img></a>
												</div>
												<a href='#' className='cbutnresponsive'><img src={claimbutnrepons}></img></a>
											</li>
											<li>
												<div className='claimbox claimboxresponsive'>
													<div className='claimleft'>
														<div className='claim-l-img'>
															<img src={toyo}></img>
														</div>
														<div className='claim-l-cont'>
															<h5>Geopoly<br></br>
																Private (3rd Vesting)</h5>
														</div>
													</div>
													<div className='claimright'>
														<div className='allowcation-cont'>
															<h5>Allocation</h5>
															<p>NILL</p>
														</div>
														<div className='startdate-cont'>
															<h5>Claim start date</h5>
															<p>2022-Feb-21 22:00 UTC</p>
														</div>
														<div></div>
													</div>
												</div>
												<div className='claimbutn'>
													<a href='#'><img src={claimbutn}></img></a>
												</div>
												<a href='#' className='cbutnresponsive'><img src={claimbutnrepons}></img></a>
											</li>
										</ul>
									</div>
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
export default Claimtoken;