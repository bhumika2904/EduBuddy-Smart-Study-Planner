// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7_RpOG_X3sd4a6OnIkjNW9-Yq7Z1GF1Q",
  authDomain: "ai-study-buddy-8f71d.firebaseapp.com",
  projectId: "ai-study-buddy-8f71d",
  storageBucket: "ai-study-buddy-8f71d.firebasestorage.app",
  messagingSenderId: "431132735605",
  appId: "1:431132735605:web:98f55ff5f95e66dca1603c"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
