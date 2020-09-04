import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCgl8q8wb9QECS3LuSvE9dQxFeC_pI-RQ",
  authDomain: "instagram-755c5.firebaseapp.com",
  databaseURL: "https://instagram-755c5.firebaseio.com",
  projectId: "instagram-755c5",
  storageBucket: "instagram-755c5.appspot.com",
  messagingSenderId: "969678559002",
  appId: "1:969678559002:web:75f256a84719671fe53ea3",
  measurementId: "G-9MLE1N86Z2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
