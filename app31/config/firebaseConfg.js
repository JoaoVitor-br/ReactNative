// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDppq2mi8ZK9RtLDKZPAaSpZ_wzmmElMfc",
  authDomain: "autenticartds2-a.firebaseapp.com",
  projectId: "autenticartds2-a",
  storageBucket: "autenticartds2-a.firebasestorage.app",
  messagingSenderId: "504011301616",
  appId: "1:504011301616:web:4cb072b4a3355128df9835",
  measurementId: "G-JRL58MF8FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const autenticacao = getAuth(app);