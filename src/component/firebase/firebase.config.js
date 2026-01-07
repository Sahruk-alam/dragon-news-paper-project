// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO7izCk0EfrHTMums7uNZxb3F1fodpwUQ",
  authDomain: "dragon-news-paper-7802d.firebaseapp.com",
  projectId: "dragon-news-paper-7802d",
  storageBucket: "dragon-news-paper-7802d.firebasestorage.app",
  messagingSenderId: "63464558190",
  appId: "1:63464558190:web:c0c4a52432b9d90df5607f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);