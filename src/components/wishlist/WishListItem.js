import React, { useState, useRef } from 'react';

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
    <>
      <li>
        {title}
        <input type="checkbox" checked={isChecked} onChange={checkboxHandler}/>
        {isChecked && <input ref={numInput} type="text" onChange={inputHandler}/>}
      </li>
    </>
  )
});

export default WishListItem;