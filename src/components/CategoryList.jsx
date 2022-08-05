import { useContext } from "react"
import ProductContext from "../context/ProductContext"
import {fetchCategoryProducts} from '../context/productActions'

function CategoryList({category}) {
 
   const {dispatch} = useContext(ProductContext)
 
 async  function handleClick(category){

    const categories = await fetchCategoryProducts(category)
    dispatch({
      type : "GET_CATEGORY_PRODUCTS",
      payload : categories
  })
   }


  return (
    <li className="category-list-item" > <button onClick={() => handleClick(category)}>{category}</button> </li>
  )
}

export default CategoryList