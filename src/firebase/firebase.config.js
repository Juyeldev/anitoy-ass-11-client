// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWwTj--DUlzhPhEcERoGpLzpQ6jy9xHbc",
  authDomain: "assignment-11-ca829.firebaseapp.com",
  projectId: "assignment-11-ca829",
  storageBucket: "assignment-11-ca829.appspot.com",
  messagingSenderId: "545690466538",
  appId: "1:545690466538:web:119cc755dbe69eab647f93"



  // apiKey:import.meta.env.VITE_apiKey,
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket:import.meta.env.VITE_storageBucket,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId,
  // appId:import.meta.env.VITE_appId




};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;