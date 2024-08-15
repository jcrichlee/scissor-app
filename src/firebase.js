// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdo5Evk1Cq-ad8CTgBeSLAod3t5XybrZg",
  authDomain: "scissorswa.firebaseapp.com",
  projectId: "scissorswa",
  storageBucket: "scissorswa.appspot.com",
  messagingSenderId: "831288163391",
  appId: "1:831288163391:web:2a18527fefd7cd39be4c8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);