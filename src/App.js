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
        <div className="nav">
          <span id="nav_header">CLASS101</span>
          <Link to="/wishlist">
            <span className="nav_dir">장바구니</span>
          </Link>
          <Link to="/products">
            <span className="nav_dir">상품 목록</span>
          </Link>
        </div>
        <div className="content">
          <Route path="/products" exact
                 render={() => <ProductList products={products} wishProducts={wishProducts} setWishProducts={setWishProducts}/>}/>
          <Route path="/wishlist" exact
                 render={() => <WishList wishProducts={wishProducts}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
