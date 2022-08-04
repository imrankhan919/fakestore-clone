import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

function Cart() {
 
   const {cart} =  useContext(ProductContext)
 
    return (
    <div className='container'>
            <ul>
       {
        cart.map((product)=>
            <li key={product.id} >{product.title}</li>
        )
       }
            </ul>
    </div>
  )
}

export default Cart