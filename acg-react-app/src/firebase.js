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
  apiKey: "AIzaSyC65RjPYdeGATDi0f_jntd-9yNLbx7X56Y",
  authDomain: "cypress-acg.firebaseapp.com",
  projectId: "cypress-acg",
  storageBucket: "cypress-acg.appspot.com",
  messagingSenderId: "596268855513",
  appId: "1:596268855513:web:39824b782a1be3e79b8ec8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
