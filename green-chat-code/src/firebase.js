import firebase from 'firebase';
//import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD0fdjEJ4_eMFCyDcaZ_101Lg3M7cVyW5A",
  authDomain: "green-chat-48f9d.firebaseapp.com",
  projectId: "green-chat-48f9d",
  storageBucket: "green-chat-48f9d.appspot.com",
  messagingSenderId: "19170090691",
  appId: "1:19170090691:web:715fd0f85edfb373f28c76",
  measurementId: "G-VJ17XCX43Q"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
  db,
  auth
};