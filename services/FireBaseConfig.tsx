// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPNASMGr15xItEgQPottOdUH22j85rgvA",
  authDomain: "theschool-tcc.firebaseapp.com",
  projectId: "theschool-tcc",
  storageBucket: "theschool-tcc.appspot.com",
  messagingSenderId: "802333305493",
  appId: "1:802333305493:web:f25147890842149e56899c",
  measurementId: "G-R3BR5W4WV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);