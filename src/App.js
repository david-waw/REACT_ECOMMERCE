import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"

import HomePage from './page/homepage/homepage.component.jsx'
import ShopPage from "./page/shopPage/shop.component.jsx"
import Header from "./components/header/header.component.jsx"
import SignInSignUp from "./page/sign-in-and-sign-up/sign.component.jsx"
import {auth} from "./firebase/firebase.utils.js"


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
      
    }
  }
  
  unsubscribeFromAuth = null;
  
  componentDidMount() {
   this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
  })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
  
      </div>
    );
  }

}

export default App;
