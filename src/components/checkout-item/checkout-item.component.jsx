import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import { 
  CheckoutItemContainer,
  ImageContainer,
  Img,
  SpanContainer,
  QuatitySpan,
  RemoveContainer,
  Arrow,
  ValueContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (<CheckoutItemContainer>
    <ImageContainer>
      <Img src={imageUrl} alt='item' />
    </ImageContainer>
    <SpanContainer>{name}</SpanContainer>
    <QuatitySpan>
      <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
      <ValueContainer>{quantity}</ValueContainer>
      <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
    </QuatitySpan>
    <SpanContainer>{price}</SpanContainer>
    <RemoveContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveContainer>
  </CheckoutItemContainer>
)};

const mapDispatchToProps = dispactch => ({
  clearItem: item => dispactch(clearItemFromCart(item)),
  addItem: item => dispactch(addItem(item)),
  removeItem: item => dispactch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
