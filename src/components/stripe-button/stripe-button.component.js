import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey = 'pk_test_51HHYcKHotUmUbDCAQuljyd9h6Vl4x0TLFyN9s1EifHMypU0M2FT9ZhvuXSA8FRZr5pwHQnFhQR2kemoIqQ7zFV4u00t2US1G58';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
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
      tokent={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;