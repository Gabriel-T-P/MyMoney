import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBSf2f6fymUYr_LeMjqWUE5ZsWUgyMPb7U",
  authDomain: "mymoney-9294d.firebaseapp.com",
  projectId: "mymoney-9294d",
  storageBucket: "mymoney-9294d.appspot.com",
  messagingSenderId: "1066709413481",
  appId: "1:1066709413481:web:d523be4ca6be2fd4f5fcf8"
};

// Init firebase
firebase.initializeApp(firebaseConfig)

// Init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// Timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }