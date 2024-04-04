import React from 'react'
import Product from '../Components/Product';

export default function Product_list(Props) {
   
     const {Title,Name,Material,Weight,Color}=Props;
  return (
    <div className='flex'>
         <Product/>
    </div>
  )
}
