// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-vuQ6g0TSgCZRBu7Ic3kjOiaKX33KYqM",
  authDomain: "escuelatrabajo-9011e.firebaseapp.com",
  projectId: "escuelatrabajo-9011e",
  storageBucket: "escuelatrabajo-9011e.appspot.com",
  messagingSenderId: "235861327427",
  appId: "1:235861327427:web:ed86bb62b51a4c34f59ef6",
  measurementId: "G-M1P72YB33E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app; 
