// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_kEY,
  authDomain: "mern-book-inventory-a20cb.firebaseapp.com",
  projectId: "mern-book-inventory-a20cb",
  storageBucket: "mern-book-inventory-a20cb.appspot.com",
  messagingSenderId: "44932051455",
  appId: "1:44932051455:web:f71026893b2fbc26af77ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;