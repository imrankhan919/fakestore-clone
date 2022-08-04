import React, { useContext, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import ProductCard from './ProductCard'

function ProductList() {
  
  const {products , fetchProducts} = useContext(ProductContext)
  
  useEffect(()=>{
    fetchProducts()
  },[])


  return (
    <div className="product-list">
       
      {
        products.map((product)=>
        <ProductCard key={product.id} product={product}/>
        )
      }
     
    </div>
  )
}

export default ProductList