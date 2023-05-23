// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfg4MftEj2OBKvzMd54lGP9_1xh-08IvQ",
  authDomain: "file-ground.firebaseapp.com",
  databaseURL: "https://file-ground-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "file-ground",
  storageBucket: "file-ground.appspot.com",
  messagingSenderId: "704966594946",
  appId: "1:704966594946:web:dabb670f0f60c569ee7f9b",
  measurementId: "G-031FWEMP6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);