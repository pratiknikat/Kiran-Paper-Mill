import React, { Children } from 'react'


export const ContactInfo = (props) => {
    const icon = props.icon;
    const title = props.title;

    
  return (
    <div style={{display:"flex"}}>
       <div style={{fontSize:"25px", backgroundColor:"green",color:"white", padding:"10px" , borderRadius:"50px",}}>
           {icon }
       </div>
       <div>
            <h3>{title}</h3>
            {props.children}
       </div>
    </div>
  )
}
