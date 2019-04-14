import React from 'react';

const WishListItem = React.memo((props) => {
  const { title, coverImage, price } = props.product;
  return (
    <li>
      {title}
    </li>
  )
});

export default WishListItem;