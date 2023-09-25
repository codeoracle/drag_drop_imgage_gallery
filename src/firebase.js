// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_.API_KEY,
  authDomain: import.meta.env.VITE_.AUTH_DOMAIN,
  projectId: import.meta.env.VITE_.PROJECT_ID,
  storageBucket: import.meta.env.VITE_.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_.MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_.APP_ID

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
