const ProductReducer = (state , action) => {

    switch (action.type) {
    
        case 'GET_CATEGORIES' : 
        return {
            ...state,
            categories : action.payload
        }
        case 'GET_PRODUCTS' :
            return {
                ...state,
                products : action.payload
            }

        case 'GET_CATEGORY_PRODUCTS' : 
        return {
            ...state,
            products : action.payload
        }
    
        case 'GET_PRODUCT' : 
        return{
            ...state,
            product : action.payload
        }

        case 'ADD_TO_CART' :         
        return{
            ...state,
            cart : [...state.cart,action.payload]
        }



        default:
            return state
    }


}


export default ProductReducer