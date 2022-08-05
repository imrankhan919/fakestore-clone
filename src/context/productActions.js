   // fetchCategoryProducts

  export  async function fetchCategoryProducts(category){
    let response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    let data = await response.json()
    return data
}


    // fetchProducts

    export async function fetchProducts(){
        let response = await fetch('https://fakestoreapi.com/products')
        let products = await response.json()
        return products
    }

 

    // fetchProduct

    export async function fetchProduct(id){
        let res = await fetch(`https://fakestoreapi.com/products/${id}`)
        let data = await res.json()
        return data
    }


        // fetchCategories

    export async function fetchCategories(){
            let response = await fetch('https://fakestoreapi.com/products/categories')
            let categories = await response.json()
           return categories
        }


