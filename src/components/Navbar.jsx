import { useContext } from 'react'
import {Link} from 'react-router-dom'
import ProductContext from '../context/ProductContext'


function Navbar() {
 
  const {cart} = useContext(ProductContext)
   return (
    <nav>
       <Link className='logo' to="/"> <h1> <span>My</span> Store.</h1></Link>
        <ul className="nav-links">
            <Link className='logo' to="/cart"><li>Cart({cart.length})</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar