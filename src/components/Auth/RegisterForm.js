import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
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

const RegisterForm = ({ onRegister }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      onRegister(user);
      console.log('User registered:', user);
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register, please try again');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
