import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey= "pk_test_51IuVWhCkJDcF3SCVGIDCd0QZ0J8yx1vspD4bfUJOgXoVve07Qy0r5tMRcExkDT0kslA0L0XODUMvbiYPyyx7842h00vwPK7VeQ"

    const onToken = token => {
        console.log(token)
        alert("payment succesful")
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Royal Store"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton