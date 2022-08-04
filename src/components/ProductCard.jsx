import {Link} from 'react-router-dom'

function ProductCard({product}) {
  
  return (
    <div className="product-card">
    <img src={product.image} alt=""/>
    <span>
        <h1>{product.title}</h1>
         <h2>Rating : {product.rating.rate}</h2>
    </span>
    <Link to={`/product/${product.id}`} className="primary-btn">View</Link>
</div>
  )
}

export default ProductCard