import React, { Component, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';

import { ToastContainer } from 'react-toastify';
import '../css/style.css'
import '../css/responsive.css'
// import '../css/navbar.css'
import $ from "jquery";
import {Link, Router} from 'react-router-dom';
import logo from '../images/logo.png';
import burger from '../images/burger.png';
import connect from '../images/connect.png';
import gcircle from '../images/gcircle.png';
import crosss from '../images/crosss.png';
import telegram from '../images/telegram.png';
import medium from '../images/medium.png';
import twitter from '../images/twitter.png';
import ConnectButton from './ConnectButton.js'
import discord from '../images/discord.png';


const Header = () => {
 

  useEffect(() =>{
   
    

    changePickupStoreMenu();

function changePickupStoreMenu(){
 
    var body = $('body'),
        mask = $('<div class="mask"></div>'),
        toggleSlideRight = document.querySelector( ".toggle-slide-right" ),
        slideMenuRight = document.querySelector( ".slide-menu-right" ),
        activeNav = '';
    ;
    $('body').append(mask);
 
    /* slide menu right */
    toggleSlideRight.addEventListener( "click", function(){
        $('body').addClass("smr-open");
        $('.mask').fadeIn();
        activeNav = "smr-open";
    } );
 
    /* hide active menu if close menu button is clicked */
    $(document).on('click', ".close-menu", function(el,i){
        $('body').removeClass(activeNav);
        activeNav = "";
        $('.mask').fadeOut();
    });
 
}
       
            
  },[])
 
		return(
      <div className="border-b">
        <div className="container-fluid">
          <div className="header-box">
          <div className="header-c1">
              <div className="logo-box">
                <a href="/">
                  <img src={logo} />
                </a>
              </div>
            </div>
  
            <div className="header-c2">
              <ul className="menu-list-d">
                      <li><a href='#'>
                        <div className='buttonbg'>
                          <p><ConnectButton /></p>
                        
                        </div>
                        </a></li>
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
            <div className="burger-area">
               <a href="#" className="burgers toggle-slide-right"> <img src={burger} /></a>
              </div>
            </div>

          </div>
              
              <div className="menu slide-menu-right menu-list-wrp">
                  <button class="close-menu"><img src={crosss} className="img-close" /></button>
                <ul className="menu-list2">
                <li><a href='#'>
                        <div className='buttonbg'>
                          <p><ConnectButton /></p>
                        
                        </div>
                        </a></li>
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
		);
 
}


export default Header;

