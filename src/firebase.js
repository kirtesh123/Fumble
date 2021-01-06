import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyATb_EE2gwFuww5Fbxx4bTJAnzUQcSPxJc",
    authDomain: "tinder-31def.firebaseapp.com",
    databaseURL: "https://tinder-31def.firebaseio.com",
    projectId: "tinder-31def",
    storageBucket: "tinder-31def.appspot.com",
    messagingSenderId: "339132347279",
    appId: "1:339132347279:web:17a0b08683bda229b751fa",
    measurementId: "G-GTXVJ384Y0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;  