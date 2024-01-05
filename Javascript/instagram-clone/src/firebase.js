import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC45jeN5Sl9NgIhX9zRRFabZ1SD6rhsTHc",
    authDomain: "instagram-clone-d4e75.firebaseapp.com",
    projectId: "instagram-clone-d4e75",
    storageBucket: "instagram-clone-d4e75.appspot.com",
    messagingSenderId: "824817643227",
    appId: "1:824817643227:web:3054590dfa1955cd25e6fe",
    measurementId: "G-CMB2KSGKCN"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

  export {db, auth, storage, functions};