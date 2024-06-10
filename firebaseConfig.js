// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM4T3fV6oYqDWuWybF_25KWWTBRAyrnGo",
  authDomain: "notepad-9b70b.firebaseapp.com",
  projectId: "notepad-9b70b",
  storageBucket: "notepad-9b70b.appspot.com",
  messagingSenderId: "291702159599",
  appId: "1:291702159599:web:3cdd0fb633099a4b5dc31a",
  measurementId: "G-BJHEWBFNGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);