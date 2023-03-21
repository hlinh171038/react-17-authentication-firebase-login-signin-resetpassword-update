import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAy6lQkRlz503cgMB4cRu--udPNFBhVsPA",
  authDomain: "fir-demo-88d39.firebaseapp.com",
  databaseURL: "https://fir-demo-88d39.firebaseio.com",
  projectId: "fir-demo-88d39",
  storageBucket: "fir-demo-88d39.appspot.com",
  messagingSenderId: "112435033171",
  appId: "1:112435033171:web:7296db6ac7800ffa67c2a6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;