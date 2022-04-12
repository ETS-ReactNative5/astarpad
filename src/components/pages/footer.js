import React, { Component } from 'react';
 
import logo from '../images/logo.png';
import telegram from '../images/telegram.png';
import medium from '../images/medium.png';
import twitter from '../images/twitter.png';
import discord from '../images/discord.png';

class Footer extends Component {
  render() {
	 return (
		 <div className="footer-bg">
			 <div className='container-fluid'>
				 <div className='footer-wrap'>
					 <div className='f-logo'>
						 <a href='#'><img src={logo}></img></a>
					 </div>
					 <div className='f-cont'>
						 <ul className='f-cont-list'>
							 <li><a href='#'>Terms of Services</a></li>
							 <li><a href='#'>Privacy Policy</a></li>
						 </ul>
					 </div>
					 <div className='f-social-icon'>
					 <ul className="social-icon">
           <li>
                          <a href='https://t.me/AstarpadOfficial'target="_blank">
                            <img src={telegram}></img>
                          </a>
                        </li>
                        <li>
                          <a href='https://medium.com/@astarlaunchpad'target="_blank">
                            <img src={medium}></img>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/AstarPad'target="_blank">
                            <img src={twitter}></img>
                          </a>
                        </li>
                        <li>
                          <a href='https://discord.com/invite/HWxMSDFRwS'target="_blank">
                            <img src={discord}></img>
                          </a>
                        </li>
                </ul>
					 </div>
				 </div>
			 </div>
		 </div>

    );
  }
}

export default Footer;