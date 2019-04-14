import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProductList from './components/products/ProductList';
import WishList from './components/wishlist/WishList';
import { productItems } from "./data";
import './App.css';


const App = (props) => {

  const [ products, setProducts ] = useState([]);
  const [ wishProducts, setWishProducts ] = useState([]);

  useEffect(() => {
    setProducts(productItems);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/products">
          products
        </Link>
        <Link to="/wishlist">
          wishlist
        </Link>
        <Route path="/products" exact
               render={() => <ProductList products={products} wishProducts={wishProducts} setWishProducts={setWishProducts}/>}
        />
        <Route path="/wishlist" render={() => <WishList wishProducts={wishProducts}/>} />
      </div>
    </BrowserRouter>
  );
};

export default App;
