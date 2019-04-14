import React, { useState, useEffect } from 'react';
import ProductList from './components/products/ProductList';
import WishList from './components/wishlist/WishList';
import { BrowserRouter , Route, Link } from 'react-router-dom';
import './App.css';
import { productItems } from "./data";

const App = (props) => {

  const [ products, setProducts ] = useState([]);
  const [ wishProducts, setWishProducts ] = useState([]);

  useEffect(() => {
    setProducts(productItems);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/products" exact
               render={() => <ProductList products={products} wishProducts={wishProducts} setWishProducts={setWishProducts}/>}
        />
        <Route path="/wishlist" render={() => <WishList wishProducts={wishProducts}/>} />
      </div>
    </BrowserRouter>
  );
};

export default App;
