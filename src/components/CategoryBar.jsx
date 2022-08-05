import React, { useContext, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import CategoryList from './CategoryList'
import {fetchCategories} from '../context/productActions'

function CategoryBar() {
  
  const {categories , dispatch} = useContext(ProductContext)
  

  useEffect(()=>{
    
    const fetchData = async ()=> {
      const categories  = await fetchCategories()
      dispatch({
      type : "GET_CATEGORIES",
      payload : categories
  })
    }

    fetchData()

  },[])


  return (
    <section className="category-bar" >
        <ul className="category-list">
            {
              categories.map((category , index)=>
              <CategoryList key={index} category={category}/>
              )
            }
        </ul>
    </section>
  )
}

export default CategoryBar