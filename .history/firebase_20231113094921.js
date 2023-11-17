// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDddPQXawU76E1qoFSH-qeWTvzfMQyXPmc",
    authDomain: "newdailyapp-c6833.firebaseapp.com",
    projectId: "newdailyapp-c6833",
    storageBucket: "newdailyapp-c6833.appspot.com",
    messagingSenderId: "763970298048",
    appId: "1:763970298048:web:4f45275ac9e3acf0508d25"
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