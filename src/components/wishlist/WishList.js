import React, { useState } from 'react';
import WishListItem from './WishListItem';

const WishList = React.memo((props) => {
  const { wishProducts } = props;
  const [ sumOfProducts, setSumOfProducts ] = useState({});

  const handleSumOfPriceChange = (product, num) => {
    setSumOfProducts({...sumOfProducts, [product.id] : product.price * num})
  };

  const sumOfPrice = () => Object.values(sumOfProducts).reduce((sum, price) => sum + price, 0);

  return (
    <ul>
      {wishProducts.map(product => <WishListItem handleSumOfPriceChange={handleSumOfPriceChange} product={product}/>)}
      {sumOfPrice()}
    </ul>
  )
});

export default WishList;