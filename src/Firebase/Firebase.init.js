// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvFojm4Yh9c6syzWvXoH2wNJgVRlF12ds",
  authDomain: "rk-food-de6b1.firebaseapp.com",
  projectId: "rk-food-de6b1",
  storageBucket: "rk-food-de6b1.firebasestorage.app",
  messagingSenderId: "91155448394",
  appId: "1:91155448394:web:a3f85a7f78fd690dc11cb3",
  measurementId: "G-NGS413799T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth