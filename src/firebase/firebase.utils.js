import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyA7G-31EdiHMICip2sSv_HI4HlZNPCVeDs",
    authDomain: "waweru1-db.firebaseapp.com",
    projectId: "waweru1-db",
    storageBucket: "waweru1-db.appspot.com",
    messagingSenderId: "638779048768",
    appId: "1:638779048768:web:44afb253706856fe5cb0a5",
    measurementId: "G-NR282QFCVZ"
}
  
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;