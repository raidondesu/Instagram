import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB835sJnt4gGRHvAhPFGUfNyyS9oo-29mA",
  authDomain: "instagram-2a7e4.firebaseapp.com",
  databaseURL: "https://instagram-2a7e4.firebaseio.com",
  projectId: "instagram-2a7e4",
  storageBucket: "instagram-2a7e4.appspot.com",
  messagingSenderId: "669906632292",
  appId: "1:669906632292:web:193fb7bcefb04451ca6971",
  measurementId: "G-JFBG5RDMRV",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
