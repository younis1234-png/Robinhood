import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6a9vyy89e2v6Fuc-zAT7tLFLMUwzdyLo",
  authDomain: "robinhood-cb4ae.firebaseapp.com",
  projectId: "robinhood-cb4ae",
  storageBucket: "robinhood-cb4ae.appspot.com",
  messagingSenderId: "669820175338",
  appId: "1:669820175338:web:38283e9b3061a61429a893",
  measurementId: "G-Y8PWQ033LS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };