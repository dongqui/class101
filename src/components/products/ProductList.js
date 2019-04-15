import React from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';

const ProductList = React.memo((props) => {

  const { products, wishProducts, dispatch, totalProducts, requestProductItems } = props;

  const setPagination = () => {
    const page = Math.ceil(totalProducts / 5);
    const pagination = [];
    for (let i = 1; i <= page; i++) {
      pagination.push(<span className="page" onClick={() => requestProductItems((i - 1) * 5, 5)}>{i}</span>);
    }
    return pagination
  };

  const renderProductItem = () => {
    return products.map((product) =>
      <ProductItem key={product.id}
                   wishProducts={wishProducts}
                   setWishProducts={dispatch}
                   product={product}/>);
  };

  return (
    <>
      <ul className="product_list_container">
        {renderProductItem()}
      </ul>
      <div className="pagination">
        {setPagination()}
      </div>
    </>
  )
});

export default ProductList;