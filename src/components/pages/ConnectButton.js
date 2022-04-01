import { Row, Col, Container,Button,ModalHeader,ModalFooter, Modal, ModalBody } from "reactstrap";

import React, { useEffect, useState } from "react";
import { withStorage } from 'react-browser-storage';
 
 import binanceChain from "../images/binanceChain.png";
import coin98 from "../images/coin98.png";
import mathwallet from "../images/mathwallet.png";
import metamask from "../images/metamask.png";
import safepal from "../images/safepal.png";
import tokenpocket from "../images/tokenpocket.png";
import Trustwallet from "../images/Trustwallet.png";
import walletConnect from "../images/walletConnect.png";
import {useWallet} from '@binance-chain/bsc-use-wallet'; 


const ConnectButton = ({ provider }) => {
  const [showOption, setOption]= useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setSubmenu]= useState(false)
  const wallet = useWallet()
  const [connectModal, setconnectModal] = useState(null);

  const [disconnectModal, setdisconnectModal] = useState(false);
 
  
  const connectModalToggle = () => setconnectModal(!connectModal);
  const disconnectModalToggle = () => setdisconnectModal(!disconnectModal);
  const [ providerId, setProvider, clearProvider ] = provider;

  const isWalletConnected=()=>{
    return wallet.status === "connected" 
  }

  const gotoprofile = () => {
    window.location.replace('/profile')
  }

  const connectWallet = (_p) => {
    if(_p == "injected"){
      wallet.connect();
    }
    else{
      wallet.connect(_p);
    }

    setProvider(_p);
    setconnectModal(!connectModal)
  } 

  const logout = () => {
    wallet.reset() ;
    setProvider(null);
    setdisconnectModal(!disconnectModal)
 
  } 
    

  const getTrimmedWallet = () => {
    let walletAddress = wallet.account;
    console.log("walletAddress", walletAddress)

    if(walletAddress){
      walletAddress = walletAddress.substring(0, 6)+"...."+walletAddress.substring(walletAddress.length - 6)
    }
    return walletAddress

  }


  useEffect(()=>{
    if(providerId == "injected"){
      wallet.connect();
    }
    else{
      wallet.connect(providerId)
    }
      

  },[])
  return (
          <>
          {wallet.account && 
            <a className="conbutton" onClick={disconnectModalToggle}>{wallet.account.substring(0, 6)+"...."+wallet.account.substring(wallet.account.length - 6)}</a>
          }
          
          {
          !wallet.account && 
            <a className="conbutton" onClick={connectModalToggle}>Unlock Wallet</a>          
        }
               

      
            
 <Modal isOpen={disconnectModal} toggle={disconnectModalToggle} className="disconnect-box"  centered={true}>
 <ModalHeader toggle={disconnectModalToggle}><span className="ml-4 roititle font-weight-bold">Your Wallet</span></ModalHeader>
   <ModalBody>
   <div className="mt-3 text-center">
           

                <p className="walletText">{wallet.account}</p>
                <p className="mt-2 mb-3 text-center center">
                  <a href={"https://bscscan.com/address/"+wallet.account} target="_blank">View on BscScan? <i class="fa fa-external-link" aria-hidden="true"></i></a>
                  </p>
                 <button className="conbutton mb-3 mr-3" onClick={() => gotoprofile()}>Go to Profile</button>                 
                 <button className="conbutton mb-3" onClick={() => logout()}>Logout</button>                 

       </div>        
   </ModalBody>
    
 </Modal>

 <Modal isOpen={connectModal} toggle={connectModalToggle} className="connect-box"  centered={true}>
 <ModalHeader toggle={connectModalToggle}><span className="ml-1 roititle font-weight-bold">Connect Wallet</span></ModalHeader>
   <ModalBody>
   <div className="mt-2">
           
                 <div className="connectbtn mb-2" onClick={() => connectWallet('injected')}><img className="float-right" src={metamask} /> <p className="float-left">MetaMask</p> </div>                 
                 <div className="connectbtn mb-2" onClick={() => connectWallet('injected')}><img className="float-right" src={Trustwallet} /><p className="float-left">TrustWallet</p>  </div>                 
                 <div className="connectbtn mb-2" onClick={() => connectWallet('injected')}><img className="float-right" src={mathwallet} /><p className="float-left">MathWallet</p>  </div>                 
                 <div className="connectbtn mb-2" onClick={() => connectWallet('injected')}><img className="float-right" src={tokenpocket} /><p className="float-left">TokenPocket</p>  </div>                 
                 <div className="connectbtn mb-2" onClick={() => connectWallet('walletconnect')}> <img className="float-right" src={walletConnect} /><p className="float-left">Wallet Connect</p> </div>                 
                 <div className="connectbtn mb-2" onClick={() => connectWallet('bsc')}> <img className="float-right" src={binanceChain} /><p className="float-left">Binance Smart Chain Wallet</p> </div>                 
                 <div className="connectbtn mb-2" onClick={() => connectWallet('injected')}><img className="float-right" src={safepal} /> <p className="float-left">Safepal Wallet</p> </div>                 
                 <div className="connectbtn mb-2" onClick={() => connectWallet('injected')}> <img className="float-right" src={coin98} /><p className="float-left">Coin98 Wallet</p> </div>                 
                                              
                <p className="bottomtext"><a href="https://docs.pancakeswap.finance/get-started/connection-guide" target="_blank"><i class="fa fa-question-circle-o" aria-hidden="true"></i> Learn how to connect?   </a></p>
       </div>        
   </ModalBody>
    
 </Modal>

    </>
  );
};
export default withStorage(['provider'])(ConnectButton);

