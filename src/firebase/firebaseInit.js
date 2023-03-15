

import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  // ENTER YOUR CONFIG HERE
  apiKey: "AIzaSyB3EpAq_7rCiReEL599QUSu5-dY8BlDN20",
  authDomain: "fireblogs-1f952.firebaseapp.com",
  projectId: "fireblogs-1f952",
  storageBucket: "fireblogs-1f952.appspot.com",
  messagingSenderId: "253179244361",
  appId: "1:253179244361:web:66743c89c2139f74827498"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();