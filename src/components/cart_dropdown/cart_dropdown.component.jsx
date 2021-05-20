import React from "react"
import "./cart_dropdown.style.scss"
import CustomButton from "../custom-button/custom-button.component"

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton >Go To Checkout</CustomButton>

    </div>
)
export default CartDropdown

