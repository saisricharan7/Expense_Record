// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLoILM8BS2N3lasBAySVnxCsmfOXETJ_k",
  authDomain: "expense-record-7656f.firebaseapp.com",
  projectId: "expense-record-7656f",
  storageBucket: "expense-record-7656f.firebasestorage.app",
  messagingSenderId: "234757616241",
  appId: "1:234757616241:web:2d60394b739c525f4ca1d0",
  measurementId: "G-WMDFKNMN3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();
export const db= getFirestore(app);
export default app