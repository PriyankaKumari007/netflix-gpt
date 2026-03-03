// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB12RnWWEE-J7IjbNeJF-_9KH3DsnhQt6E",
  authDomain: "netflixgpt-b8b5a.firebaseapp.com",
  projectId: "netflixgpt-b8b5a",
  storageBucket: "netflixgpt-b8b5a.firebasestorage.app",
  messagingSenderId: "1018406140243",
  appId: "1:1018406140243:web:24e62f4d4f7f6eb9fd49a6",
  measurementId: "G-BGR4XVGJRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();