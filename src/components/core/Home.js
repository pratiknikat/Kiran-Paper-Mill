import React from 'react'
import Banner from "../images/Rectangle 2.png";
import SunDry from "../images/sun-dry.png";
import Kappa from "../images/grey-kappa.png";
import PaperBoard from "../images/paper-board.png";
import Robot from "../images/Ellipse 4.png";
import Boxes from "../images/boxes.png";
import './Home.css';
import CircleImage from './CircleImage';
import BoxType from './Applications';
import Map from './Map'
import Footer from './Footer';
export default function HomeBanner() {
  return (
    <div>
      <div className='banner'>
        <img src={Banner}/>
        <h1 className='banner-text'>Kiran Paper and Board Industries</h1>
        <h2 className='banner-text'> Where Ideas Unfold on Every Sheet</h2>

        <div className='banner-button'>
          GET STARTED
        </div>
      </div>

      <div className='popular-products'>
        <div className='line1'></div>
        <div className='product-title'>
          <p id='popular'>POPULAR</p>
          <p id='products'>PRODUCTS</p>
        </div>
        <div className='line2'></div>
      </div>

      <div className='product-images'>
        <CircleImage url={SunDry} style={{boxShadow:"0px 0px 16px 0px grey"}}/>
        <CircleImage url={Kappa} style={{boxShadow:"0px 0px 16px 0px grey"}}/>
        <CircleImage url={PaperBoard} style={{boxShadow:"0px 0px 16px 0px grey"}}/>
      </div>

      <BoxType/>
      

      {/* Why Choose Us */}

      <div className='choose-div'>      
        <div className='green-box'>
          <CircleImage url={Robot}/>
          <div className='content'>
            <p>WHY TO CHOOSE US</p>
            <ul>
              <li>In-depth industry knowledge </li>
              <li>  Timely completion of orders </li>
              <li>  Transparent business dealings </li>
              <li>  Qualified and trained team of professionals </li>
              <li>Market leading prices</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Location Section */}
      <div className='location-section'>
        <img src={Boxes}/>
        <Map style={{border:0,width:"600px",height:"300px",boxShadow:"grey 0px 0px 20px -4px"}}/>
      </div>

      {/* Footer Section */}
      <Footer/>


    </div>
  )   
}
