// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTIHbh33zsJhtiMwCntn1lp7Alyf1MHYQ",
  authDomain: "fir-ventas-38e58.firebaseapp.com",
  projectId: "fir-ventas-38e58",
  storageBucket: "fir-ventas-38e58.appspot.com",
  messagingSenderId: "747077563743",
  appId: "1:747077563743:web:bc0a6170729b6d0cc032ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);