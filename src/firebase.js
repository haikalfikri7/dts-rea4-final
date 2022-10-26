// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

///// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCuXncgsBXR0C8c3NspUzXUZd-uaGPZpY',
  authDomain: "dts-rea4-final.firebaseapp.com" ,
  projectId: "dts-rea4-final" ,
  storageBucket: "dts-rea4-final.appspot.com",
  messagingSenderId: "499155599205" ,
  appId: "1:499155599205:web:0e17c6a0d8a2ebf1d42b8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);