import React, { useState } from 'react';

const WishListItem = React.memo((props) => {
  const { handleSumOfPriceChange, product } = props;
  const { title, coverImage, price } = product;
  const [ isChecked, setIsChecked ] = useState(false);

  const handleSelect = (e) => {
    const optionOfNum = e.target.value;
    handleSumOfPriceChange(product, optionOfNum);
  };

  const handleCheckbox = () => {
    isChecked ? handleSumOfPriceChange(product, 0) : handleSumOfPriceChange(product, 1);
    setIsChecked(!isChecked);
  };

  const renderSelect = () => {
    const options = [];
    for (let i = 1; i <= 5; i++) {
      options.push(<option value={i}>{i}개</option>)
    }
    return (
      <select onChange={handleSelect} defaultValue={1}>
        {options}
      </select>
    )
  };

  return (
    <>
      {console.log('rendered')}
      <li>
        {title}
        <input type="checkbox" checked={isChecked} onChange={handleCheckbox}/>
        {isChecked && renderSelect()}
      </li>
    </>
  )
});

export default WishListItem;