import React from 'react';
import StripeCheckout  from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const stripePrice = price * 100;
    const publishKey = 'pk_test_51IVeUOEpV9STtFf49PRL1ruobXF6M7P5KdiuqcjeFrLNJpzupcEvirFeZFHZNGtEhbOuE6SZ2UmnGldv9mPaBj0w001VmYUzLJ';

    const onToken = (token) => {
        console.log(token)
        alert('payment successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name = 'CRWN-SHOP Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}    
        />
    )
}

export default StripeCheckoutButton;