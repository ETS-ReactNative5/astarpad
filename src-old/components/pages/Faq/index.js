import React, { Component } from 'react';
import $ from "jquery";

import q1 from '../../images/q1.png';
import q2 from '../../images/q2.png';
import q3 from '../../images/q3.png';
import q4 from '../../images/q4.png';
import q5 from '../../images/q5.png';
import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import p4 from '../../images/p4.png';
import p5 from '../../images/p5.png';
import p6 from '../../images/p6.png';
import p7 from '../../images/p7.png';
import p8 from '../../images/p8.png';
import p9 from '../../images/p9.png';
import p10 from '../../images/p10.png';
import p11 from '../../images/p11.png';
import p12 from '../../images/p12.png';
import Footer from '../footer';
import Header from '../header';
class Faq extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

	}
	componentDidMount = () => {
		// faq open js

		$(document).ready(function () {
			$('.block__title').click(function (event) {
				if ($('.block').hasClass('one')) {
					$('.block__title').not($(this)).removeClass('active');
					$('.block__text').not($(this).next()).slideUp(300);
				}
				$(this).toggleClass('active').next().slideToggle(300);
			});

		});

		// closed faq js
	}

	render() {
		return (
			<div>
				 
				<section id="faq-section">
					<div className="main-container">
						<div className="container-fluid">
						<div className="container-border">
							<div className="head-faq">
								<h3>ASTARPAD FAQs</h3>
							</div>
							<div className="wrp-faq">
								<div className="row">
									<div className="col-lg-12">
										<div class="wrapper">
											<div class="block one">
												<div class="block__item block__items2">
													<div class="block__title"> What is the benefit of $APAD token holders?</div>
													<div class="block__text">
													Ans: Those who hold $APAD will be able to join the token sales of the projects which will be held at the Launchpad, and get allocations from these projects before they release to the market.
													 
													</div>
												</div>
												<div class="block__item block__items2">
													<div class="block__title">What types of projects will be there?</div>
													<div class="block__text">
                                                    The projects that we are going to target will be of different types like Defi, Gaming, NFTs, and many others. No doubt that the projects will be convincing however, it is highly recommended to DYOR (Do Your Own Research) on each project that we bring here for your peace of mind and to choose the best for yourself.
													
													</div>
												</div> 
												<div class="block__item block__items2">
													<div class="block__title">Which tier should you choose?</div>
													<div class="block__text">
                                                    We have 3 tier system and each tier holds the value of some tokens. You need to be careful while choosing the tier and must keep an eye on your budget to get the best out of it.
													</div>
												</div>
												<div class="block__item block__items2">
													<div class="block__title">What is the eligibility criteria for participating in IDO?</div>
													<div class="block__text">
                                                    Investors will need to hold the $ASTR tokens in the wallet to participate. There is no need to stake. $APAD LPs will also NOT count and the tokens must be available in your wallet to be eligible.
													</div>
												</div>
												<div class="block__item block__items2">
													<div class="block__title">What will be the duration of presales?</div>
													<div class="block__text">
													The duration of presales will be 12 hours but it doesn’t mean that you have completed 12 hours. Sometimes the presales are all done within a few hours so you need to speed up a little. 
													</div>
												</div>
                                                <div class="block__item block__items2">
													<div class="block__title">How to claim the tokens?</div>
													<div class="block__text">
													Claiming tokens won’t be airdrops so you will need to claim IDO tokens manually when your vesting time is ready. You will need $APAD tokens in your wallet according to the tier you participated in to be able to claim tokens and this will apply to allocations for each vesting cycle.

													</div>
												</div>

											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
						</div>
					</div>
				</section>

				 

			</div>

		);
	}
}

export default Faq;