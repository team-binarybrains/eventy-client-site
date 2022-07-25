// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8HzDCsPd0-1dlaHpUCwjWSi6O2RmvZbo",
  authDomain: "eventy-b.firebaseapp.com",
  projectId: "eventy-b",
  storageBucket: "venty-b.appspot.com",
  messagingSenderId: "307175668732",
  appId: "1:307175668732:web:ddde8d90f797e45a709079",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
