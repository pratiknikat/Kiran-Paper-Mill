import React from 'react'
import BigLogo from '../images/Big-Logo.png';
import './Footer.css'
import WhatsApp from '../images/whatsapp_icon.png';
import Call from '../images/call.png';
import Mail from '../images/mail.png';

export default function Footer() {
  return (
    <div>
      <footer className='footer-section'>
        <img src={BigLogo} width={350} height={110} className='footer-img'/>
        <div className='icons'>
            <a href="https://wa.me/+919822699629"><img src={WhatsApp} width={30} height={30}/>+91 9822699629</a>
            <a href="tel:9356652829"><img src={Call} alt="Call 9356652829" width={30} height={30}/>+91 9356652829</a>
            <a href="mailto:kiranpapermill@gmail.com"><img src={Mail} width={30} height={30}/>kiranpapermill@gmail.com</a>
        </div>
        <p>
            <a href='https://maps.app.goo.gl/wGzSxDQ7sNZJwim78'>Kiran Paper & Board Industries Datala-443102,Buldhana Road, Taluka Malkapur,District Buldhana, India.</a>
        </p>
        <p className='copyright'>
            © 2023 Kiran Paper and Board Industries. All rights reserved.
        </p>
       </footer>
    </div>
  )
}
