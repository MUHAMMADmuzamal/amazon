import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmz0zH3c41BS66hrdkU7dZmC_aUWLUkb0",
    authDomain: "fir-c6f97.firebaseapp.com",
    projectId: "fir-c6f97",
    storageBucket: "fir-c6f97.appspot.com",
    messagingSenderId: "781533880100",
    appId: "1:781533880100:web:42d81647aa797979b89db1",
    measurementId: "G-VZYRBSKRVD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };