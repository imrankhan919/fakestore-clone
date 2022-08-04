import { useContext } from "react"
import ProductContext from "../context/ProductContext"

function CategoryList({category}) {
 
   const {fetchCategoryProducts} = useContext(ProductContext)
 
  return (
    <li className="category-list-item" > <button onClick={() => fetchCategoryProducts(category)}>{category}</button> </li>
  )
}

export default CategoryList