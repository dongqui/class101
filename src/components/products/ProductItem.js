import React from 'react';
import './ProductItem.css';
import full_heart from '../../img/full_heart.png'
import empty_heart from '../../img/empty_heart.png'

const ProductItem = React.memo((props) => {
  const { dispatch, wishProducts, product } = props;
  const { title, coverImage, price } = product;

  const addToWish = () => {
    dispatch({wishProducts:[...wishProducts, product], type: 'setWishProduct'})
  };

  const removeFromWish = () => {
    const filteredWithList = wishProducts.filter(wishProd => wishProd !== product);
    dispatch({wishProducts: filteredWithList, type: 'setWishProduct'})
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
    const imgSrc = isWishedONe ? full_heart : empty_heart;
    const imgAlt = isWishedONe ? '담기' : '담기 취소';
    return (
      <img className="product_item_wishIcon" onClick={wishHandler(isWishedONe)} src={imgSrc} alt={imgAlt}/>
    )
  };

  return (
   <li className="product_item_container">
     <img className="product_item_img" src={coverImage}/>
     <div className="product_item_content">
       <p className="product_item_title">{title}</p>
       <span className="product_item_price">가격: {price}</span>
       {wishButton()}
     </div>

   </li>
  )
});

export default ProductItem;