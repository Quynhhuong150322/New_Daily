// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR4ESsPwkHNm3197drg0HAy0r5jeR6i5c",
    authDomain: "newdailyapp-4f94c.firebaseapp.com",
    projectId: "newdailyapp-4f94c",
    storageBucket: "newdailyapp-4f94c.appspot.com",
    messagingSenderId: "860488534669",
    appId: "1:860488534669:web:12e0ee01f859efda4170c4"
};
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };