import React from 'react';
import "../assets/Home.css";
import BoxTypeBanner from "../images/box-type.png";
import Box from './Box.js';


import BoardGame from "../images/applications/board games.jpg"
import CakeBase from "../images/applications/cake base.jpg"
import Calender from "../images/applications/calender.webp"
import DiaryCover from "../images/applications/diary cover.png"
import Folder from "../images/applications/Folder.jpg"
import MobileBox from "../images/applications/mobile box.jpg"
import RigidBox from "../images/applications/rigid box.jpg"
import RigidBox2 from "../images/applications/Rigid box2.jpg"
import SweetBox from "../images/applications/sweet box.jpg";

const images={BoardGame,CakeBase,Calender,DiaryCover,Folder,MobileBox,RigidBox,RigidBox2,SweetBox};

export default function BoxType() {
  return (
    <div>
      <div className='banner'>
        <img src={BoxTypeBanner}/>
        <p id="p1">APPLICATIONS OF</p>
        <p id="p2">THE BOXES</p>
        <div className='application-images'>
          <Box url={BoardGame} style={{height:"476px",width:"365px"}} className='BoxImage'/>
          <Box url={CakeBase} style={{height:"476px",width:"365px"}} className='BoxImage'/>
          <Box url={Calender} style={{height:"476px",width:"365px"}} className='BoxImage'/>
        </div>
        
      </div>

    </div>
  )
}
