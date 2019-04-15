import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProductList from './components/products/ProductList';
import WishList from './components/wishlist/WishList';
import { getProductItems } from "./data";
import './App.css';

const initialState = {products: [], wishProducts: [], totalProducts: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'getProducts':
      return {
        ...state,
        products: action.products,
        totalProducts: action.totalCount
      };
    case 'setWishProduct':
      return {
        ...state,
        wishProducts: action.wishProducts
      };
    default:
      throw new Error();
  }
};

const App = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, wishProducts, totalProducts } = state;

  const requestProductItems = (start, limit) => {
    const response = getProductItems(start, limit);
    dispatch({type: 'getProducts', products: response.data, totalCount: response.totalCount});
  };

  useEffect(() => {
    requestProductItems(0 ,5)
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
                 render={() => <ProductList
                   totalProducts={totalProducts} products={products} wishProducts={wishProducts}
                   dispatch={dispatch} requestProductItems={requestProductItems}/>}
          />
          <Route path="/wishlist" exact
                 render={() => <WishList wishProducts={wishProducts}/>}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
