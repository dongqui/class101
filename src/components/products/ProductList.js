import React from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';

const ProductList = React.memo((props) => {

  const { products, wishProducts, setWishProducts } = props;

  const renderProductItem = () => {
    return products.map((product) =>
      <ProductItem key={product.id}
                   wishProducts={wishProducts}
                   setWishProducts={setWishProducts}
                   product={product}/>);
  };

  return (
    <ul className="product_list_container">
      {renderProductItem()}
    </ul>
  )
});

export default ProductList;