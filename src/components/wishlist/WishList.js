import React, { useEffect } from 'react';
import WishListItem from './WishListItem';

const WishList = React.memo((props) => {
  const { wishProducts } = props;
  return (
    <ul>
      dd
      {wishProducts.map(product => <WishListItem product={product}/>)}
    </ul>
  )
});

export default WishList;