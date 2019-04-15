import React, { useState, useEffect } from 'react';
import WishListItem from './WishListItem';
import { coupons } from "../../data";
import './WishList.css';

const WishList = React.memo((props) => {
  const { wishProducts } = props;
  const [ sumOfProducts, setSumOfProducts ] = useState({});
  const [ coupon, setCoupon ] = useState(null);
  const [ couponList, setCouponList ] = useState([]);

  const sumOfPriceHandler = (product, num) => {
    const discount = product.availableCoupon !== false;
    const priceSmallSum = product.price * num;
    setSumOfProducts({...sumOfProducts, [product.id] : {priceSmallSum, discount }})
  };

  const couponSelectHandler = (e) => {
    const idx = e.target.value;
    const coupon = couponList[idx];
    setCoupon(coupon);
  };

  const sumOfPrice = () => Object.values(sumOfProducts).reduce((sum, priceInfo) => {
    const priceSmallSum = priceInfo.priceSmallSum;
    if (!coupon || !priceInfo.discount) {
      return sum + priceSmallSum
    }
    if (coupon.type === 'rate') {
      return sum + Math.floor(priceSmallSum * ((100 - coupon.discountRate) / 100));
    }
    if (coupon.type === 'amount') {
      return sum + priceSmallSum - coupon.discountAmount;
    }
    return sum
  }, 0);

  const couponOptions = () => {
    const options = couponList.map((coupon, idx) => <option value={idx}>{coupon.title}</option>);
    return (
      <select className="wish_list_coupon" onChange={couponSelectHandler}>
        <option value="null">쿠폰 선택</option>
        {options}
      </select>
    )
  };

  useEffect(() => {
    setCouponList(coupons);
  }, []);

  if (!wishProducts.length) {
    return (
      <h1 className="wish_list_empty">장바구니가 비어있어요!</h1>

    )
  }

  return (
    <div className="wish_list_container">
      <ul className="wish_list_content">
        {wishProducts.map(product => <WishListItem sumOfPriceHandler={sumOfPriceHandler} product={product}/>)}
      </ul>
      <div className="wish_list_footer">
        {couponOptions()}
        <p className="wish_list_sum">합계: {sumOfPrice()}</p>
      </div>
    </div>
  )
});

export default WishList;