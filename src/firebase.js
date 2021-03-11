import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0onv65Cs5dEVoQz0JIs6TYDzN7h7v-BY",
    authDomain: "clone-8e0dc.firebaseapp.com",
    projectId: "clone-8e0dc",
    storageBucket: "clone-8e0dc.appspot.com",
    messagingSenderId: "912539928011",
    appId: "1:912539928011:web:cc1aea911c12f7ed50224e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };