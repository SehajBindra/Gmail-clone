import firebase from 'firebase/app';

import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions



const firebaseConfig = {
    apiKey: "AIzaSyA4WJhl1GpixA-w3J12q6rD6sJI9jQHQak",
    authDomain: "clone-1bb51.firebaseapp.com",
    projectId: "clone-1bb51",
    storageBucket: "clone-1bb51.appspot.com",
    messagingSenderId: "438527929000",
    appId: "1:438527929000:web:4a7fd2cef014011afa709d",
    measurementId: "G-WJHST49VSR"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage , db };
  