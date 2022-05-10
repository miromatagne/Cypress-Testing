import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6uqLEmAFEXceFmUjW6w1LQqrn0V2Z9X4",
  authDomain: "cypress-testing-5a379.firebaseapp.com",
  projectId: "cypress-testing-5a379",
  storageBucket: "cypress-testing-5a379.appspot.com",
  messagingSenderId: "559412448931",
  appId: "1:559412448931:web:5f116edeec5571966eb916",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
