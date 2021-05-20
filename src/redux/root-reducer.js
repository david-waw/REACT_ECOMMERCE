import { combineReducers } from "redux"
import cartReducer from "./cart/cart.reducer.js"
import userReducer from "./user/user.reducer"


export default combineReducers({
     user: userReducer,
     cart: cartReducer
})