import React from "react"
import "./header.style.scss"
import { Link } from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils.js"
import { connect } from "react-redux"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart_dropdown/cart_dropdown.component"

const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>

        <div className="options">
        <Link className="option" to="/shop">
          SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
        </Link>
            {
                currentUser ?
                    <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null:
<CartDropdown/>}
    </div>
)

const mapStateToPropsFunction = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
})
export default connect(mapStateToPropsFunction)(Header)