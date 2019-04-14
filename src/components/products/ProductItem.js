import React from 'react';
import './ProductItem.css';

const ProductItem = React.memo((props) => {
  const { setWishProducts, wishProducts, product } = props;
  const { title, coverImage, price } = product;

  const addToWish = () => {
    setWishProducts([...wishProducts, product])
  };

  const removeFromWish = () => {
    setWishProducts(wishProducts.filter(wishProd => wishProd !== product));
  };

  const wishButton = () => {
    const isWishedONe = wishProducts.includes(product);
    return (
      <button onClick={isWishedONe ? removeFromWish : addToWish}>
        {isWishedONe ? '안 담기' : '담기'}
      </button>
    )
  };

  return (
   <li className="product_item_container">
     <img className="product_item_img" src={coverImage}/>
     <h6>{title}</h6>
     <h6>{price}</h6>
     {wishButton()}
   </li>
  )
});

export default ProductItem;