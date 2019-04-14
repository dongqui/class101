import React, { useState, useEffect } from 'react';
import ProductList from './components/products/ProductList';
import './App.css';
import { productItems } from "./data";

const App = (props) => {

  const [ products, setProducts ] = useState([]);
  const [ wishProducts, setWishProducts ] = useState([]);

  useEffect(() => {
    setProducts(productItems);
  }, []);

  return (
    <div className="App">
      <ProductList products={products} wishProducts={wishProducts} setWishProducts={setWishProducts}/>
    </div>
  );
};

export default App;
