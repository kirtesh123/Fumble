import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBvIBA5nkUVwDc5pNqnd8MJYJ4b2ufe6M",
  authDomain: "fumble-cbe9f.firebaseapp.com",
  projectId: "fumble-cbe9f",
  storageBucket: "fumble-cbe9f.appspot.com",
  messagingSenderId: "1073924619018",
  appId: "1:1073924619018:web:61c9bd93625a84fc6c18f3",
  measurementId: "G-72NLT6R19C"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;  