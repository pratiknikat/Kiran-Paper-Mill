import React from 'react'
import { useEffect } from 'react';
import './Box.css'



export default function Box( props) {
    
  return (
    
    <div>
      <img src={props.url} className='box-image' id="box" style={props.style}/>
    </div>
    
  )
}
