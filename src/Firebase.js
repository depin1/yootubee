import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC68mIwwyD_urxUlTVBpkUAB36m4AoTRGo",
    authDomain: "myauth-123.firebaseapp.com",
    projectId: "myauth-123",
    storageBucket: "myauth-123.appspot.com",
    messagingSenderId: "847405637205",
    appId: "1:847405637205:web:9e7eb9521870d3d2a53edc",
    measurementId: "G-P4N0EF7R78"
});

const auth = app.auth();
export { auth };
export default app;