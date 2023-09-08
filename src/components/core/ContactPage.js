import React from 'react';
import "../assets/css/contactus.css";
import {CiEdit} from "react-icons/ci";
import {HiLocationMarker} from "react-icons/hi";
import {BiSolidPhone} from "react-icons/bi";
import {SiMinutemailer} from "react-icons/si";
import {MdOutlineMail} from "react-icons/md";
import { ContactInfo } from '../components/core/ContactInfo';

export const ContactPage = () => {
  return (
    <div >
        <h1 className="text-center">Contact Us</h1><br/>

        <div style={{alignItems:"start",textAlign:"start", display:"flex"}}>
          <div>
              <h3><CiEdit/>  CONTACT INFORMATION</h3>
              <ContactInfo icon={<HiLocationMarker/>} title="ADDRESS">
                 <pre>
                  Kiran Paper & Board Industries <br/>
                  Datala-443102, Buldhana Road,<br/>
                  Tal : Malkapur, Dis : Buldhana<br/>
                  India
                 </pre>
              </ContactInfo>


              <ContactInfo icon={<BiSolidPhone/>} title="PHONE NUMBERS">
                 <pre>
                  Phone Numbers : 9822699629 <br/>
                                  9356652829<br/>
                  
                 </pre>
              </ContactInfo>

            
              <ContactInfo icon={<SiMinutemailer/>} title="EMAIL ADDRESS">
                 <pre>
                  Email Address : kiranpapermill@gmail.com <br/>
                 
                 </pre>
              </ContactInfo>

            
             
          </div>

          <div>
          <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-green-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                  Company Name : 
                </label>
              </div>
              <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-green-200 rounded w-full py-2 px-4 text-green-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text"/>
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label class="block text-green-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                  Password
                </label>
              </div>
              <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-password" type="password" placeholder="******************"/>
              </div>
            </div>
           
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          </div>
        </div>
        
    </div>
  )
}
 