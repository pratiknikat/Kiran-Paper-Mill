import React from 'react'
import '../assets/css/Home.css';
export default function CircleImage(props) {
  return (
    <div>
      <img src={props.url} className='circle_img' style={props.style}/>
    </div>
  )
}
