import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Cart from "./components/Cart";

import CategoryBar from "./components/CategoryBar";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import {ProductProvider} from "./context/ProductContext";
function App() {
  return (
   <Router>
     <ProductProvider>
      <div className="App">
    <div className="container">
    <Navbar/>
    <Routes>
      <Route path='/' element={
        <>
        <CategoryBar/>
         <ProductList/>
          </>
      }/>
     <Route path="/product/:id" element={<Product/>} />
     <Route path="/cart" element = {<Cart/>}/>
      
    </Routes>
    </div>
    </div>
    </ProductProvider>
   </Router>
  );
}

export default App;
