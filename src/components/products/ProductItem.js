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

  const wishHandler = (isWishedONe) => () =>{
    if (wishProducts.length >= 3) {
      alert('장바구니에는 3개 까지만 담을 수 있어요!');
      return;
    }
    isWishedONe ? removeFromWish() : addToWish();
  };

  const wishButton = () => {
    const isWishedONe = wishProducts.includes(product);
    return (
      <button onClick={wishHandler(isWishedONe)}>
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