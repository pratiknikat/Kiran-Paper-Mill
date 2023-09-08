import React from 'react';
import "../assets/css/product_list.css";

export default function Project_list(Props)
 {
    
     const {Name,Material,Weight,Color} = Props;

     return 
       (
         <div className="Product-item"> 
         <div className="img"></div>
         <div style={{PaddingLeft:"10px",PaddingBottom:"5px"}}>
         <p className="product-title">{Title}</p>
         <p><span className="Product-span">&nbsp; Product Name:</span> {Name}</p>
         <p><span className="Product-span">&nbsp; raw material </span>: {Material}</p>
         <p><span className="Product-span">&nbsp; Grammage </span>: {Weight}</p>
         <p><span className="Product-span">&nbsp; Color </span>: {Color} </p>
         </div>
         </div> 
      )
}
