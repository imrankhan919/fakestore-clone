import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";

const ProductContext = createContext()

export const ProductProvider = ({children}) =>{



    const initialState = {
        categories : [],
        products : [],
        product: [],
        cart : []
    }

   const [state , dispatch] =  useReducer(ProductReducer, initialState )


    // fetchCategories

    async function fetchCategories(){
        let response = await fetch('https://fakestoreapi.com/products/categories')
        let categories = await response.json()
        dispatch({
            type : "GET_CATEGORIES",
            payload : categories
        })
    }

   
    // fetchProducts

    async function fetchProducts(){
        let response = await fetch('https://fakestoreapi.com/products')
        let products = await response.json()
        dispatch({
            type : "GET_PRODUCTS",
            payload : products
        })
    }

    // fetchCategoryProducts

    async function fetchCategoryProducts(category){
        let response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        let data = await response.json()
        dispatch({
            type : "GET_CATEGORY_PRODUCTS",
            payload : data
        })
    }


    // fetchProduct

    async function fetchProduct(id){
        let res = await fetch(`https://fakestoreapi.com/products/${id}`)
        let data = await res.json()
        dispatch({
            type : "GET_PRODUCT",
            payload : data
        })
    }

// Add to cart

function addToCart(product){
    dispatch({
        type : "ADD_TO_CART",
        payload : product
    })
}





    return <ProductContext.Provider value={{
        categories : state.categories,
        products : state.products,
        product : state.product,
        cart : state.cart,
        fetchCategories,
        fetchProducts,
        fetchCategoryProducts,
        fetchProduct,
        addToCart
    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductContext