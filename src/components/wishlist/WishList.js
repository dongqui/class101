import React, { useState, useEffect } from 'react';
import WishListItem from './WishListItem';
import { coupons } from "../../data";

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
    const coupon = JSON.parse(e.target.value);
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
    const options = couponList.map(coupon => <option value={JSON.stringify(coupon)}>{coupon.title}</option>);
    return (
      <select onChange={couponSelectHandler}>
        <option value="null">쿠폰 선택</option>
        {options}
      </select>
    )
  };

  useEffect(() => {
    setCouponList(coupons);
  }, []);


  return (
    <>
      <ul>
        {wishProducts.map(product => <WishListItem sumOfPriceHandler={sumOfPriceHandler} product={product}/>)}
      </ul>
      {couponOptions()}
      {sumOfPrice()}
    </>
  )
});

export default WishList;