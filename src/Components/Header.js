import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../images/kiran-paper-logo.png";
import '../assets/Header.css';
export default function Header() {
  return (
    <div>
      <nav className='nav-bar'>
        <img src={Logo}/>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/About">ABOUT US</Link></li>
            <li><Link to="/Product">PRODUCT</Link></li>
            <li><Link to="/Qualified">QUALITY ASSURANCE</Link></li>
            <li style={{Float:"left"}} className=''><Link to="/Contactpage">CONTACT</Link></li>
        </ul>
      </nav>
    </div> 
  )
}
