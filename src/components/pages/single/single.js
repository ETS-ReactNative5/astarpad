import React, { Component, useEffect, useState ,useRef } from 'react';
import $ from "jquery";
import { Row, Col, Container,Button,ModalHeader,ModalFooter, Modal, ModalBody } from "reactstrap";

import Config, {MARKETPLACE} from "../../../Config"
import MARKETPLACE_ABI from "../../../Config/MARKETPLACE_ABI.json"
import NFT_ABI from "../../../Config/NFT_ABI.json"

import Header from '../header.js';
import Footer from '../footer.js';
import plus  from '../../images/plus.png';
import auctionhunt  from '../../images/auctionhunt.png';
import diamond  from '../../images/diamond.png';
import axios from "axios";
import Web3 from "web3"

import useWallet from '@binance-chain/bsc-use-wallet'
 
import { create } from 'ipfs-http-client'




const Single = () => {
    let web3Provider  = window.ethereum ; 
    const wallet = useWallet();
    const client = create('https://ipfs.infura.io:5001/api/v0')

	const [filedata , setFileData] = useState([]) ;
	const [fileName , setFileName] = useState(null) ;
	const [fileType , setFileType] = useState(null) ;
	const [image , setImage] = useState(null) ;
    const imagefile = useRef(null) ; 
    
	const [saleon , setSaleon] = useState(null) ;
	const [instantsale , setInstantsale] = useState(null) ;
	const [price , setPrice] = useState(null) ;
	const [name , setName] = useState(null) ;
	const [description , setDescription] = useState(null) ;
	const [artist , setArtist] = useState(null) ;

	const [height , setHeight] = useState(null) ;
	const [breadth , setBreadth] = useState(null) ;
	const [length , setLength] = useState(null) ;
	const [weight , setWeight] = useState(null) ;
	const [tags , setTags] = useState(null) ;

	const [publicProfileLink , setPublicProfileLink] = useState(null) ;
	const [startTime , setStartTime] = useState(null) ;
	const [endTime , setEndTime] = useState(null) ;
	const [auctionToken , setAuctionToken] = useState(null) ;
    const [auctionTokenArray, setAuctionTokenArray] = useState([]);
	
    const [modal, setModal] = useState(false);
    const [apiModal, setApiModal] = useState(false);
    const [mintModal, setMintModal] = useState(false);
    const [onSaleModal, setOnSaleModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [mined, setMinded] = useState(false);
    const [approved, setApproved] = useState(false);
    
    
    const apiToggle = () => setApiModal(!apiModal);
    const mintToggle = () => setMintModal(!mintModal);
    const saleToggle = () => setOnSaleModal(!onSaleModal);
    const successToggle = () => setSuccessModal(!successModal);
    const modalToggle = () => setModal(!modal);
    

    if(window.ethereum){
        web3Provider  = window.ethereum;
      }
      else{
        web3Provider = new Web3.providers.HttpProvider(Config.RPC_URL)
       
      }
      useEffect(() =>{
        if(wallet.account){
            getApproval() ;
        }
      },[wallet.account])


    useEffect(() =>{

         // fixed preview js
         $(window).scroll(function(){
            if ($(window).scrollTop() >= 300) {
                $('.wrp-preview').addClass('fixed-header');
                
            }
            else {
                $('.wrp-preview').removeClass('fixed-header');
                
            }
        });
        // fixed preview js
         

    //   setInterval(() => {
    //     console.log(that.saleon);
    //   }, 1000);
//      function readURL(input, imgControlName) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function(e) {
//       $(imgControlName).attr('src', e.target.result);
      

//     }
//     console.log(input.files)
//     setFileName(input.files[0].name);
//     setFileType(input.files[0].type);
//     setFileData(input.files[0]) ;

//     reader.readAsDataURL(input.files[0]);
//     //   reader.readAsArrayBuffer(input.files[0])  // Read bufffered file

//         // Callback
//         // reader.onloadend = () => {
//         //     console.log("Buffer Read" ,Buffer(reader.result) )
//         //     // setFile(Buffer(reader.result)) ;
          
//         // }
//   }
// }

// $("#imag").change(function() {
//   // add your logic to decide which image control you'll use
//   var imgControlName = "#ImgPreview";
//   readURL(this, imgControlName);
//   $('.preview1').addClass('it');
//   $('.btn-rmv1').addClass('rmv');
// });


// $("#removeImage1").click(function(e) {
//   e.preventDefault();
//   $("#imag").val("");
//   $("#ImgPreview").attr("src", "");
//   $('.preview1').removeClass('it');
//   $('.btn-rmv1').removeClass('rmv');
// });

getTokenList() ;
       
	  })

      const _onChange = () => {
        // Assuming only image
        console.log(imagefile)
        let file_size = imagefile.current.files[0].size;
        console.log(parseInt(file_size))

        if(parseInt(file_size/1e3) > 1024){
            alert("Please choose file not bigger than 1 MB");
            return false;
        }
        var _file = imagefile.current.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(_file);
        setFileName(_file.name);
        setFileType(_file.type);
        setFileData(_file) ;
        
         reader.onloadend = function (e) {
            setImage(reader.result)
          }.bind(this);
         
      }

      const removeImage = () => {
          setImage(null)
      }


      const handleSaleon = (e) => {
          console.log(e.target.checked);
          setSaleon(e.target.checked);
      }

      const handleInstantSale = (e) => {
        console.log(e.target.checked);
        setInstantsale(e.target.checked);
    }

 
    const handlePrice = (e) => {
        // console.log(e.target.checked);
        setPrice(e.target.value);
    }

    const handleName = (e) => {
        // console.log(e.target.checked);
        setName(e.target.value);
    }

    const handleDescription = (e) => {
        // console.log(e.target.checked);
        setDescription(e.target.value);
    }

    const handleArtist = (e) => {
        // console.log(e.target.checked);
        setArtist(e.target.value);
    }

    const handleLength = (e) => {
        // console.log(e.target.checked);
        setLength(e.target.value);
    }


    const handleBreadth = (e) => {
        // console.log(e.target.checked);
        setBreadth(e.target.value);
    }



    const handleHeight = (e) => {
        // console.log(e.target.checked);
        setHeight(e.target.value);
    }


    const handleWeight = (e) => {
        // console.log(e.target.checked);
        setWeight(e.target.value);
    }


    const handleTags = (e) => {
        // console.log(e.target.checked);
        setTags(e.target.value);
    }

    const handlePublicProfileLink = (e) => {
        // console.log(e.target.checked);
        setPublicProfileLink(e.target.value);
    }

    const handleAuctionToken  = (e) => {
        console.log(e.target.value);
        setAuctionToken(e.target.value);
    }

    const handleStartTime = (e) => {
        console.log(e.target.value);
        setStartTime(e.target.value);
    }

    const handleEndTime = (e) => {
        console.log(e.target.value);
        setEndTime(e.target.value);
    }


    const getTokenList = async () => {
        let _web3 = new Web3(web3Provider);
        let _marketPlaceContract = new _web3.eth.Contract(MARKETPLACE_ABI,MARKETPLACE);
        let _length = await _marketPlaceContract.methods.gettokenCount().call() ;
        let temp = [] ;
        let tokens = [] ; 
        for(let i = 0 ; i < _length; i++){
             let _token = await _marketPlaceContract.methods.getApprovedToken(i).call() ;
             if(!tokens.includes(_token[2])){
                temp.push(_token);
                tokens.push(_token[2]);
             }
             if((_length -1) == i){
                 setAuctionTokenArray(temp);
             }
        }
     
    } 
 
    const reset = () => {
        setAuctionToken('');
        setFileName('');
        setFileType('');
        setFileData('');
        setName('');
        setDescription('');
        setArtist('');
        setPublicProfileLink('');
        setPrice('');
        setStartTime('');
        setEndTime('');
        setInstantsale(false);
        setSaleon(false);
        setMinded(false);
        setImage(null);
        // $("#imag").val("");
        // $("#ImgPreview").attr("src", "");
        // $('.preview1').removeClass('it');
        // $('.btn-rmv1').removeClass('rmv');


    }

    const putauction = async (id) => {
        let _web3 = new Web3(web3Provider);
        let _marketPlaceContract = new _web3.eth.Contract(MARKETPLACE_ABI,MARKETPLACE);
        let _sPrice = _web3.utils.toWei(price) ;
        let _sTime =  new Date(startTime).getTime() / 1000 ;
        let _eTime = new Date(endTime).getTime() / 1000 ;
        let _title = name ; 
        setOnSaleModal(true);
        if(instantsale){
 

        _marketPlaceContract.methods.openInstantSellAuction(id,_sPrice,auctionToken,_title).send({
            from: wallet.account

        }).on('receipt', function(receipt){
            setOnSaleModal(false);
            setSuccessModal(true);
           reset() ;


        }).on('error', function(receipt){
            setOnSaleModal(false) ;


        });

        }
        else{
   
        
        _marketPlaceContract.methods.openAuction(auctionToken,id,_sPrice,_sTime,_eTime,_title).send({
            from: wallet.account

        }).on('receipt', function(receipt){
            setOnSaleModal(false);
            setSuccessModal(true);
           reset() ;


        }).on('error', function(receipt){
            setOnSaleModal(false) ;


        });
 
    }
    }
    const createToken = async () => {
        setMinded(false);

        let _web3 = new Web3(web3Provider);
        let _marketPlaceContract = new _web3.eth.Contract(MARKETPLACE_ABI,MARKETPLACE);
        let _nft = await _marketPlaceContract.methods.nftAddress().call() ;
        let _nftContract = new _web3.eth.Contract(NFT_ABI,_nft);
        try {
            setApiModal(true) ;
                const imageUpload = await client.add(filedata)
                const imgUrl = `https://ipfs.infura.io/ipfs/${imageUpload.path}`
                console.log(imgUrl)
    
                const jsonData = {
                    "name" : name,
                    "description" : description,
                    "properties" : {
                        "cover_url" : publicProfileLink,
                        "artist" : artist,
                        "public_profile_link" : publicProfileLink,
                        "height" : height,
                        "breadth" : breadth,
                        "length" : length,
                        "weight" : weight,
                        "tags" : tags,
                    },
                    "image" : imgUrl,
                    "preview" : imgUrl,
                };
                console.log(jsonData)
                try {
    
                const metaUpload = await client.add(JSON.stringify(jsonData));
                const metaUrl = `https://ipfs.infura.io/ipfs/${metaUpload.path}`
                console.log(metaUrl)
    
           
            console.log(filedata);
            var formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("artist", artist);
            formData.append("public_profile_link", publicProfileLink);
            // formData.append("filename", fileName);
            // formData.append("fileType", fileType);
            formData.append("filedata", metaUrl);
    
            formData.append("height", height);
            formData.append("breadth", breadth);
            formData.append("length", length);
            formData.append("weight", weight);
            formData.append("tags", tags);
    
            axios 
            .post("https://dev.wizard.financial/api/undead/uploadmeta", formData,
            {
                headers: {
                'content-Type': 'multipart/form-data'
              }}
              ) 
            .then((response) => {
            setApiModal(false) ;
    
                if(response.data.result == "success"){
                    setMintModal(true);
                    _nftContract.methods._Mint(response.data.id,metaUrl).send({
                        from: wallet.account
                    }).on('receipt', function(receipt){
                    setMintModal(false);
                        if(saleon && !mined){
                            console.log(response.data.id);
                            setMinded(true);
                          
                            putauction(response.data.id) ;
                        }
                        else{
                               setSuccessModal(true);
                               reset() ;
                               window.location.replace("/collection/"+wallet.account)
                                // window.location.replace("/product/"+response.data.id)
                            
                        }
                   
                    }).on('error', function(receipt){
                     
                    setMintModal(false);
    
                    })
                }
            //   setPost(response.data);
            }).catch(function (error) {
                setApiModal(false) ;
    
    
            });
    
    
                } catch (error) {
                console.log('Error uploading meta: ', error)
              } 
    
              } catch (error) {
                console.log('Error uploading file: ', error)
              } 
        // console.log(filedata);
        // var formData = new FormData();
        // formData.append("name", name);
        // formData.append("description", description);
        // formData.append("artist", artist);
        // formData.append("public_profile_link", publicProfileLink);
        // formData.append("filename", fileName);
        // formData.append("fileType", fileType);
        // formData.append("filedata", filedata);

        // formData.append("height", height);
        // formData.append("breadth", breadth);
        // formData.append("length", length);
        // formData.append("weight", weight);
        // formData.append("tags", tags);

        // setApiModal(true) ;
        // axios 
        // .post("https://dev.wizard.financial/api/undead/uploadmeta", formData,
        // {
        //     headers: {
        //     'content-Type': 'multipart/form-data'
        //   }}
        //   ) 
        // .then((response) => {
        // setApiModal(false) ;

        //     if(response.data.result == "success"){
        //         setMintModal(true);
                
        //         _nftContract.methods._Mint(response.data.id,response.data.url).send({
        //             from: wallet.account
        //         }).on('receipt', function(receipt){
        //         setMintModal(false);
        //             if(saleon && !mined){
        //                 console.log(response.data.id);
        //                 setMinded(true);
                      
        //                 putauction(response.data.id) ;
        //             }
        //             else{
        //                    setSuccessModal(true);
        //                    reset() ;
                        
        //             }
               
        //         }).on('error', function(receipt){
                 
        //         setMintModal(false);

        //         })
        //     }
        // //   setPost(response.data);
        // }).catch(function (error) {
        //     setApiModal(false) ;


        // });
    }

    const getApproval = async () => {
        let _web3 = new Web3(web3Provider);
        let _marketPlaceContract = new _web3.eth.Contract(MARKETPLACE_ABI,MARKETPLACE);
        let _nft = await _marketPlaceContract.methods.nftAddress().call() ;
        let _nftContract = new _web3.eth.Contract(NFT_ABI,_nft);
        let _approevd  = await _nftContract.methods.isApprovedForAll(wallet.account,MARKETPLACE).call();
        setApproved(_approevd);
        }

        const approveToken = async () => {
            let _web3 = new Web3(web3Provider);
            let _marketPlaceContract = new _web3.eth.Contract(MARKETPLACE_ABI,MARKETPLACE);
            let _nft = await _marketPlaceContract.methods.nftAddress().call() ;
            let _nftContract = new _web3.eth.Contract(NFT_ABI,_nft);
            setModal(true);

             _nftContract.methods.setApprovalForAll(MARKETPLACE,true).send({
                 from: wallet.account
                }).on('receipt', function(receipt){
                    setModal(false);

                    getApproval() ;
                }).on('error', function(receipt){
                 
                    setModal(false);
    
                 })
           
            }
        
	 
		return(
			<div className="bg-stake">
                <Header />
			 
                <section id="create-sec">
    <div class="wrp-create-head">
        <div class="container">
            <div class="create-head">
             
            <h4 class="m-pdt">Create Single Collectible</h4>
            </div>
        </div>
    </div>
    <div class="file-sec">
        <div class="container">
            <div class="row coloum-r">
                
                <div class="col-lg-6">
                    <div class="upload-head">
                        <h4>Upload file</h4>
                    </div>
                    <div class="file-upload-wrp">
                        <form id="myform">
                        <div class="yes">
                            <span class="btn_upload">
                            <input type="file" onChange={_onChange} ref={imagefile} id="imag" accept="image/*"  title="" class="input-img"/>
                            Choose File
                            </span>
                        </div>
                        <p class="formats">PNG, JPEG, JPG or GIF Max 1mb</p>
                        </form>
                    </div>
                    <ul class="list-sales">
                        
                        <li>
                            <div class="sales-l-c-wrp">
                                <div class="sales-l-c-child">
                                    <h4>Put on sale</h4>
                                    <p>You’ll receive bids on this item</p>
                                </div>
                                <div class="sales-l-c-child">
                                  <input class="switch" onChange={handleSaleon}  checked={saleon} value={saleon} type="checkbox"  />
                                </div>
                            </div>
                        </li>
                        
                        {
                             saleon == true && 
                        <li  >
                            <div class="sales-l-c-wrp" >
                                <div class="sales-l-c-child">
                                    <h4>Instant sale</h4>
                                    <p>Enter the price for which the item will be <br></br>instantly sold</p>
                                </div>
                                <div class="sales-l-c-child">
                                  <input class="switch" type="checkbox"  checked={instantsale}
                                  onChange={handleInstantSale}
                                  value={instantsale} />
                                </div>
                            </div>
                        </li>
                        }

                        {
                             saleon == true && 
                           
                         <div class="wrp-royalities marti-top">
                         <div class="royalities-child mart-in">
                             <label>Price</label>
                             <input  placeholder="Enter Price" 
                              onChange={handlePrice}
                              type="text"
                     
                             value={price} />
                         </div>
                         <div class="royalities-child martb-top">   
                             <label>Token</label>
                             <select  
                             
                             onChange={handleAuctionToken}
                              value={auctionToken} >
                                          <option value="" >---Select---</option>

                                  {
                                     auctionTokenArray.length > 0 && auctionTokenArray.map((v,i) => {
                                        return (
                                          <option value={v[2]} >{v[0]} (Fee: {parseFloat(v[1]/100)}%)</option>
                                        )
                                     } )
                                  }
                                 </select>
                         </div>
                     </div>
                       
                        }
                         {
                             saleon == true && !instantsale &&
                       <div class="wrp-royalities marti-top">
                                    <div class="royalities-child mart-in">
                                        <label>Start Date</label>
                                        <input  placeholder="eg. size" 
                                         onChange={handleStartTime}
                                         type="datetime-local"
                                
                                        value={startTime} />
                                    </div>
                                    <div class="royalities-child martb-top">   
                                        <label>End Date</label>
                                        <input  
                                        
                                        onChange={handleEndTime}
                                        type="datetime-local"
                                        placeholder="eg. M" value={endTime} />
                                    </div>
                                </div>
                        }


                        {/* <li>
                            <div class="sales-l-c-wrp">
                                <div class="sales-l-c-child">
                                    <h4>Unlock once purchased</h4>
                                    <p>Content will be unlocked after successful <br></br>transaction</p>
                                </div>
                                <div class="sales-l-c-child">
                                  <input class="switch" type="checkbox" v-model="unlockOncePurchased" />
                                </div>
                            </div>
                        </li> */}
                        {/* <li>
                            <div class="sales-l-c-wrp">
                                <div class="sales-l-c-child">
                                    <h4>Choose collection</h4>
                                    <p>Content will be unlocked after successful <br></br>transaction</p>
                                </div>
                                <div class="sales-l-c-child">
                                 
                                </div>
                            </div>
                            <div class="create-box-wrp">
                               <a href="#popup1">
                                    <div class="create-box-c1">
                                    <div class="avtar-b">
                                        <img src={plus} />
                                    </div>
                                    <h4>Create</h4>
                                    <p>ERC-721</p>
                                </div>
                               </a>
                                <div id="popup1" class="overlay">
                                    <div class="popup">
                                       <div class="img-pop">
                                           <img src={diamond} />
                                       </div>
                                        <a class="close" href="#">&times;</a>
                                        <p>You should connect your wallet to sign messages and <br></br> send transactions to ethereum network</p>
                                        <button>Connect Wallet</button>
                                    </div>
                                </div>
                                <div class="create-box-c2">
                                     <a href="#" class="aount-hunt">
                                    <div class="create-box-c1">
                                    <div class="avtar-b">
                                        <img src={auctionhunt} />
                                    </div>
                                    <h4>Auction hunt</h4>
                                    <p>ERC-721</p>
                                </div>
                               </a>
                                </div>
                            </div>
                        </li> */}
                        <li>
                            
                                <div class="wrp-input">
                                    <label>Name</label>
                                    <input placeholder="eg. Reedimable T-shirt with logo" 
                                  onChange={handleName}
                                    
                                    value={name} />
                                </div>
                                <div class="wrp-input">
                                    <label>Description <span>(optional)</span></label>
                                    <textarea placeholder="eg. Reedimable T-shirt with logo" 
                                  onChange={handleDescription}
                                    
                                    value={description} ></textarea>
                                </div>
                                  {/* <div class="wrp-royalities">
                                    <div class="royalities-child mart-in">
                                        <label>Royalties</label>
                                        <input  placeholder="10" />
                                    </div>
                                    <div class="royalities-child">
                                        <label>Number of copies</label>
                                        <input v-model="copies" placeholder="eg. 10" />
                                    </div>
                                </div> */}
                                <div class="wrp-royalities marti-top">
                                    <div class="royalities-child mart-in">
                                        <label>Artist</label>
                                        <input  placeholder="eg. size" 
                                         onChange={handleArtist}
                                
                                        value={artist} />
                                    </div>
                                    <div class="royalities-child martb-top">   
                                        <label>Public Profile Link</label>
                                        <input  
                                        
                                        onChange={handlePublicProfileLink}
                                        
                                        placeholder="eg. M" value={publicProfileLink} />
                                    </div>
                                </div>
                                <div class="wrp-royalities marti-top">
                                    <div class="royalities-child mart-in">
                                        <label>Length</label>
                                        <input  placeholder="eg. size" 
                                         onChange={handleLength}
                                
                                        value={length} />
                                    </div>
                                    <div class="royalities-child martb-top">   
                                        <label>Breadth</label>
                                        <input  
                                        
                                        onChange={handleBreadth}
                                        
                                        placeholder="eg. M" value={breadth} />
                                    </div>
                                </div>
                                <div class="wrp-royalities marti-top">
                                    <div class="royalities-child mart-in">
                                        <label>Height</label>
                                        <input  placeholder="eg. size" 
                                         onChange={handleHeight}
                                
                                        value={height} />
                                    </div>
                                    <div class="royalities-child martb-top">   
                                        <label>Weight</label>
                                        <input  
                                        
                                        onChange={handleWeight}
                                        
                                        placeholder="eg. M" value={weight} />
                                    </div>
                                </div>
                                <div class="wrp-royalities marti-top">
                                    <div class="royalities-child mart-in">
                                        <label>Tags</label>
                                        <input  placeholder="eg. size" 
                                         onChange={handleTags}
                                
                                        value={tags} />
                                    </div>
                                   
                                </div>
                                <div class="crate-items">
                                    {
                                        approved ?
                                        <button onClick={createToken}>Create item</button>
                                        :
                                    <button onClick={approveToken}>Approve to Create</button>
                                        
                                    }
                                </div>
                                
                                
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6">
                   <div class="wrp-preview">
                        <div class="upload-head">
                            <h4>Preview</h4>
                        </div>
                        <div class="yes preview-img">
                            <img id="ImgPreview" src={image} class="preview1" />
                            <input type="button"  id="removeImage1" value="x" onClick={removeImage} className={image == null ? "btn-rmv1" : "btn-rmv1 rmv" }  />
                        </div> 
                   </div>
                </div>
                
            </div>
    </div>
    </div>
    </section>

       
   <Modal isOpen={apiModal} toggle={apiToggle}  centered={true}>
   
        
   <ModalBody>
   <div className="modaltext text-center mt-4 pb-3" >Saving NFT Media and Creating Meta... <br />Do not Close Tab/Window or reload</div>      

   </ModalBody>
 
 </Modal>

 <Modal isOpen={mintModal} toggle={mintToggle}  centered={true}>
   
        
   <ModalBody>
   <div className="modaltext text-center mt-4 pb-3" >Minting NFT Transaction in progress... <br />Do not Close Tab/Window or reload</div>      

   </ModalBody>
 
 </Modal>


 <Modal isOpen={onSaleModal} toggle={saleToggle}  centered={true}>
   
        
   <ModalBody>
   <div className="modaltext text-center mt-4 pb-3" >Creating Auction on Marketplace.</div>      

   </ModalBody>
 
 </Modal>


 <Modal isOpen={successModal} toggle={successToggle}  centered={true}>
   
        
   <ModalBody>
   <div className="modaltext text-center mt-4 pb-3" >Transaction Successfull.</div>      

   </ModalBody>
   <Button className="depositButton mr-auto ml-auto mb-5" onClick={successToggle}>Close</Button>
 
 </Modal>

    
 <Modal isOpen={modal} toggle={modalToggle}  centered={true}>
   
        
   <ModalBody>
   <div className="modaltext text-center mt-4 pb-3" >Transaction is Processing...</div>      

   </ModalBody>
   <Button className="depositButton mr-auto ml-auto mb-5" onClick={modalToggle}>Close</Button>
    
 </Modal>

			</div>
		);
 

}
export default Single;