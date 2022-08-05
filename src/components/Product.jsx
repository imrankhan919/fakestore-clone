import { useContext, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import {addToCart , fetchProduct} from '../context/productActions'


function Product() {
  
   const params =  useParams()

   const {product , dispatch} =  useContext(ProductContext)

   useEffect(()=>{
    const fetchData = async()=>{
      const product = await fetchProduct(params.id)
      dispatch({
      type : 'GET_PRODUCT',
      payload : product
    })
    }

    fetchData()

   },[])


   function handleClick(product){
    dispatch({
      type : "ADD_TO_CART",
      payload : product
  })
   }

  
    return (
    <div className='product-page'>

        <img src={product.image} alt="" className="product-image" />

        <div className="product-description">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          <button onClick={()=> handleClick(product)}>Add to cart</button>
            
        </div>

    </div>
  )
}

export default Product