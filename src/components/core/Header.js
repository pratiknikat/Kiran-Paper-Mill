import React from 'react';
import Logo from "../images/kiran-paper-logo.png";
import './Header.css';
export default function Header() {
  return (
    <div>
      <nav className='nav-bar'>
        <img src={Logo}/>
        <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>PRODUCT</li>
            <li>QUALITY ASSURANCE</li>
        </ul>
      </nav>
    </div>
  )
}
