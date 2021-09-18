import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBOLJF1kRJAN1hsshN_Ey_bChTXlV_BupI",
    authDomain: "degree-2.firebaseapp.com",
    projectId: "degree-2",
    storageBucket: "degree-2.appspot.com",
    messagingSenderId: "963561500416",
    appId: "1:963561500416:web:ce16c519930551184dcde5",
    measurementId: "G-JGH3ZHL75T"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;