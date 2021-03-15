import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClxYEA3DSn9FKRa6jrfNVVOkm_lBB2J8E",
  authDomain: "cravecatcher-4bfb3.firebaseapp.com",
  projectId: "cravecatcher-4bfb3",
  storageBucket: "cravecatcher-4bfb3.appspot.com",
  messagingSenderId: "189049289622",
  appId: "1:189049289622:web:f5732b51077b06833d7bb7",
  measurementId: "G-2GMCYVPXYJ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;  