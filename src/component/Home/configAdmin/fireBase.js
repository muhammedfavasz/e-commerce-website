import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDzXPuJ0wBcsNVXWzEBZmE2gt2p2jnCKF0",
  authDomain: "admin-panel-1609.firebaseapp.com",
  projectId: "admin-panel-1609",
  storageBucket: "admin-panel-1609.appspot.com",
  messagingSenderId: "240817989388",
  appId: "1:240817989388:web:56c846c93575e527ae8b29",
  measurementId: "G-SX6D0VQ40E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

