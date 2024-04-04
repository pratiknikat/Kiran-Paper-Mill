import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../images/kiran-paper-logo.png";
import '../assets/Header.css';
export default function Header() {
  return (
    <div className='w-[80%] m-auto flex justify-between'>
      <nav className='nav-bar'>
        <img src={Logo}/>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/About">ABOUT US</Link></li>
            <li><Link to="/Product">PRODUCT</Link></li>
            
        </ul>
        <div style={{marginRight:"80px" , backgroundColor:"blue", padding:"10px", borderRadius:"10px", color:"white"}} className=''><Link to="/Contactpage">CONTACT</Link></div>
      </nav>
    </div> 
  )
}
