//import * as React from "react"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBiFEOgDr7OvIcew2pCT9k84aDK3cM6RME",
    authDomain: "cineweb-app.firebaseapp.com",
    projectId: "cineweb-app",
    storageBucket: "cineweb-app.appspot.com",
    messagingSenderId: "205688239679",
    appId: "1:205688239679:web:7c8f99436382edd039ea8a"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
// const db = fb.database().ref();
const auth = fb.auth()
const store = fb.firestore()
const storage = fb.storage()



 export {auth,store,storage}