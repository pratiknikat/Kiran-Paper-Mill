import React from 'react';
import "../product_Information.css";

export default function Product_Information(Props)
 
{
     
  const {Name,Material,Adv,Color,Advantage,packing,Size}=Props;

  return (
    <div className="Product-content"> 
    <div className="product-class">
      <div className="Product-img"></div>
      <div className="product-adv"> 
          <h3>{Name}</h3>
          <ol type="1"> 
             <li>{Adv.pro1}</li>
             <li>{Adv.pro2}</li>
             <li>{Adv.pro3}</li>
             <li>{Adv.pro4}</li>   
          </ol>
      </div>
    </div>
    <div className="product-imf">
      <p className="product-title1">{Name}</p>
      <p>{Size}</p>
      <br/>
      <p className="product-title1">DETAILED PRODUCT DESCRIPTION</p>
      <p><span className="Product-span1">Product Name  : </span> {Name}</p> 
      <p><span className="Product-span1">Material :</span>: {Material}</p>
      <p><span className="Product-span1">Color : </span> {Color}</p>
      <p><span className="Product-span1">Advantages  :</span>{Advantage}</p>
      <p><span className="Product-span1">Packing : </span>{packing}</p>
      <p><span className="Product-span1">Size : </span>{Size}</p>

      <button type="button" className="Button">Contact Us</button>
    </div>
</div>
  )
}
