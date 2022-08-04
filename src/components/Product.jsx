import { useContext, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ProductContext from '../context/ProductContext'


function Product() {
  
   const params =  useParams()

   const {fetchProduct , product , addToCart} =  useContext(ProductContext)

   useEffect(()=>{
    fetchProduct(params.id)
   },[])

  
    return (
    <div className='product-page'>

        <img src={product.image} alt="" className="product-image" />

        <div className="product-description">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          <button onClick={()=>addToCart(product)}>Add to cart</button>
            
        </div>

    </div>
  )
}

export default Product