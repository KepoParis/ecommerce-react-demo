import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey = 'pk_test_51HHYcKHotUmUbDCAQuljyd9h6Vl4x0TLFyN9s1EifHMypU0M2FT9ZhvuXSA8FRZr5pwHQnFhQR2kemoIqQ7zFV4u00t2US1G58';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStrip,
        token
      }
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please sure you use the provided credit cart.');
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='E Commerce Demo'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;