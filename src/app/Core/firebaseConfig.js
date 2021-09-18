// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDCGJk3_os3pXUvrX4RISBHNQqX4rurCM",
  authDomain: "example-demo-5274f.firebaseapp.com",
  projectId: "example-demo-5274f",
  storageBucket: "example-demo-5274f.appspot.com",
  messagingSenderId: "31194875099",
  appId: "1:31194875099:web:dd0ae633a82f11ff36b8fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);