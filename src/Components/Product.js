import React from 'react';
import ProductCard from './ProductCard';
import product1 from '../images/products/product1.jpeg';
import product2 from '../images/products/product2.jpeg';
import product3 from '../images/products/product3.jpeg';
import product4 from '../images/products/product4.jpeg';
import product5 from '../images/products/product5.jpeg';
import product6 from '../images/products/product6.jpeg';
import Footer from './Footer';

const Product = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">OUR PRODUCTS</h1>
    
    <div className="w-10/12 mx-auto mt-8 flex flex-wrap justify-center items-center">
      
      <ProductCard image={product1} name="Product 1" />
      <ProductCard image={product2} name="Product 2" />
      <ProductCard image={product3} name="Product 3" />
      <ProductCard image={product4} name="Product 4" />
      <ProductCard image={product5} name="Product 5" />
      <ProductCard image={product6} name="Product 6" />
    </div>
    <Footer/>
    </div>

  );
};

export default Product;
