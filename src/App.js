import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import{connect} from "react-redux"
import HomePage from './page/homepage/homepage.component.jsx'
import ShopPage from "./page/shopPage/shop.component.jsx"
import Header from "./components/header/header.component.jsx"
import SignInSignUp from "./page/sign-in-and-sign-up/sign.component.jsx"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js"
import {setCurrentUser} from "./redux/user/user.actions"


class App extends React.Component {
 
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser}=this.props
   this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth)
       
       userRef.onSnapshot(snapShot => {
     setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
           })
       })
       
     }
     else {
      setCurrentUser(userAuth)
     }
     
  })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
  
      </div>
    );
  }

}


const mapDispatchToProps = dispatch => ({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
