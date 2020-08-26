import React from 'react';

import { CartItemContainer, ImageContainer, ItemDetailContainer, NameContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt='item' />
    <ItemDetailContainer>
      <NameContainer>{name}</NameContainer>
      <span>
        {quantity} x  {price}
      </span>
    </ItemDetailContainer>
  </CartItemContainer>
);

export default CartItem;