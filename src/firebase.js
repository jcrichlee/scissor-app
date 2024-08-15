import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAnalytics, setUserId } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "scissorswa.firebaseapp.com",
  projectId: "scissorswa",
  storageBucket: "scissorswa.appspot.com",
  messagingSenderId: "831288163391",
  appId: "1:831288163391:web:2a18527fefd7cd39be4c8a",
  measurementId: "G-EGVFHEDN1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

// Set User ID in Analytics after ensuring user is authenticated
onAuthStateChanged(auth, (user) => {
  if (user) {
    setUserId(analytics, user.uid);
  } else {
    console.log('No user is signed in.');
  }
});
