// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLLnP_ppVXY-_u_rEJ_aDDoF9nSkmoy6Y",
  authDomain: "service-desk-72e7a.firebaseapp.com",
  projectId: "service-desk-72e7a",
  storageBucket: "service-desk-72e7a.appspot.com",
  messagingSenderId: "90444794105",
  appId: "1:90444794105:web:aa1a3c8b137d545a94ba28",
  measurementId: "G-0H8HGV3E8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
