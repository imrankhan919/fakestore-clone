import React, { useContext, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import CategoryList from './CategoryList'

function CategoryBar() {
  
  const {categories,  fetchCategories} = useContext(ProductContext)
  

  useEffect(()=>{
    fetchCategories()
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