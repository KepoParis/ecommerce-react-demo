import React from 'react';

import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartIem => (
          <CartItem key={cartIem.id} item={cartIem} />
        ))
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
