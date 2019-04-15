import React, { useState, useRef } from 'react';
import './WishListItem.css';

const WishListItem = React.memo((props) => {
  const { sumOfPriceHandler, product } = props;
  const { title, coverImage, price } = product;
  const [ isChecked, setIsChecked ] = useState(false);
  const numInput = useRef(null);

  const inputHandler = (e) => {
    const optionOfNum = e.target.value;
    if (isNaN(optionOfNum) || !Number.isInteger(Number(optionOfNum)) || optionOfNum === '.' ) {
      alert("숫자를 입력해주세요!");
      numInput.current.value = optionOfNum.slice(0, optionOfNum.length - 1);
      return;
    }
    sumOfPriceHandler(product, optionOfNum);
  };

  const checkboxHandler = () => {
    sumOfPriceHandler(product, 0);
    setIsChecked(!isChecked);
  };

  return (
    <li className="wish_item_container">
      <div className="wish_item_img_container">
        <img className="wish_item_img" src={coverImage} alt={title} />
      </div>
      <div className="wish_item_content">
        <p className="wish_item_title">{title}</p>
        <span className="wish_item_price">가격: {price}</span>
        <div className="wish_item_input">
          <input type="checkbox" checked={isChecked} onChange={checkboxHandler}/>결제 항목에 추가
          {isChecked && <input className="count_input" placeholder='구매 갯수' ref={numInput} type="text" onChange={inputHandler}/>}
        </div>
      </div>
    </li>
  )
});

export default WishListItem;