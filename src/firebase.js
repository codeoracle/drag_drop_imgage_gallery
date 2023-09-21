// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_.API_KEY,
  // authDomain: import.meta.env.VITE_.AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_.PROJECT_ID,
  // storageBucket: import.meta.env.VITE_.STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_.MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_.APP_ID

  apiKey: "AIzaSyA32uMAPKb1-kuvOhqfOnDQifsFu-Ev0uU",
  authDomain: "image-gallery-7ea9a.firebaseapp.com",
  projectId: "image-gallery-7ea9a",
  storageBucket: "image-gallery-7ea9a.appspot.com",
  messagingSenderId: "938682610183",
  appId: "1:938682610183:web:b3a4fa06e2974e435070a2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;