import React, { useContext, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import ProductCard from './ProductCard'
import {fetchProducts} from "../context/productActions"

function ProductList() {
  
  const {products , dispatch} = useContext(ProductContext)
  
 useEffect(()=>{
    
    const fetchData = async () =>{
      const products = await fetchProducts()
      dispatch({
        type : "GET_PRODUCTS",
        payload : products
    })
    }
    

    fetchData()

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